#pragma strict
var i = 0;
var state = 0;
var wasd : Texture2D;
var click : Texture2D;
var esc: Texture2D;
var escap: Texture2D;

function OnGUI() {
	GUI.skin.button.alignment = TextAnchor.MiddleCenter;
	GUI.skin.button.fontSize = 30;
	GUI.skin.button.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.button.wordWrap = true;
	
	GUI.skin.label.alignment = TextAnchor.UpperCenter;
	GUI.skin.label.fontSize = 24;
	GUI.skin.label.fontStyle = FontStyle.Bold;
	GUI.skin.label.wordWrap = true;
	GUI.skin.label.normal.textColor = Color.white;
	
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Label(Rect(50, Screen.height - 250, 200, 55), "Controls");
//	GUI.Label(Rect(500, Screen.height - 265, 200, 55), "Menu");
	GUI.Label(Rect(100, Screen.height - 205, 100, 100), wasd);
	GUI.Label(Rect(250, Screen.height - 205, 100, 100), click);
	GUI.Label(Rect(400, Screen.height - 205, 100, 100), esc);

	
GUI.Label(Rect (20, 20, 800, 1000), escap);
	
	GUI.skin.label.alignment = TextAnchor.UpperCenter;
	GUI.skin.label.fontSize = 16;
	GUI.skin.label.fontStyle = FontStyle.Normal;
	GUI.skin.label.wordWrap = true;
	
GUI.Label(Rect (Screen.width - 400, Screen.height - 150 , 400, 150),
"Created by:\n Cat Morgan \n Katie Thornhill\n\nFeaturing music by Clark Powell and Howard Shore ");

var button = GUI.Button(Rect (Screen.width - 250, Screen.height - 225, 100, 50), "->");

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
Application.LoadLevel("Start");
}