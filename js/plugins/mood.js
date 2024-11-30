// Plugin : mood.js
/*:
 * @plugindesc Ce pluging gère l'humeur des personnages.
 * @author Choyoru
 *
 * @help 
 */

(function() {

    window.calculmood = function() {

        var mood = 100;
        var badmood = 10;

        /* Exibitionnisme */
        if($gameVariables.value(26) >= 75){
            if(nbrequip() > 1){
                mood -= badmood*(nbrequip() - 1);
            }
        }
        else if($gameVariables.value(26) >= 50){
            if(nbrequip() > 2){
                mood -= badmood*(nbrequip() - 2);
            }
            if(nbrequip() < 2){
                mood -= badmood*(2 - nbrequip());
            }
        }
        else if($gameVariables.value(26) >= 25){
            if(nbrequip() > 3){
                mood -= badmood;
            }
            if(nbrequip() < 3){
                mood -= badmood*(3 - nbrequip());
            }
        }
        else{
            if(nbrequip() < 4){
                mood -= badmood*(4 - nbrequip());
            }
        }

        /* Libido */
        if($gameVariables.value(28) >= 75){
            if($gameVariables.value(5) < 75){
                mood -= badmood*Math.round($gameVariables.Value(5)/25);
            }
        }
        else if($gameVariables.value(28) >= 50){
            if($gameVariables.value(5) < 50){
                mood -= badmood*Math.round($gameVariables.Value(5)/25);
            }
        }
        else if($gameVariables.value(28) >= 25){
            if($gameVariables.value(5) < 25){
                mood -= badmood*Math.round($gameVariables.Value(5)/25);
            }
        }

        /* Secure */
        if(mood < 0){
            mood = 0;
        } else if(mood > 100){
            mood = 100;
        }

        $gameVariables.setValue(13, mood);
        moodbuff();
    }


    window.txtmood = function() {

        var txt = "Everything's fine";
        var txt_change = "";

        /* Exibitionnisme */
        if($gameVariables.value(26) >= 75){
            if(nbrequip() > 1){
                txt_change += "I don't feel comfortable in my clothes. \n";
            }
        }
        else if($gameVariables.value(26) >= 50){
            if(nbrequip() > 2){
                txt_change += "I don't feel comfortable in my clothes. \n";
            }
            if(nbrequip() < 2){
                txt_change += "I'm not comfortable showing my body like this. \n";
            }
        }
        else if($gameVariables.value(26) >= 25){
            if(nbrequip() > 3){
                txt_change += "I don't feel comfortable in my clothes. \n";
            }
            if(nbrequip() < 3){
                txt_change += "I'm not comfortable showing my body like this. \n";
            }
        }
        else{
            if(nbrequip() < 4){
                txt_change += "I'm not comfortable showing my body like this. \n";
            }
        }

        /* Libido */
        if($gameVariables.value(28) >= 75){
            if($gameVariables.value(5) < 75){
                txt_change += "I feel a little ashamed. \n";
            }
        }
        else if($gameVariables.value(28) >= 50){
            if($gameVariables.value(5) < 50){
                txt_change += "I feel a little ashamed. \n";
            }
        }
        else if($gameVariables.value(28) >= 25){
            if($gameVariables.value(5) < 25){
                txt_change += "I feel a little ashamed. \n";
            }
        }

        if(txt_change != ""){
            txt = txt_change; 
        }

        $gameVariables.setValue(10, txt);
    }

    window.moodbuff = function() {

        if($gameActors.actor(1).isStateAffected(16) || $gameActors.actor(1).isStateAffected(17) || $gameActors.actor(1).isStateAffected(18)){
            if ($gameActors.actor(1).isStateAffected(16) && $gameVariables.value(13) >= 25) {
                $gameActors.actor(1).removeState(16);
            } 
            else if(!$gameActors.actor(1).isStateAffected(16) && $gameVariables.value(13) < 25){
                $gameActors.actor(1).addState(16);
            }

            if($gameActors.actor(1).isStateAffected(17) && ($gameVariables.value(13) >= 75 || $gameVariables.value(13) < 25)) {
                $gameActors.actor(1).removeState(17);
            } 
            else if(!$gameActors.actor(1).isStateAffected(17) && ($gameVariables.value(13) < 75 && $gameVariables.value(13) >= 25)){
                $gameActors.actor(1).addState(17);
            }

            if ($gameActors.actor(1).isStateAffected(18) && $gameVariables.value(13) < 75) {
                $gameActors.actor(1).removeState(18);
            } 
            else if (!$gameActors.actor(1).isStateAffected(18) && $gameVariables.value(13) >= 75) {
                $gameActors.actor(1).addState(18);
            }
        }

        if(!$gameActors.actor(1).isStateAffected(16) && !$gameActors.actor(1).isStateAffected(17) && !$gameActors.actor(1).isStateAffected(18)){
            if($gameVariables.value(13) >= 75){
                $gameActors.actor(1).addState(18);
            }else if($gameVariables.value(13) >= 25){
                $gameActors.actor(1).addState(17);
            }else{
                $gameActors.actor(1).addState(16);
            }
        }
    }

})();