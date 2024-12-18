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

        if(!exp && $gameVariables.value(11) != 0){
            exp = $gameVariables.value(11);
        }

        var equips = $gameActors.actor(1).equips();

        console.log(equips);
        
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
        }else{
            i++;
            image[i] = new Sprite();
            image[i].bitmap = ImageManager.loadPicture(base + "boots0");
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

        if(equips[1] && equips[1] != ""){
            i++;
            image[i] = new Sprite();
            image[i].bitmap = ImageManager.loadPicture(base + equips[1].meta.Name);
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
            if($gameVariables.value(13) < 25){
                exp = "face4";
            }else if($gameVariables.value(13) < 75 && $gameVariables.value(13) >= 25){
                exp = "face3";
            }else{
                exp = "face1";
            }
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

    window.nbrequip = function() {
        var equips = $gameActors.actor(1).equips();
        var nbr = 0;

        for (let i = 2; i < equips.length; i++) {
            if(equips[i] && equips[i] != ""){
                nbr++;
            }
        }

        return nbr;
    }

})();