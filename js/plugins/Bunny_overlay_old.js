//=============================================================================
// Choyoru - Bunny Overlay
// Bunny_overlay.js
 /*:
 * @plugindesc v1.00
 * Bunny Overlay.
 * @author Choyoru
 * 
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * overclose(); for close overlay.
 * overopen(); for open overlay.
 * 
 * note for no overlay in this map : 
 * <Overlay:hidden>
 */

(function() {
    // Créer une nouvelle classe de fenêtre personnalisée

    var Overlay_left;
    var Overlay_right;

    function Window_OverlayLeft() {
        this.initialize.apply(this, arguments);
    }
    function Window_OverlayRight() {
        this.initialize.apply(this, arguments);
    }

    // Hérite de Window_Base
    Window_OverlayLeft.prototype = Object.create(Window_Base.prototype);
    Window_OverlayLeft.prototype.constructor = Window_OverlayLeft;
    Window_OverlayRight.prototype = Object.create(Window_Base.prototype);
    Window_OverlayRight.prototype.constructor = Window_OverlayRight;

    // Initialisation de la fenêtre
    Window_OverlayLeft.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();  // Actualise l'affichage dès l'initialisation
    };
    Window_OverlayRight.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();  // Actualise l'affichage dès l'initialisation
    };

    // Méthode pour mettre à jour le contenu de la fenêtre
    Window_OverlayLeft.prototype.refresh = function() {
        // Efface l'ancien contenu de la fenêtre
        this.contents.clear();

        var x = 0; 
        var y = 0; 
        var width = 265;
        var actor = $gameActors.actor(1);

        this.drawText(actor.name(), x, y, this.contentsWidth(), 'center');
        showbust(x + 30,y + 20).forEach((element) => this.addChild(element));
        this.drawActorHp(actor, x, y + 570, width);
        this.drawActorMp(actor, x, y + 610, width);
        this.drawActorTp(actor, x, y + 650, width);
    };
    Window_OverlayRight.prototype.refresh = function() {
        // Efface l'ancien contenu de la fenêtre
        this.contents.clear();

        var x = 0; 
        var y = 0; 
        var width = 150;
        var maxwidth = 265;
        var actor = $gameActors.actor(1);
        var equips = actor.equips();

        if(equips[3]){
            if(equips[2] && equips[3].durability != -1){
                $gameVariables.setValue(12, equips[3].durability);
                equips[3].durability = -1;
            }
            else if(equips[3].durability == -1 && !equips[2]){
                equips[3].durability = $gameVariables.value(12);
            }
        }

        this.drawText($gameMap.displayName(), x, y, this.contentsWidth(), 'center');
        this.drawItemDur(equips[0], x, y + 50, width);
        this.drawItemDur(equips[1], x, y + 100, width);
        this.drawItemDur(equips[2], x, y + 150, width);
        this.drawItemDur(equips[3], x, y + 200, width);
        this.drawItemDur(equips[4], x, y + 250, width);
        this.drawItemDur(equips[5], x, y + 300, width);
        this.drawActorHorL(actor, x, y + 400, maxwidth);
        this.drawActorIcons(actor, x, y + 450);
    };

    // Ajout de la fenêtre à la scène de la carte
    var _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
            _Scene_Map_start.call(this);

            var overlayHidden = $dataMap.meta && $dataMap.meta.Overlay === 'hidden';

            if (!overlayHidden) {
            // Créer une instance de la fenêtre (dimensions 300x600)
                Overlay_left = new Window_OverlayLeft(0, 0, 300, 720);
                Overlay_right = new Window_OverlayRight(980, 0, 300, 720);

                // Ajouter la fenêtre à la scène actuelle
                this.addWindow(Overlay_left);
                this.addWindow(Overlay_right);
            }
    };

    window.overclose = function() {
        if(Overlay_left){
            Overlay_left.close();
            Overlay_right.close();
        }
    };
    window.overopen = function() {
        if(Overlay_left){
            Overlay_left.open();
            Overlay_right.open();
        }
    };
    window.overhidden = function() {
        if(Overlay_left){
            Overlay_left.visible = false;
            Overlay_right.visible = false;
        }
    };
    window.overvisible = function() {
        if(Overlay_left){
            Overlay_left.visible = true;
            Overlay_right.visible = true;
        }
    };

    window.overRefresh = function(){
        Overlay_left.refresh();
        Overlay_right.refresh();
    }

    window.resetdurunderwear = function(){
        var actor = $gameActors.actor(1);
        var equips = actor.equips();
        if(equips[3]){
            equips[3].durability = $gameVariables.value(12);
        }
        $gameVariables.setValue(12, 0);
    }

    Window_Base.prototype.drawItemDur = function(item, x, y, width) {
        if(item){
            var color1 = this.durGaugeColor1();
            var color2 = this.durGaugeColor2();
            var rate;
            var dur = item.durability;
            if(dur == -1){
                rate = 1;
                dur = "---";
            }else{
                rate = dur / item.durMax;
            }

            this.drawIcon(item.baseItemIconIndex, x, y);
            this.drawGauge(x + 50, y, width + 60, rate, color1, color2);
            this.changeTextColor(this.systemColor());
            this.drawText(item.name, x + 50, y, width);
            this.drawCurrentAndMax(dur, item.durMax, x + 110, y, width, color1, color2);
        }
        else{
            this.drawText("----------", x + 50, y, width);
        }
    };
    Window_Base.prototype.durGaugeColor1 = function() {
        return this.textColor(8);
    };
    
    Window_Base.prototype.durGaugeColor2 = function() {
        return this.textColor(7);
    };
})();