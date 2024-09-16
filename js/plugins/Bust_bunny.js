//=============================================================================
// Bust_Bunny.js
//=============================================================================

/*:
 * @plugindesc Displays Bunny Bust.
 * @author Choyoru
 *
 */

(function() {

    window.showbust = function(x,y,exp) {
        var image = [];
        var base = $gameVariables.value(4) + "_";
        var i = 0;

        var equips = $gameActors.actor(1).equips();

        /*
        var underwear = "";
        var gloves = "";
        var boots = "";
        var clothes = "";
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
            return armor;
        });
        console.log("IDs des armures équipées : ", armorIds);*/
        
        image[i] = new Sprite();
        image[i].bitmap = ImageManager.loadPicture(base + 'hairback1');
		image[i].x = x;
		image[i].y = y; 
        
        i++;
        image[i] = new Sprite();
        image[i].bitmap = ImageManager.loadPicture(base + 'base1');
		image[i].x = x;
		image[i].y = y; 

        if(equips[3] && equips[3] != ""){
            i++;
            image[i] = new Sprite();
            image[i].bitmap = ImageManager.loadPicture(base + equips[3].meta.Name);
            image[i].x = x;
            image[i].y = y; 
        }

        if(equips[4] && equips[4] != ""){
            i++;
            image[i] = new Sprite();
            image[i].bitmap = ImageManager.loadPicture(base + equips[4].meta.Name + "_L");
            image[i].x = x;
            image[i].y = y; 
        }

        if(equips[5] && equips[5] != ""){
            i++;
            image[i] = new Sprite();
            image[i].bitmap = ImageManager.loadPicture(base + equips[5].meta.Name);
            image[i].x = x;
            image[i].y = y; 
        }

        if(equips[2] && equips[2] != ""){
            i++;
            image[i] = new Sprite();
            image[i].bitmap = ImageManager.loadPicture(base + equips[2].meta.Name);
            image[i].x = x;
            image[i].y = y; 
        }

        if(equips[4] && equips[4] != ""){
            i++;
            image[i] = new Sprite();
            image[i].bitmap = ImageManager.loadPicture(base + equips[4].meta.Name + "_R");
            image[i].x = x;
            image[i].y = y; 
        }

        if(!exp){
            exp = "face1";
        }
        i++;
        image[i] = new Sprite();
        image[i].bitmap = ImageManager.loadPicture(base + exp);
		image[i].x = x;
		image[i].y = y; 

        i++;
        image[i] = new Sprite();
        image[i].bitmap = ImageManager.loadPicture(base + 'hair1');
		image[i].x = x;
		image[i].y = y; 

        return image;
    };

})();