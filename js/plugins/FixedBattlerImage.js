/*:
 * @plugindesc Plugin to replace SV Battler image with a fixed image from the pictures folder and to show/hide it via plugin commands.
 * @help
 */

(function() {
    var parameters = PluginManager.parameters('FixedBattlerImage');
    
    function getFixedBattlerImage() {
        var image = [];
        var BaseSprite = $gameVariables.value(4);
        var equips = $gameActors.actor(1).equips();
        var underwear = "";
        var gloves = "";
        var boots = "";
        var clothes = "";
        var i = 0;
        var exp;

        var armors = equips.filter(function(equip) {
            return equip && DataManager.isArmor(equip);
        });
        var armorIds = armors.map(function(armor) {
            if(armor.etypeId == 3){
                clothes = $dataArmors[armor.baseItemId].meta.Name;  
            }
            if(armor.etypeId == 4){
                underwear = $dataArmors[armor.baseItemId].meta.Name;
            }
            if(armor.etypeId == 5){
                gloves = $dataArmors[armor.baseItemId].meta.Name;
            }
            if(armor.etypeId == 6){
                boots = $dataArmors[armor.baseItemId].meta.Name;
            }
        });

        if(BaseSprite==0){
            BaseSprite = "Emma1";
        }

        image[i] = BaseSprite + '_' + 'hairback1';
        i++;
        image[i] = BaseSprite + '_' + 'base1';
        
        if(underwear && underwear != ""){
            i++;
            image[i] = BaseSprite + '_' + underwear;
        }

        if(gloves && gloves != ""){
            i++;
            image[i] = BaseSprite + '_' + gloves + "_L";
        }

        if(boots && boots != ""){
            i++;
            image[i] = BaseSprite + '_' + boots; 
        }

        if(clothes && clothes != ""){
            i++;
            image[i] = BaseSprite + '_' + clothes;
        }

        if(gloves && gloves != ""){
            i++;
            image[i] = BaseSprite + '_' + gloves + "_R";
        }

        if(!exp){
            exp = "face1";
        }
        i++;
        image[i] = BaseSprite + '_' + exp;

        i++;
        image[i] = BaseSprite + '_' + 'hair1';
        
        return image;
        
    }

    var _Sprite_Actor_setBattler = Sprite_Actor.prototype.setBattler;
    Sprite_Actor.prototype.setBattler = function(battler) {
        _Sprite_Actor_setBattler.call(this, battler);
        if (battler && battler.actor) {
            var actor = battler.actor();
            var fixedBattlerImage = getFixedBattlerImage(actor);
            var battlespritearray = [];
            if (fixedBattlerImage) {
                for (let i = 0; i < fixedBattlerImage.length; i++) {
                    if (!battlespritearray[i]) {
                        battlespritearray[i] = new Sprite();
                        battlespritearray[i].x = -105;
                        battlespritearray[i].y = -600;
                        this.addChild(battlespritearray[i]);
                        console.log(battlespritearray[i]);
                    }
                    battlespritearray[i].bitmap = ImageManager.loadPicture(fixedBattlerImage[i]);
                    this._fixedBattlerSprite = battlespritearray;
                    /*if (!this._fixedBattlerSprite[i]) {
                        this._fixedBattlerSprite[i] = new Sprite();
                        this._fixedBattlerSprite[i].x = -105;
                        this._fixedBattlerSprite[i].y = -600;
                        this.addChild(this._fixedBattlerSprite[i]);
                        console.log(this._fixedBattlerSprite[i]);
                    }
                    this._fixedBattlerSprite[i].bitmap = ImageManager.loadPicture(fixedBattlerImage[i]);*/
                }
                if (this._battlerSprite) {
                    this._battlerSprite.visible = false;
                }
            } else {
                if (this._fixedBattlerSprite) {
                    this.removeChild(this._fixedBattlerSprite);
                    this._fixedBattlerSprite = null;
                }
                if (this._battlerSprite) {
                    this._battlerSprite.visible = true;
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