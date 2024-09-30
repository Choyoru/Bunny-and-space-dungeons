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
    }

    window.Exibitionism = function() {
        var actor = $gameActors.actor(1);
        var equips = actor.equips();
        var equipItem;

        if(equips[3] && equips[3] != ""){

            equipItem = equips[3];
            $gameParty.gainItem(equipItem, 1);
            actor.changeEquip(3, null);
        } else if(equips[4] && equips[4] != ""){

            equipItem = equips[4];
            $gameParty.gainItem(equipItem, 1);
            actor.changeEquip(4, null);

        }else if(equips[5] && equips[5] != ""){

            equipItem = equips[5];
            $gameParty.gainItem(equipItem, 1);
            actor.changeEquip(5, null);

        } else if(equips[2] && equips[2] != ""){

            equipItem = equips[2];
            $gameParty.gainItem(equipItem, 1);
            actor.changeEquip(2, null);

        }

        $gameMessage.add(actor.name() + " removed " + equipItem.name + " and it was added to the inventory.");

    }
})();