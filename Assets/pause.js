#pragma strict
var menu = false;
var wasd : Texture2D;
var click : Texture2D;
var esc: Texture2D;
var music: AudioSource;
var toggle = false;
var m = "Music Off";
var n = "Music On";
var state = 0;

function Update () {

 music = GameObject.Find("Music").transform.GetComponent(AudioSource);
	
	if (Input.GetKeyDown(KeyCode.Escape)) {
		GetComponent(MouseLook).enabled = false;
		GetComponent(FPSInputController).enabled = false;
		Debug.Log("wtf");
		menu = !menu;
	}
	
	if (Input.GetKeyUp(KeyCode.Escape) && !menu) {
		GetComponent(MouseLook).enabled = true;
		GetComponent(FPSInputController).enabled = true;
		Debug.Log("wtf");
	}

}

function OnGUI() {
GUI.skin.label.normal.textColor = Color.white;

if (menu) {
	GUI.skin.button.fontSize = 36;
	GUI.skin.button.fontStyle = FontStyle.Normal;
	GUI.skin.button.alignment = TextAnchor.MiddleCenter;
	GUI.skin.label.normal.textColor = Color.white;
	
	GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
	GUI.Label(Rect(50, Screen.height - 250, 200, 55), "Controls");
	GUI.Label(Rect(100, Screen.height - 205, 100, 100), wasd);
	GUI.Label(Rect(250, Screen.height - 205, 100, 100), click);
	GUI.Label(Rect(400, Screen.height - 205, 100, 100), esc);
	
	if (toggle) {
		if (GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 - 50, 200, 50), n)) {
	 toggle = !toggle;
	 music.mute = toggle;
		}
	} 
	
	if (!toggle) {
		if (GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 - 50, 200, 50), m)) {
	 	toggle = !toggle;
	 	music.mute = toggle;
			} 
		}
	
	if (GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2, 200, 50), "Quit")) {
	menu = !menu;
	Application.LoadLevel("Begin");
	Destroy(gameObject);
		}

	}
	
		if (Input.GetKeyDown(KeyCode.Escape)) {
		state = 7;
		}
		
		switch(state) {
		 case 7:
	 	 i7();
	 	 	break;
	 	default: 
	 		break;
	 }
}

function i7() {
state = 0;
	menu = !menu;
	music.mute = toggle;
}