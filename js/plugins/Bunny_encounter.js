//=============================================================================
// Bust_encouter.js
//=============================================================================

/*:
 * @plugindesc mix possible encounters on a map.
 * @author Choyoru
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * encounter(x); to start mixing encounters in the dungeon..
 * 
 * x = 0 : easy
 * x = 1 : normal
 * x = 2 : hard
 * x = 3 : hell
 */

(function() {
    var min = 41;
    var max = 61;
    var easy_enc = [1,1,1,1,1];
    var normal_enc = [1,1,1,1,1,1,1];
    var hard_enc = [1,1,1,1,1,1,1,1,1,1,1];
    var hell_enc = [1,1,1,1,1,1,1,1,1,1,1,1,1];
    var curios = [2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    function shuffle(array) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }

    window.encounter = function(lvl) {
        let arr;

        shuffle(curios);

        if(lvl <= 0){
            arr = easy_enc;
        }
        else if(lvl == 1){
            arr = normal_enc;
        }
        else if(lvl == 2){
            arr = hard_enc;
        }
        else{
            arr = hell_enc;
        }

        for(let i = arr.length; i < 30; i++){
            arr[i] = curios[i];
        }

        console.log(arr);

        shuffle(arr);

        for(let i = 0; i < arr.length; i++){
            if(i < max){
                $gameVariables.setValue(min + i, arr[i]);
                console.log($gameVariables.value(min + 1));
            }
        }
    };

})();