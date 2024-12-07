/*:
 * @plugindesc Plugin to replace SV Battler image with a fixed image from the pictures folder and to show/hide it via plugin commands.
 * @help
 */

(function() {
    function getFixedBattlerImage() {
        var image = [];
        var BaseSprite = $gameVariables.value(4) + "_";
        var i = 0;
        var exp;
        var equips = $gameActors.actor(1).equips();

        if($gameVariables.value(11) != 0){
            exp = $gameVariables.value(11);
        }

        if(BaseSprite==0){
            BaseSprite = "Emma1";
        }

        image[i] = BaseSprite + 'hairback1';
        i++;
        image[i] = BaseSprite + 'base1';
        
        if(equips[3] && equips[3] != ""){
            i++;
            image[i] = BaseSprite + equips[3].meta.Name;
        }

        if(equips[4] && equips[4] != ""){
            i++;
            image[i] = BaseSprite + equips[4].meta.Name + "_L";
        }

        if(equips[5] && equips[5] != ""){
            i++;
            image[i] = BaseSprite + equips[5].meta.Name; 
        }else{
            i++;
            image[i] = BaseSprite + "boots0";
        }

        if(equips[2] && equips[2] != ""){
            i++;
            image[i] = BaseSprite + equips[2].meta.Name;
        }

        if(equips[1] && equips[1] != ""){
            i++;
            image[i] = BaseSprite + equips[1].meta.Name;
        }


        if(equips[4] && equips[4] != ""){
            i++;
            image[i] = BaseSprite + equips[4].meta.Name + "_R";
        }

        if(!exp){
            if($gameVariables.value(13) < 25){
                exp = "face4";
            }else if($gameVariables.value(13) < 75 && $gameVariables.value(13) >= 25){
                exp = "face3";
            }else{
                exp = "face1";
            }
        }
        i++;
        image[i] = BaseSprite + exp;

        i++;
        image[i] = BaseSprite + 'hair1';
        
        return image;
        
    }

    var actor_img;

    var _Sprite_Actor_setBattler = Sprite_Actor.prototype.setBattler;
    Sprite_Actor.prototype.setBattler = function(battler) {
    _Sprite_Actor_setBattler.call(this, battler);
        
        if (battler && battler.actor) {
            var actor = battler.actor();
            var fixedBattlerImage = getFixedBattlerImage(actor);
            
            // Si l'image du battler a changé
            if (actor_img !== fixedBattlerImage) {
                actor_img = fixedBattlerImage;
                
                // Si on a des images à mettre à jour
                console.log("gameSwitches.value(9):"+$gameSwitches.value(9));
                if (fixedBattlerImage && $gameSwitches.value(9) == false) {
                    // Initialise le tableau battlespritearray s'il est vide
                    if (!this._fixedBattlerSprite) {
                        this._fixedBattlerSprite = [];
                    }

                    // Ajuster le nombre de sprites en fonction du nombre d'images
                    while (this._fixedBattlerSprite.length > fixedBattlerImage.length) {
                        let spriteToRemove = this._fixedBattlerSprite.pop();
                        this.removeChild(spriteToRemove); // Retirer l'excédent
                    }

                    for (let i = 0; i < fixedBattlerImage.length; i++) {
                        // Créer un nouveau sprite si nécessaire
                        if (!this._fixedBattlerSprite[i]) {
                            let sprite = new Sprite();
                            sprite.x = -105;
                            sprite.y = -550;
                            this._fixedBattlerSprite[i] = sprite;
                            this.addChild(sprite); // Ajouter uniquement si nouveau
                        }
                        // Mettre à jour l'image du sprite
                        this._fixedBattlerSprite[i].bitmap = ImageManager.loadPicture(fixedBattlerImage[i]);
                    }

                    // Cacher l'ancien sprite de battler
                    if (this._battlerSprite) {
                        this._battlerSprite.visible = false;
                    }
                } else {
                    // Si aucune image de battler fixe n'est disponible, restaurer l'état par défaut
                    if (this._fixedBattlerSprite) {
                        this._fixedBattlerSprite.forEach(sprite => this.removeChild(sprite));
                        this._fixedBattlerSprite = null;
                    }
                    if (this._battlerSprite) {
                        this._battlerSprite.visible = true;
                    }
                }
            }
        }
    };

    var _Sprite_Battler_updateDamagePopup = Sprite_Battler.prototype.updateDamagePopup;
    Sprite_Battler.prototype.updateDamagePopup = function() {
        _Sprite_Battler_updateDamagePopup.call(this);
        if (this._actor && this._actor.isActor() && this._fixedBattlerSprite) {
            if (this._damages.length > 0) {
                var last = this._damages[this._damages.length - 1];
                last.x = 230;
                last.y = 400; 
            }
        }
    };

})();