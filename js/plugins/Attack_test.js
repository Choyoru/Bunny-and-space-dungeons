// Ouvrez le gestionnaire de scripts dans RPG Maker MV et ajoutez le script suivant

// Alias de la fonction Game_Action.prototype.apply pour ajouter notre vérification
var _Game_Action_apply = Game_Action.prototype.apply;

Game_Action.prototype.apply = function(target) {
    // Appel de la méthode originale
    _Game_Action_apply.call(this, target);
    
    // Vérification si l'attaque a réussi ou non
    if (target.result().missed || target.result().evaded) {
        $gameSwitches.setValue(46, true);
    } else {
        $gameSwitches.setValue(46, false);
    }
};
