#pragma strict
var i = 0;
var state = 0;


function OnGUI() {
	GUI.skin.button.alignment = TextAnchor.MiddleCenter;
	GUI.skin.button.fontSize = 18;
	GUI.skin.button.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.button.wordWrap = true;
	
	GUI.skin.label.alignment = TextAnchor.UpperCenter;
	GUI.skin.label.fontSize = 30;
	GUI.skin.label.fontStyle = FontStyle.Bold;
	GUI.skin.label.wordWrap = true;
	GUI.skin.label.normal.textColor = Color.white;

	
GUI.Label(Rect (Screen.width/2 - 200, Screen.height/2 - 100, 400, 400),
"Prisoner. Reach the end of the maze, and you are free. No questions asked, no strings attached. Are you prepared?");
	
	
	GUI.skin.label.alignment = TextAnchor.UpperCenter;
	GUI.skin.label.fontSize = 16;
	GUI.skin.label.fontStyle = FontStyle.Normal;
	GUI.skin.label.wordWrap = true;
	
//GUI.Label(Rect (Screen.width - 400, Screen.height - 150 , 400, 150),
//"Created by:\n Cat Morgan \n Katie Thornhill\n\nFeaturing music by Clark Powell and Howard Shore ");

var button = GUI.Button(Rect (Screen.width/2 - 50, Screen.height/2 + 100, 100, 50), "Begin");

if (button && i == 0) {
	state = 1;
	i++;
	}
	
 switch (state) {
	 	case 1:
	 	 i1();
	 	 break;
	 	default: 
	 			break;
	 }

}


function i1() {
//yield WaitForSeconds(2);
Application.LoadLevel("Maze");
}