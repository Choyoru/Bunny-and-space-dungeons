//=============================================================================
// Choyoru - Bunny Overlay (Mise à jour avec fenêtres pour boutons)
// Bunny_overlay.js
//=============================================================================

(function() {
    var Overlay_left;
    var Overlay_right;
    var buttonMenu;
    var buttonSkill;
    var buttonToggle;

    function Window_OverlayLeft() {
        this.initialize.apply(this, arguments);
    }
    function Window_OverlayRight() {
        this.initialize.apply(this, arguments);
    }
    function Window_ButtonMenu() {
        this.initialize.apply(this, arguments);
    }
    function Window_ButtonSkill() {
        this.initialize.apply(this, arguments);
    }
    function Window_ButtonToggleOverlay() {
        this.initialize.apply(this, arguments);
    }

    // Hérite de Window_Base
    Window_OverlayLeft.prototype = Object.create(Window_Base.prototype);
    Window_OverlayLeft.prototype.constructor = Window_OverlayLeft;

    Window_OverlayRight.prototype = Object.create(Window_Base.prototype);
    Window_OverlayRight.prototype.constructor = Window_OverlayRight;

    Window_ButtonMenu.prototype = Object.create(Window_Base.prototype);
    Window_ButtonMenu.prototype.constructor = Window_ButtonMenu;

    Window_ButtonSkill.prototype = Object.create(Window_Base.prototype);
    Window_ButtonSkill.prototype.constructor = Window_ButtonSkill;

    Window_ButtonToggleOverlay.prototype = Object.create(Window_Base.prototype);
    Window_ButtonToggleOverlay.prototype.constructor = Window_ButtonToggleOverlay;

    // Initialisation des fenêtres principales
    Window_OverlayLeft.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };
    Window_OverlayRight.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };

    Window_OverlayRight.prototype.refresh = function() {
        this.contents.clear();
    };

    // Initialisation des fenêtres boutons
    Window_ButtonMenu.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };
    Window_ButtonSkill.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };
    Window_ButtonToggleOverlay.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };

    // Contenu des fenêtres boutons
    Window_OverlayLeft.prototype.refresh = function() {
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
    Window_ButtonMenu.prototype.refresh = function() {
        this.contents.clear();
        this.drawText("Menu", 0, -5, this.contentsWidth(), 'center');
    };
    Window_ButtonSkill.prototype.refresh = function() {
        this.contents.clear();
        this.drawText("Spell", 0, -5, this.contentsWidth(), 'center');
    };
    Window_ButtonToggleOverlay.prototype.refresh = function() {
        this.contents.clear();
        this.drawText("Hide", 0, -5, this.contentsWidth(), 'center');
    };

    // Gestion des clics pour chaque bouton
    Window_ButtonMenu.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        console.log(this.x);
        console.log(TouchInput.x);
        console.log(this.width);
        if (TouchInput.isTriggered() &&
            TouchInput.x >= this.x && TouchInput.x <= this.x + this.width &&
            TouchInput.y >= this.y && TouchInput.y <= this.y + this.height) {
            SceneManager.push(Scene_Menu);
        }
    };

    Window_ButtonSkill.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        if (TouchInput.isTriggered() &&
            TouchInput.x >= this.x && TouchInput.x <= this.x + this.width &&
            TouchInput.y >= this.y && TouchInput.y <= this.y + this.height) {
            var actor = $gameActors.actor(1);
            if (actor && actor._classId === 1) {
                var skillId = 19; // ID de la compétence à utiliser
                var action = new Game_Action(actor);
                action.setSkill(skillId);
                var target = $gameParty.members()[0];
                action.apply(target);
                overclose();
                AudioManager.playSe({ name: "Item3", volume: 10, pitch: 100, pan: 0 });
                $gameMessage.add(actor.name() + " use " + $dataSkills[skillId].name + " !");
                this._waitForMessage = true;
            }
        }

        if (this._waitForMessage && !$gameMessage.isBusy()) {
            overopen();
            this._waitForMessage = false;
        }
    };


    Window_ButtonToggleOverlay.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        if (TouchInput.isTriggered() &&
            TouchInput.x >= this.x && TouchInput.x <= this.x + this.width &&
            TouchInput.y >= this.y && TouchInput.y <= this.y + this.height) {
                if ((Overlay_left && Overlay_left.isClosed()) && (Overlay_right && Overlay_right.isClosed())){
                    overopen();
                }else{
                    overclose();
                }
        }
    };

    // Ajout des fenêtres à la scène de la carte
    var _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        _Scene_Map_start.call(this);
        var overlayHidden = $dataMap.meta && $dataMap.meta.Overlay === 'hidden';

        if (!overlayHidden) {
            Overlay_left = new Window_OverlayLeft(0, 0, 300, 720);
            Overlay_right = new Window_OverlayRight(980, 0, 300, 655);
            buttonSkill = new Window_ButtonSkill(980, 655, 100, 65);
            buttonToggle = new Window_ButtonToggleOverlay(1080, 655, 100, 65);
            
            this.addWindow(Overlay_left);
            this.addWindow(Overlay_right);
            this.addWindow(buttonSkill);
            this.addWindow(buttonToggle);
        }

        buttonMenu = new Window_ButtonMenu(1180, 655, 100, 65);
        this.addWindow(buttonMenu);
    };

    window.overclose = function() {
        if (Overlay_left && Overlay_right) {
            Overlay_left.close();
            Overlay_right.close();
        }
    };
    window.overopen = function() {
        if (Overlay_left && Overlay_right) {
            Overlay_left.open();
            Overlay_right.open();
        }
    };
    window.overhidden = function() {
        if (Overlay_left && Overlay_right) {
            Overlay_left.visible = false;
            Overlay_right.visible = false;
        }
    };
    window.overvisible = function() {
        if (Overlay_left && Overlay_right) {
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