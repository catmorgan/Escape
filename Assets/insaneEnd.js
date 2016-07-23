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

   GUI.Label(Rect(10, 5, 500, 400), "God cast down the irreparable, \n            but I have risen from the ashes.\n\n                   I'll paint the city with Blood and Fear.");

    if (GUI.Button(Rect(Screen.width - 200, Screen.height - 100, 100, 50), "Fin")) {
 	Application.LoadLevel("Begin");
 }

}