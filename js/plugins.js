// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"50","screenWidth":"1280","screenHeight":"720","changeWindowWidthTo":"1280","changeWindowHeightTo":"720","renderingMode":"auto","alwaysDash":"off"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"3","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"0","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() / 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"true"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.50 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"400","Front Position Y":"350 + index * 48","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"200","Home Position Y":"830","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"0","Flinch Distance":"0","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.30 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"Bust_bunny","status":true,"description":"Displays detailed statuses of items.","parameters":{"Unknown Data":"??????"}},
{"name":"SRD_AltMenuScreen_BustSelect","status":true,"description":"Alternative Menu Screen Bust Select. Uses busts to select Actors in the menu. It also displays Side View Battlers.","parameters":{"Show Gold Window":"true","Show SV Window":"false","== Bust Position ==":"","Bust X Pos":"60","Bust Y Pos":" 0","== Bust Window ==":"","Bust Window Rows":"1","Bust Window Cols":"1","Bust Window X":"20","Bust Window Y":"(Graphics.height / 2) - (this._statusWindow.height / 2)","Bust Window Width":"(Graphics.width / 2) - 40","Bust Window Height":"Graphics.height - 120","== Command Window ==":"","Command Window X":"Graphics.width - this._commandWindow.width - 20","Command Window Y":"(this._statusWindow.y + this._statusWindow.height) - this._commandWindow.height","Max Columns":"1","Visible Rows":"6","== HP Window ==":"","Draw MP Bar":"true","Draw TP Bar":"true","HP Window X":"this._commandWindow.x","HP Window Y":"((this._commandWindow.y - (this._goldWindow.y + this._goldWindow.height)) / 2) - (this._hpWindow.height / 2) + (this._goldWindow.y + this._goldWindow.height)","HP Window Width":"600","== Battler Window ==":"","Battler X Pos":"6","Battler Y Pos":"6","B. Window X":"Graphics.width - 128","B. Window Y":"this._hpWindow.y","B. Window Width":"this.fittingHeight(2)","B. Window Height":"this.fittingHeight(2)","== Gold Window ==":"","Gold Window X":"this._commandWindow.x","Gold Window Y":"this._statusWindow.y"}},
{"name":"SRD_MenuBackgrounds","status":true,"description":"Allows you to add/customize backgrounds and change window opacity for all menu scenes.","parameters":{"Scale Background":"true","== Main Menu ==":"","Menu Background":"Background","Menu Opacity":"255","Menu Scale":"1","Menu Motion":"","== Item Menu ==":"","Item Background":"Background","Item Opacity":"255","Item Scale":"1","Item Motion":"","== Skill Menu ==":"","Skill Background":"Background","Skill Opacity":"255","Skill Scale":"1","Skill Motion":"","== Equip Menu ==":"","Equip Background":"Background","Equip Opacity":"255","Equip Scale":"1","Equip Motion":"","== Status Menu ==":"","Status Background":"Background","Status Opacity":"255","Status Scale":"1","Status Motion":"","== Save Menu ==":"","Save Background":"Background","Save Opacity":"255","Save Scale":"1","Save Motion":"","== Options Menu ==":"","Options Background":"Background","Options Opacity":"255","Options Scale":"1","Options Motion":"","== End Menu ==":"","End Background":"Background","End Opacity":"255","End Scale":"1","End Motion":"","== Custom 1 ==":"","Custom 1 Scene":"","Custom 1 Background":"","Custom 1 Opacity":"255","Custom 1 Scale":"1","Custom 1 Motion":"","== Custom 2 ==":"","Custom 2 Scene":"","Custom 2 Background":"","Custom 2 Opacity":"255","Custom 2 Scale":"1","Custom 2 Motion":"","== Custom 3 ==":"","Custom 3 Scene":"","Custom 3 Background":"","Custom 3 Opacity":"255","Custom 3 Scale":"1","Custom 3 Motion":"","== Custom 4 ==":"","Custom 4 Scene":"","Custom 4 Background":"","Custom 4 Opacity":"255","Custom 4 Scale":"1","Custom 4 Motion":"","== Custom 5 ==":"","Custom 5 Scene":"","Custom 5 Background":"","Custom 5 Opacity":"255","Custom 5 Scale":"1","Custom 5 Motion":"","== Custom 6 ==":"","Custom 6 Scene":"","Custom 6 Background":"","Custom 6 Opacity":"255","Custom 6 Scale":"1","Custom 6 Motion":"","== Custom 7 ==":"","Custom 7 Scene":"","Custom 7 Background":"","Custom 7 Opacity":"255","Custom 7 Scale":"1","Custom 7 Motion":"","== Custom 8 ==":"","Custom 8 Scene":"","Custom 8 Background":"","Custom 8 Opacity":"255","Custom 8 Scale":"1","Custom 8 Motion":"","== Custom 9 ==":"","Custom 9 Scene":"","Custom 9 Background":"","Custom 9 Opacity":"255","Custom 9 Scale":"1","Custom 9 Motion":"","== Custom 10 ==":"","Custom 10 Scene":"","Custom 10 Background":"","Custom 10 Opacity":"255","Custom 10 Scale":"1","Custom 10 Motion":"","== Custom 11 ==":"","Custom 11 Scene":"","Custom 11 Background":"","Custom 11 Opacity":"255","Custom 11 Scale":"1","Custom 11 Motion":"","== Custom 12 ==":"","Custom 12 Scene":"","Custom 12 Background":"","Custom 12 Opacity":"255","Custom 12 Scale":"1","Custom 12 Motion":"","== Custom 13 ==":"","Custom 13 Scene":"","Custom 13 Background":"","Custom 13 Opacity":"255","Custom 13 Scale":"1","Custom 13 Motion":"","== Custom 14 ==":"","Custom 14 Scene":"","Custom 14 Background":"","Custom 14 Opacity":"255","Custom 14 Scale":"1","Custom 14 Motion":"","== Custom 15 ==":"","Custom 15 Scene":"","Custom 15 Background":"","Custom 15 Opacity":"255","Custom 15 Scale":"1","Custom 15 Motion":"","== Custom 16 ==":"","Custom 16 Scene":"","Custom 16 Background":"","Custom 16 Opacity":"255","Custom 16 Scale":"1","Custom 16 Motion":"","== Custom 17 ==":"","Custom 17 Scene":"","Custom 17 Background":"","Custom 17 Opacity":"255","Custom 17 Scale":"1","Custom 17 Motion":"","== Custom 18 ==":"","Custom 18 Scene":"","Custom 18 Background":"","Custom 18 Opacity":"255","Custom 18 Scale":"1","Custom 18 Motion":"","== Custom 19 ==":"","Custom 19 Scene":"","Custom 19 Background":"","Custom 19 Opacity":"255","Custom 19 Scale":"1","Custom 19 Motion":"","== Custom 20 ==":"","Custom 20 Scene":"","Custom 20 Background":"","Custom 20 Opacity":"255","Custom 20 Scale":"1","Custom 20 Motion":""}},
{"name":"YEP_ItemSynthesis","status":true,"description":"v1.11 Players can now craft their own items in-game\nthrough an item synthesis system.","parameters":{"---General---":"","Synthesis Command":"Synthesis","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Command Window---":"","Item Command":"Craft Item","Weapon Command":"Craft Weapon","Armor Command":"Craft Armor","Finish Command":"Finish","Text Alignment":"center","---Status Window---":"","Collected Recipes":"Collected Recipes","Crafted Items":"Crafted Items","Crafted Weapons":"Crafted Weapons","Crafted Armors":"Crafted Armors","---List Window---":"","Equipped Recipes":"true","Mask Unknown":"true","Mask Text":"?","Mask Italic":"true","Mask Help Text":"This item has not been synthesized yet.","Ingredients Text":"Ingredients","Amount Text":"Quantity","Amount Format":"false","Quantity Text Size":"20","---Sound---":"","Default SE":"Twine","Default Volume":"100","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ItemDisassemble","status":true,"description":"v1.06 (Requires YEP_ItemCore.js) Grants the option to\nbreak down items in the item menu into other items.","parameters":{"---General---":"","Disassemble Command":"Disassemble %1","Disassemble List":"Disassemble Items","Item Quantity 1":"×%1 %2","Item Quantity 2":"×%1-×%2 %3","Rate Font Size":"20","---Disassemble Sound---":"","Disassemble Sound":"Break","Disassemble Volume":"100","Disassemble Pitch":"150","Disassemble Pan":"0","---Result Sound---":"","Result Sound":"Item1","Result Volume":"100","Result Pitch":"100","Result Pan":"0","---Empty Sound---":"","Empty Sound":"Buzzer2","Empty Volume":"100","Empty Pitch":"100","Empty Pan":"0"}},
{"name":"YEP_X_ItemDurability","status":true,"description":"v1.04 (Requires YEP_ItemCore.js) Independent equipment\nnow have durability, which when runs out, will break.","parameters":{"---Defaults---":"","Default Durability":"100","Durability Variance":"5","Durability Maximum":"200","---Durability Drop---":"","Physical Action":"-1","Magical Action":"0","Certain Action":"0","Damage All Armor":"false","Physical Damage":"-2","Magical Damage":"-1","Certain Damage":"-1","---Breaking---":"","Broken Text":"%1's %3%2 broke!","Broken Wait":"60","Break Sound":"Crash","Break Volume":"100","Break Pitch":"150","Break Pan":"0","---Repair---":"","Show Repair":"true","Enable Repair":"true","Repair Command":"Repair %1","Repair Sound":"Skill2","Repair Volume":"100","Repair Pitch":"150","Repair Pan":"0","---Window Info---":"","Show Durability":"true","Durability Text":"Durability","Durability Format":"%1","Show Unbreakable":"true","Unbreakable Text":"Unbreakable","---Durability Color---":"","Unbreakable":"23","Max Durability":"29","190% Durability":"29","175% Durability":"24","150% Durability":"24","120% Durability":"4","110% Durability":"0","100% Durability":"0","80% Durability":"0","50% Durability":"6","25% Durability":"17","10% Durability":"2","1% Durability":"18"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\r\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"24","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Load","Save Command":"Save","Delete Command":"Delete","---Help Window---":"","Select Help":"Please select a file slot.","Load Help":"Loads the data from the saved game.","Save Help":"Saves the current progress in your game.","Delete Help":"Deletes all data from this save file.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime, save count, gold count","Data Column 2":"location, variable 10","Data Column 3":"","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Playtime:","Save Count":"Total Saves:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Do you wish to load this save file?","Save Confirmation":"true","Save Text":"Do you wish to overwrite this save file?","Delete Confirmation":"true","Delete Text":"Do you wish to delete this save file?","Confirm Yes":"Yes","Confirm No":"No"}},
{"name":"YEP_X_Autosave","status":true,"description":"v1.00 (Req YEP_SaveCore.js) Adds Autosave functionality to your\r\nRPG Maker game.","parameters":{"---Automatic---":"","OnMapLoad":"true","OnMainMenu":"false","---Option Menu---":"","Show Option":"true","Option Name":"Autosave","Default":"true","---Visual---":"","ShowAutosave":"true","AutosaveMsgSave":"\\i[83]Autosave Complete!","AutosaveMsgLoad":"\\i[83]Autosave Loaded!","MsgGradient1":"rgba(0, 0, 0, 0)","MsgGradient2":"rgba(0, 0, 0, 0.6)","MsgGradientCode":"\"var textWidth = this.textWidthEx(this.message());\\nvar half = this.textPadding() + Math.ceil(textWidth / 2);\\nvar height = this.lineHeight();\\nvar color1 = Yanfly.Param.AutosaveMsgColor1;\\nvar color2 = Yanfly.Param.AutosaveMsgColor2;\\nthis.contents.gradientFillRect(0, 0, half, height, color1, color2);\\nthis.contents.gradientFillRect(half, 0, this.width - half, height, color2, color1);\"","MsgX":"Graphics.boxWidth - 300","MsgY":"Graphics.boxHeight - this.fittingHeight(1) * 2","MsgDuration":"120","FadeSpeed":"16"}},
{"name":"YEP_CreditsPage","status":true,"description":"v1.02 Adds a 'Credits' command to the title screen that\nwill take the player to a credits scene.","parameters":{"---General---":"","Command Name":"Credits","---Credit Lines---":"","Line 1 Text":"Pluggings : ","Line 1 URL":"","Line 2 Text":"Magnus0808, SumRndmDde and Yanfly ","Line 2 URL":"","Line 3 Text":"-----------------------------------","Line 3 URL":"","Line 4 Text":"Art : ","Line 4 URL":"","Line 5 Text":"Tian","Line 5 URL":"","Line 6 Text":"","Line 6 URL":"","Line 7 Text":"","Line 7 URL":"","Line 8 Text":"","Line 8 URL":"","Line 9 Text":"","Line 9 URL":"","Line 10 Text":"","Line 10 URL":"","Line 11 Text":"","Line 11 URL":"","Line 12 Text":"","Line 12 URL":"","Line 13 Text":"","Line 13 URL":"","Line 14 Text":"","Line 14 URL":"","Line 15 Text":"","Line 15 URL":"","Line 16 Text":"","Line 16 URL":"","Line 17 Text":"","Line 17 URL":"","Line 18 Text":"","Line 18 URL":"","Line 19 Text":"","Line 19 URL":"","Line 20 Text":"","Line 20 URL":"","Line 21 Text":"","Line 21 URL":"","Line 22 Text":"","Line 22 URL":"","Line 23 Text":"","Line 23 URL":"","Line 24 Text":"","Line 24 URL":"","Line 25 Text":"","Line 25 URL":"","Line 26 Text":"","Line 26 URL":"","Line 27 Text":"","Line 27 URL":"","Line 28 Text":"","Line 28 URL":"","Line 29 Text":"","Line 29 URL":"","Line 30 Text":"","Line 30 URL":"","Line 31 Text":"","Line 31 URL":"","Line 32 Text":"","Line 32 URL":"","Line 33 Text":"","Line 33 URL":"","Line 34 Text":"","Line 34 URL":"","Line 35 Text":"","Line 35 URL":"","Line 36 Text":"","Line 36 URL":"","Line 37 Text":"","Line 37 URL":"","Line 38 Text":"","Line 38 URL":"","Line 39 Text":"","Line 39 URL":"","Line 40 Text":"","Line 40 URL":"","Line 41 Text":"","Line 41 URL":"","Line 42 Text":"","Line 42 URL":"","Line 43 Text":"","Line 43 URL":"","Line 44 Text":"","Line 44 URL":"","Line 45 Text":"","Line 45 URL":"","Line 46 Text":"","Line 46 URL":"","Line 47 Text":"","Line 47 URL":"","Line 48 Text":"","Line 48 URL":"","Line 49 Text":"","Line 49 URL":"","Line 50 Text":"","Line 50 URL":"","Line 51 Text":"","Line 51 URL":"","Line 52 Text":"","Line 52 URL":"","Line 53 Text":"","Line 53 URL":"","Line 54 Text":"","Line 54 URL":"","Line 55 Text":"","Line 55 URL":"","Line 56 Text":"","Line 56 URL":"","Line 57 Text":"","Line 57 URL":"","Line 58 Text":"","Line 58 URL":"","Line 59 Text":"","Line 59 URL":"","Line 60 Text":"","Line 60 URL":"","Line 61 Text":"","Line 61 URL":"","Line 62 Text":"","Line 62 URL":"","Line 63 Text":"","Line 63 URL":"","Line 64 Text":"","Line 64 URL":"","Line 65 Text":"","Line 65 URL":"","Line 66 Text":"","Line 66 URL":"","Line 67 Text":"","Line 67 URL":"","Line 68 Text":"","Line 68 URL":"","Line 69 Text":"","Line 69 URL":"","Line 70 Text":"","Line 70 URL":"","Line 71 Text":"","Line 71 URL":"","Line 72 Text":"","Line 72 URL":"","Line 73 Text":"","Line 73 URL":"","Line 74 Text":"","Line 74 URL":"","Line 75 Text":"","Line 75 URL":"","Line 76 Text":"","Line 76 URL":"","Line 77 Text":"","Line 77 URL":"","Line 78 Text":"","Line 78 URL":"","Line 79 Text":"","Line 79 URL":"","Line 80 Text":"","Line 80 URL":"","Line 81 Text":"","Line 81 URL":"","Line 82 Text":"","Line 82 URL":"","Line 83 Text":"","Line 83 URL":"","Line 84 Text":"","Line 84 URL":"","Line 85 Text":"","Line 85 URL":"","Line 86 Text":"","Line 86 URL":"","Line 87 Text":"","Line 87 URL":"","Line 88 Text":"","Line 88 URL":"","Line 89 Text":"","Line 89 URL":"","Line 90 Text":"","Line 90 URL":"","Line 91 Text":"","Line 91 URL":"","Line 92 Text":"","Line 92 URL":"","Line 93 Text":"","Line 93 URL":"","Line 94 Text":"","Line 94 URL":"","Line 95 Text":"","Line 95 URL":"","Line 96 Text":"","Line 96 URL":"","Line 97 Text":"","Line 97 URL":"","Line 98 Text":"","Line 98 URL":"","Line 99 Text":"","Line 99 URL":"","Line 100 Text":"","Line 100 URL":"","Line 101 Text":"","Line 101 URL":"","Line 102 Text":"","Line 102 URL":"","Line 103 Text":"","Line 103 URL":"","Line 104 Text":"","Line 104 URL":"","Line 105 Text":"","Line 105 URL":"","Line 106 Text":"","Line 106 URL":"","Line 107 Text":"","Line 107 URL":"","Line 108 Text":"","Line 108 URL":"","Line 109 Text":"","Line 109 URL":"","Line 110 Text":"","Line 110 URL":"","Line 111 Text":"","Line 111 URL":"","Line 112 Text":"","Line 112 URL":"","Line 113 Text":"","Line 113 URL":"","Line 114 Text":"","Line 114 URL":"","Line 115 Text":"","Line 115 URL":"","Line 116 Text":"","Line 116 URL":"","Line 117 Text":"","Line 117 URL":"","Line 118 Text":"","Line 118 URL":"","Line 119 Text":"","Line 119 URL":"","Line 120 Text":"","Line 120 URL":"","Line 121 Text":"","Line 121 URL":"","Line 122 Text":"","Line 122 URL":"","Line 123 Text":"","Line 123 URL":"","Line 124 Text":"","Line 124 URL":"","Line 125 Text":"","Line 125 URL":"","Line 126 Text":"","Line 126 URL":"","Line 127 Text":"","Line 127 URL":"","Line 128 Text":"","Line 128 URL":"","Line 129 Text":"","Line 129 URL":"","Line 130 Text":"","Line 130 URL":"","Line 131 Text":"","Line 131 URL":"","Line 132 Text":"","Line 132 URL":"","Line 133 Text":"","Line 133 URL":"","Line 134 Text":"","Line 134 URL":"","Line 135 Text":"","Line 135 URL":"","Line 136 Text":"","Line 136 URL":"","Line 137 Text":"","Line 137 URL":"","Line 138 Text":"","Line 138 URL":"","Line 139 Text":"","Line 139 URL":"","Line 140 Text":"","Line 140 URL":"","Line 141 Text":"","Line 141 URL":"","Line 142 Text":"","Line 142 URL":"","Line 143 Text":"","Line 143 URL":"","Line 144 Text":"","Line 144 URL":"","Line 145 Text":"","Line 145 URL":"","Line 146 Text":"","Line 146 URL":"","Line 147 Text":"","Line 147 URL":"","Line 148 Text":"","Line 148 URL":"","Line 149 Text":"","Line 149 URL":"","Line 150 Text":"","Line 150 URL":"","Line 151 Text":"","Line 151 URL":"","Line 152 Text":"","Line 152 URL":"","Line 153 Text":"","Line 153 URL":"","Line 154 Text":"","Line 154 URL":"","Line 155 Text":"","Line 155 URL":"","Line 156 Text":"","Line 156 URL":"","Line 157 Text":"","Line 157 URL":"","Line 158 Text":"","Line 158 URL":"","Line 159 Text":"","Line 159 URL":"","Line 160 Text":"","Line 160 URL":"","Line 161 Text":"","Line 161 URL":"","Line 162 Text":"","Line 162 URL":"","Line 163 Text":"","Line 163 URL":"","Line 164 Text":"","Line 164 URL":"","Line 165 Text":"","Line 165 URL":"","Line 166 Text":"","Line 166 URL":"","Line 167 Text":"","Line 167 URL":"","Line 168 Text":"","Line 168 URL":"","Line 169 Text":"","Line 169 URL":"","Line 170 Text":"","Line 170 URL":"","Line 171 Text":"","Line 171 URL":"","Line 172 Text":"","Line 172 URL":"","Line 173 Text":"","Line 173 URL":"","Line 174 Text":"","Line 174 URL":"","Line 175 Text":"","Line 175 URL":"","Line 176 Text":"","Line 176 URL":"","Line 177 Text":"","Line 177 URL":"","Line 178 Text":"","Line 178 URL":"","Line 179 Text":"","Line 179 URL":"","Line 180 Text":"","Line 180 URL":"","Line 181 Text":"","Line 181 URL":"","Line 182 Text":"","Line 182 URL":"","Line 183 Text":"","Line 183 URL":"","Line 184 Text":"","Line 184 URL":"","Line 185 Text":"","Line 185 URL":"","Line 186 Text":"","Line 186 URL":"","Line 187 Text":"","Line 187 URL":"","Line 188 Text":"","Line 188 URL":"","Line 189 Text":"","Line 189 URL":"","Line 190 Text":"","Line 190 URL":"","Line 191 Text":"","Line 191 URL":"","Line 192 Text":"","Line 192 URL":"","Line 193 Text":"","Line 193 URL":"","Line 194 Text":"","Line 194 URL":"","Line 195 Text":"","Line 195 URL":"","Line 196 Text":"","Line 196 URL":"","Line 197 Text":"","Line 197 URL":"","Line 198 Text":"","Line 198 URL":"","Line 199 Text":"","Line 199 URL":"","Line 200 Text":"","Line 200 URL":"","Line 201 Text":"","Line 201 URL":"","Line 202 Text":"","Line 202 URL":"","Line 203 Text":"","Line 203 URL":"","Line 204 Text":"","Line 204 URL":"","Line 205 Text":"","Line 205 URL":"","Line 206 Text":"","Line 206 URL":"","Line 207 Text":"","Line 207 URL":"","Line 208 Text":"","Line 208 URL":"","Line 209 Text":"","Line 209 URL":"","Line 210 Text":"","Line 210 URL":"","Line 211 Text":"","Line 211 URL":"","Line 212 Text":"","Line 212 URL":"","Line 213 Text":"","Line 213 URL":"","Line 214 Text":"","Line 214 URL":"","Line 215 Text":"","Line 215 URL":"","Line 216 Text":"","Line 216 URL":"","Line 217 Text":"","Line 217 URL":"","Line 218 Text":"","Line 218 URL":"","Line 219 Text":"","Line 219 URL":"","Line 220 Text":"","Line 220 URL":"","Line 221 Text":"","Line 221 URL":"","Line 222 Text":"","Line 222 URL":"","Line 223 Text":"","Line 223 URL":"","Line 224 Text":"","Line 224 URL":"","Line 225 Text":"","Line 225 URL":"","Line 226 Text":"","Line 226 URL":"","Line 227 Text":"","Line 227 URL":"","Line 228 Text":"","Line 228 URL":"","Line 229 Text":"","Line 229 URL":"","Line 230 Text":"","Line 230 URL":"","Line 231 Text":"","Line 231 URL":"","Line 232 Text":"","Line 232 URL":"","Line 233 Text":"","Line 233 URL":"","Line 234 Text":"","Line 234 URL":"","Line 235 Text":"","Line 235 URL":"","Line 236 Text":"","Line 236 URL":"","Line 237 Text":"","Line 237 URL":"","Line 238 Text":"","Line 238 URL":"","Line 239 Text":"","Line 239 URL":"","Line 240 Text":"","Line 240 URL":"","Line 241 Text":"","Line 241 URL":"","Line 242 Text":"","Line 242 URL":"","Line 243 Text":"","Line 243 URL":"","Line 244 Text":"","Line 244 URL":"","Line 245 Text":"","Line 245 URL":"","Line 246 Text":"","Line 246 URL":"","Line 247 Text":"","Line 247 URL":"","Line 248 Text":"","Line 248 URL":"","Line 249 Text":"","Line 249 URL":"","Line 250 Text":"","Line 250 URL":"","Line 251 Text":"","Line 251 URL":"","Line 252 Text":"","Line 252 URL":"","Line 253 Text":"","Line 253 URL":"","Line 254 Text":"","Line 254 URL":"","Line 255 Text":"","Line 255 URL":"","Line 256 Text":"","Line 256 URL":"","Line 257 Text":"","Line 257 URL":"","Line 258 Text":"","Line 258 URL":"","Line 259 Text":"","Line 259 URL":"","Line 260 Text":"","Line 260 URL":"","Line 261 Text":"","Line 261 URL":"","Line 262 Text":"","Line 262 URL":"","Line 263 Text":"","Line 263 URL":"","Line 264 Text":"","Line 264 URL":"","Line 265 Text":"","Line 265 URL":"","Line 266 Text":"","Line 266 URL":"","Line 267 Text":"","Line 267 URL":"","Line 268 Text":"","Line 268 URL":"","Line 269 Text":"","Line 269 URL":"","Line 270 Text":"","Line 270 URL":"","Line 271 Text":"","Line 271 URL":"","Line 272 Text":"","Line 272 URL":"","Line 273 Text":"","Line 273 URL":"","Line 274 Text":"","Line 274 URL":"","Line 275 Text":"","Line 275 URL":"","Line 276 Text":"","Line 276 URL":"","Line 277 Text":"","Line 277 URL":"","Line 278 Text":"","Line 278 URL":"","Line 279 Text":"","Line 279 URL":"","Line 280 Text":"","Line 280 URL":"","Line 281 Text":"","Line 281 URL":"","Line 282 Text":"","Line 282 URL":"","Line 283 Text":"","Line 283 URL":"","Line 284 Text":"","Line 284 URL":"","Line 285 Text":"","Line 285 URL":"","Line 286 Text":"","Line 286 URL":"","Line 287 Text":"","Line 287 URL":"","Line 288 Text":"","Line 288 URL":"","Line 289 Text":"","Line 289 URL":"","Line 290 Text":"","Line 290 URL":"","Line 291 Text":"","Line 291 URL":"","Line 292 Text":"","Line 292 URL":"","Line 293 Text":"","Line 293 URL":"","Line 294 Text":"","Line 294 URL":"","Line 295 Text":"","Line 295 URL":"","Line 296 Text":"","Line 296 URL":"","Line 297 Text":"","Line 297 URL":"","Line 298 Text":"","Line 298 URL":"","Line 299 Text":"","Line 299 URL":"","Line 300 Text":"","Line 300 URL":""}},
{"name":"YEP_EventProxActivate","status":true,"description":"v1.01 Allows events to activate by being in range of them\ninstead of needing to be exactly next to or on top of them.","parameters":{}},
{"name":"Bunny_overlay","status":true,"description":"v1.00\r\nBunny Overlay.","parameters":{}},
{"name":"FixedBattlerImage","status":true,"description":"Plugin to replace SV Battler image with a fixed image from the pictures folder and to show/hide it via plugin commands.","parameters":{}},
{"name":"Bunny_encounter","status":true,"description":"mix possible encounters on a map.","parameters":{}},
{"name":"MrTS_EnemyPositions","status":true,"description":"Allows to change enemy positions through adding tags.","parameters":{"Spawn Rule":"True"}},
{"name":"HIME_EndPhaseTriggers","status":true,"description":"Checks whether there are any events to run before ending the\r\nbattle.","parameters":{}},
{"name":"Attack_test","status":true,"description":"","parameters":{}},
{"name":"CustomActorStatus","status":true,"description":"Remplace la page de statut par une page affichant les statistiques.","parameters":{}},
{"name":"curse","status":true,"description":"Ce pluging gère les malédictions et les variables accosiée.","parameters":{}},
{"name":"mood","status":true,"description":"Ce pluging gère l'humeur des personnages.","parameters":{}},
{"name":"YEP_EnemyLevels","status":true,"description":"v1.09 This plugin enables giving your enemies levels and\nparameter changes with those levels.","parameters":{"---General---":"","Show Level":"true","Level Format":"Lv%1 %2","Minimum Level":"1","Maximum Level":"10","Maximum Cap":"10","Preserve Rate":"true","---Level Setup---":"","Default Type":"5","Positive Fluctuation":"2","Negative Fluctuation":"2","---MaxHP Growth---":"","MaxHP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxHP Rate Growth":"0.15","MaxHP Flat Growth":"5.00","---MaxMP Growth---":"","MaxMP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxMP Rate Growth":"0.10","MaxMP Flat Growth":"5.00","---ATK Growth---":"","ATK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","ATK Rate Growth":"0.05","ATK Flat Growth":"2.50","---DEF Growth---":"","DEF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","DEF Rate Growth":"0.05","DEF Flat Growth":"2.50","---MAT Growth---":"","MAT Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MAT Rate Growth":"0.05","MAT Flat Growth":"2.50","---MDF Growth---":"","MDF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MDF Rate Growth":"0.05","MDF Flat Growth":"2.50","---AGI Growth---":"","AGI Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","AGI Rate Growth":"0.05","AGI Flat Growth":"2.5","---LUK Growth---":"","LUK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","LUK Rate Growth":"0.05","LUK Flat Growth":"2.5","---EXP Growth---":"","EXP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","EXP Rate Growth":"0.15","EXP Flat Growth":"2.50","---Gold Growth---":"","Gold Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","Gold Rate Growth":"0.15","Gold Flat Growth":"2.50"}}
];
