/*:
 * @plugindesc Change le sprite des ennemis selon leurs états et notes après chaque tour de combat.
 * @help
 * Ce plugin inspecte les notes des ennemis pour :
 * - <Sprite Base: "base"> : définit le sprite par défaut.
 * - <Sprite etat: n,"sprite"> : définit le sprite selon l'état `n`.
 * 
 * Les images doivent être dans le dossier "sv_enemies".
 */

(function() {

    // Fonction pour récupérer les notes des ennemis avec deux éléments
    function getEnemyNoteForState(enemy, stateId) {
        const regex = new RegExp(`<Sprite etat: ${stateId},"(.*?)">`, 'i'); // Capture l'image pour un état spécifique
        const match = enemy.note.match(regex);
        return match ? match[1].trim() : null; // Renvoie le nom de l'image, ou null si non trouvé
    }

    // Fonction pour récupérer la note du sprite de base
    function getEnemyBaseSprite(enemy) {
        const regex = /<Sprite Base:\s*"(.*?)">/i; // Capture le sprite de base
        const match = enemy.note.match(regex);
        return match ? match[1].trim() : null; // Renvoie le sprite de base ou null
    }

    // Vérifie les états et change les sprites à la fin de chaque tour
    const _BattleManager_endTurn = BattleManager.endTurn;
    BattleManager.endTurn = function() {
        // Appelle la méthode originale
        _BattleManager_endTurn.call(this);

        // Parcourt tous les ennemis en vie
        $gameTroop.members().forEach(enemy => {
            const baseSprite = getEnemyBaseSprite(enemy.enemy());
            if (baseSprite) {
                let spriteChanged = false;

                // Parcourt les états actifs pour trouver un sprite correspondant
                for (const state of enemy.states()) {
                    const spriteState = getEnemyNoteForState(enemy.enemy(), state.id);
                    if (spriteState) {
                        updateEnemySprite(enemy, spriteState); // Change l'image du sprite
                        spriteChanged = true;
                        break; // Dès qu'un état correspond, applique le sprite
                    }
                }

                // Si aucun état ne correspond, utilise le sprite de base
                if (!spriteChanged) {
                    updateEnemySprite(enemy, baseSprite); // Change l'image du sprite
                }
            }
        });
    };

    // Méthode pour changer et mettre à jour le sprite visuel d'un ennemi
    function updateEnemySprite(enemy, imageName) {
        console.log(`Updating enemy sprite to: ${imageName}`); // Debugging

        // Vérifie si le fichier existe dans le dossier img/sv_enemies
        const bitmapPath = `img/sv_enemies/${imageName}.png`;

        try {
            const bitmap = ImageManager.loadSvEnemy(imageName); // Charge l'image depuis RPG Maker MV
            if (!bitmap.isReady()) {
                console.error(`Failed to load sprite: ${bitmapPath}`);
                return false;
            }
        } catch (error) {
            console.error(`Error loading sprite: ${bitmapPath}`, error);
            return false;
        }

        // Change l'image dans Game_Enemy
        enemy.setBattlerImage(imageName);

        // Rafraîchit le sprite dans la scène
        const spriteset = SceneManager._scene._spriteset;
        if (spriteset && spriteset._enemySprites) {
            const sprite = spriteset._enemySprites.find(s => s._battler === enemy);
            if (sprite) {
                console.log(`Sprite found for enemy: ${enemy.name()}`);
                sprite._enemy._battlerName = imageName; // Met à jour le nom de l'image
                sprite.bitmap = ImageManager.loadSvEnemy(imageName); // Recharge le bitmap
                sprite.updateBitmap(); // Force la mise à jour du bitmap
            } else {
                console.warn(`No sprite found for enemy: ${enemy.name()}`);
            }
        }
        return true;
    }

    // Méthode pour changer l'image de battler ennemi dans Game_Enemy
    Game_Enemy.prototype.setBattlerImage = function(imageName) {
        this._battlerName = imageName;
    };

})();