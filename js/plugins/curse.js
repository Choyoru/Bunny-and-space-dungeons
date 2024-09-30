// Plugin : curse.js
/*:
 * @plugindesc Ce pluging gère les malédictions et les variables accosiée.
 * @author Choyoru
 *
 * @help Ce plugin modifie la page de statut pour afficher uniquement les statistiques.
 */

(function() {

    // Remplacer la méthode qui se déclenche au début du tour
    const _BattleManager_startTurn = BattleManager.startTurn;
    BattleManager.startTurn = function() {
        // Appeler la fonction de base
        _BattleManager_startTurn.call(this);
        console.log("test");
        // Parcourir les membres de l'équipe
        $gameParty.members().forEach(function(actor) {
            // Parcourir les états du personnage
            actor.states().forEach(function(state) {
                // Vérifier les notes de l'état pour une balise <event:1>
                if (state.note.match(/<event:(\d+)>/)) {
                    var commonEventId = Number(RegExp.$1); // Récupère l'ID de l'événement commun
                    // Lancer l'événement commun correspondant
                    $gameTemp.reserveCommonEvent(commonEventId);
                }
            });
        });
    };

    window.calculpurity = function() {
        $gameVariables.value(24) = 100 - Math.round(($gameVariables.value(25) + $gameVariables.value(26) + $gameVariables.value(27) + $gameVariables.value(28)) / 4);
        console.log($gameVariables.value(24));
    }
})();