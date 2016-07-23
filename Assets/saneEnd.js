#pragma strict

function Awake() {
	Destroy(GameObject.FindWithTag("Player"));
}

function OnGUI() {

 GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.wordWrap = true; 
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	
	 GUI.skin.button.alignment = TextAnchor.MiddleCenter;
	GUI.skin.button.wordWrap = true; 
	GUI.skin.button.fontSize = 18;
	GUI.skin.button.fontStyle = FontStyle.BoldAndItalic;

   GUI.Label(Rect(100, 200, 200, 100), "I'm...");
   
   //Now what
   
    if (GUI.Button(Rect(Screen.width - 200, Screen.height - 200, 100, 50), "Fin")) {
 	Application.LoadLevel("Begin");
 }
}