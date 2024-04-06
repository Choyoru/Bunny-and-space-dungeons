//=============================================================================
// DontGainTpInDamage.js
//=============================================================================
 
/*:
 * @plugindesc Plugin permettant de ne plus gagner de TP lors de dommage
 * @author Tonyryu
 *
 * @help http://www.tonyryudev.com/
 * 
 */
 
(function() {
    Game_Battler.prototype.initTp = function() {this.setTp($gameVariables.value(5));};
    Game_Battler.prototype.chargeTpByDamage = function(damageRate) {};
  })();