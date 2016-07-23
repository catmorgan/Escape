#pragma strict

function Awake() {
	Destroy(GameObject.FindWithTag("Player"));
}

function OnGUI() {

 GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.wordWrap = true; 
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	 
	GUI.skin.button.fontSize = 18;
	GUI.skin.button.fontStyle = FontStyle.Normal;
	GUI.skin.button.alignment = TextAnchor.MiddleCenter;

   GUI.Label(Rect(Screen.width/2 + 50, Screen.height/2 + 100, 400, 200), "Cursed is the man who dies, \n     but the evil done by him survives.");
   
 if (GUI.Button(Rect(Screen.width - 200, Screen.height - 100, 100, 50), "Restart")) {
 Application.LoadLevel("Begin");
 }
}
