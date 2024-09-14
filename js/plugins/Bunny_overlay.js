(function() {
    // Créer une nouvelle classe de fenêtre personnalisée

    var Overlay_left;
    var Overlay_right;
    var x = 35;
	var y = 0;

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
        this.drawText(text, 0, 0, this.contentsWidth(), 'center');
        showbust(x,y).forEach((element) => this.addChild(element));
    };
    Window_OverlayRight.prototype.refresh = function() {
        // Efface l'ancien contenu de la fenêtre
        this.contents.clear();
        console.log($gameMap);
        this.drawText($gameMap.displayName(), 0, 0, this.contentsWidth(), 'center');
    };

    // Ajout de la fenêtre à la scène de la carte
    var _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        _Scene_Map_start.call(this);

        // Créer une instance de la fenêtre (dimensions 300x600)
        Overlay_left = new Window_OverlayLeft(0, 0, 300, 720);
        Overlay_right = new Window_OverlayRight(980, 0, 300, 720);

        // Ajouter la fenêtre à la scène actuelle
        this.addWindow(Overlay_left);
        this.addWindow(Overlay_right);
    };

    window.overopenclose = function() {
        if(Overlay_left){
            if (Overlay_left.visible == true) {
                Overlay_left.visible = false;
                Overlay_right.visible = false;
            }
            else{
                Overlay_left.visible = true;
                Overlay_right.visible = true;
            }
        }
    };
    window.overclose = function() {
        if(Overlay_left){
            Overlay_left.visible = false;
            Overlay_right.visible = false;
        }
    };
    window.overopen = function() {
        if(Overlay_left){
            Overlay_left.visible = true;
            Overlay_right.visible = true;
        }
    };
})();