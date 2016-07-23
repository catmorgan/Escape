#pragma strict
var g= false;
var t = 0.0;

function Awake() {
	Destroy(GameObject.FindWithTag("Player"));
	g = true;
}

function Update() {
	if (g) {
	RenderSettings.ambientLight = Color.Lerp(Color.black, Color.white, t);
	
	
		if (t < 0.121) {
	t += Time.deltaTime / 70;
		}
		
		else if (t > 0.121) {
			t += Time.deltaTime / 10;
		}
	}
}

function OnGUI() {

 GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.wordWrap = true; 
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.label.normal.textColor = Color.black;
	
	 GUI.skin.button.alignment = TextAnchor.MiddleCenter;
	GUI.skin.button.wordWrap = true; 
	GUI.skin.button.fontSize = 18;
	GUI.skin.button.fontStyle = FontStyle.BoldAndItalic;

//   GUI.Label(Rect(50, 50, 200, 200), "And as the hour approached for the execution, in my own mind, I became both the executioner and the victim.\n" +
//   "I pace, pace, pace up and down, transformed in almost a kind of exorcism.\nAm I responsible for taking someone's life?" +
//   " No, no, it was all a game! Yes, a game...just a game");

 GUI.Label(Rect(100, 50, 300, 200), "And as the hour approached for the execution, in my own mind, I became both the executioner and the victim.");
   
   GUI.Label(Rect(Screen.width / 2 + 200, 150, 300, 200), "I pace, pace, pace up and down, transformed in almost a kind of exorcism.");
   
   
    GUI.Label(Rect(300, Screen.height / 2 - 50, 300, 200), "Am I responsible for taking someone's life?");
    
     GUI.Label(Rect(Screen.width - 375, Screen.height - 200, 300, 200), " No, no, it was all a game!\n           Yes, a game...just a game");
    
    
   
    if (GUI.Button(Rect(Screen.width - 200, Screen.height - 100, 100, 50), "Restart")) {
 	Application.LoadLevel("Begin");
 }
}