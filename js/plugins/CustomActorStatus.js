// Plugin : CustomActorStatus.js
/*:
 * @plugindesc Remplace la page de statut par une page affichant les statistiques.
 * @author Choyoru
 *
 * @help Ce plugin modifie la page de statut pour afficher uniquement les statistiques.
 */

(function() {

    Window_Status.prototype.refresh = function() {
        this.contents.clear();
        if (this._actor) {
            var lineHeight = this.lineHeight();
            this.drawBlock1(lineHeight * 0);
            this.drawHorzLine(lineHeight * 1);
            this.drawBlock2(lineHeight * 2);
            this.drawHorzLine(lineHeight * 6);
            this.drawBlock3(lineHeight * 7);
            this.drawVertLine(380);
            this.drawVertLine(744);
            this.drawHorzLine(lineHeight * 13);
            this.drawBlock4(lineHeight * 14);
        }
    };

    Window_Status.prototype.drawBlock1 = function(y) {
        this.drawActorName(this._actor, 6, y);
        this.drawActorClass(this._actor, 192, y);
    };

    Window_Status.prototype.drawBlock2 = function(y) {
        this.drawActorFace(this._actor, 12, y);
        this.drawBasicInfo(204, y);
        this.drawExpInfo(456, y);
    };
    
    Window_Status.prototype.drawBlock3 = function(y) {
        this.drawParameters(48, y);
        this.drawsthorny(432, y);
        this.drawEquipments(796, y);
    };
    
    Window_Status.prototype.drawBlock4 = function(y) {
        this.drawProfile(6, y);
    };

    Window_Status.prototype.drawParameters = function(x, y) {
        var lineHeight = this.lineHeight();
        for (var i = 0; i < 6; i++) {
            var paramId = i + 2;
            var y2 = y + lineHeight * i;
            this.changeTextColor(this.systemColor());
            this.drawText(TextManager.param(paramId), x, y2, 160);
            this.resetTextColor();
            if(i < 4){
                this.drawText(this._actor.param(paramId) + "%", x + 175, y2, 60, 'right');
            }
            else{
                this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
            }
        }
    };

    Window_Status.prototype.drawsthorny = function(x, y) {
        calculmood();
        txtmood();
        var lineHeight = this.lineHeight();
        this.changeTextColor(this.systemColor());

        this.drawsthornygauge($gameVariables.value(13), "Mood", x, y + lineHeight * 0, 290);
        this.drawsthornygauge($gameVariables.value(24), "Purity", x, y + lineHeight * 1, 290);
        this.drawsthornygauge($gameVariables.value(25), "Submission", x, y + lineHeight * 2, 290);
        this.drawsthornygauge($gameVariables.value(26), "Exibitionism", x, y + lineHeight * 3, 290);
        this.drawsthornygauge($gameVariables.value(27), "Masochism", x, y + lineHeight * 4, 290);
        this.drawsthornygauge($gameVariables.value(28), "Libido", x, y + lineHeight * 5, 290);
    }

    Window_Base.prototype.drawsthornygauge = function(gamevar, txt, x, y, width) {
        width = width || 186;
        var color1 = this.textColor(6);
        var color2 = this.textColor(14);

        var rate = gamevar/100;
        this.drawGauge(x, y, width, rate, color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(txt, x, y, 120);
        this.drawCurrentAndMax(gamevar, 100, x, y, width, color1, this.normalColor());
    };

    Window_Status.prototype.drawVertLine = function(x) {
        var lineX = x + this.lineHeight() / 2 - 1;
        this.contents.paintOpacity = 48;
        this.contents.fillRect(lineX, 250, 2, 220, this.lineColor());
        this.contents.paintOpacity = 255;
    };

})();