#pragma strict
var playerHealth = 0;
var playerAttack = 0;
var playerSanity = 0;
var player: GameObject; 
var Mia: boolean;
var beer: boolean;
var cake: boolean;
var knife: boolean;
var knife1: boolean;
var carl: boolean;
var Joan: boolean;
var justin: boolean;
var jane: boolean;
var modelMushrooms: boolean;
var vincent: boolean;
var show = false;
var loadonce = true;
var time = 0.0;
var load = true;
static var Instance;
var starrynight: Material;
var state = 0;
var show5 = true;
var show4 = true;
var show3 = true;
var show2 = true;
var show1 = true;
var show0 = true;
var loadinsane = true;
var t = 0.0;


function Awake () {

	if (Instance) {
	Destroy(gameObject);
	} else {
	Instance = this; 
	//toggle = false;
	var show4 = true;
	var show5 = true;
	var show3 = true;
	var show2 = true;
	var show1 = true;
	var show0 = true;
	
	player = GameObject.FindWithTag("Player");
	DontDestroyOnLoad (player);
	show = true;
	
	Mia = GameObject.Find("Mia");
	beer = GameObject.Find("beer");
	cake = GameObject.Find("cake");
	knife = GameObject.Find("knife");
    knife1 = GameObject.Find("knife1");
    carl = GameObject.Find("carl");
    Joan = GameObject.Find("Joan");
    justin = GameObject.Find("justin");
    jane = GameObject.Find("Jane");
    modelMushrooms = GameObject.Find("modelMushrooms");
    vincent = GameObject.Find("vincent");
}
}

function Update () {
	playerHealth = player.GetComponent(Stats).health;
	playerAttack = player.GetComponent(Stats).attack;
	playerSanity = player.GetComponent(Stats).sanity;
	
	
	if (playerHealth <= 0 && load) {
		Application.LoadLevel("Dead");
		load = false;
	}
	
	if (playerSanity <= 5) {
	RenderSettings.skybox = starrynight;
	}
	
	if (playerSanity == 4) {
	RenderSettings.ambientLight = Color.Lerp(Color.gray, Color.red, t);
	if (t < 5) {
	t += Time.deltaTime / 6;
		}
	}
	
	if (playerSanity <= 3 && loadonce) {
		time += Time.deltaTime;
	//	Debug.Log("time: " + time);
		if (time >= 0.8) {
	  Application.LoadLevel("InsaneMaze");
	  loadonce = false;
    	 }
     }
     
     if (playerSanity <= 0 && loadinsane) {
		Application.LoadLevel("insanedeath");
		loadinsane = false;
	}

}


function OnGUI() {
	GUI.skin.button.alignment = TextAnchor.UpperLeft;
	GUI.skin.button.fontSize = 14;
	GUI.skin.button.fontStyle = FontStyle.Normal;
	GUI.skin.label.normal.textColor = Color.white;
	
	if (playerSanity == 5 && show5) {
	GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.label.wordWrap = true;
	GUI.skin.label.normal.textColor = Color.white;
	
	GUI.Label(Rect(Screen.width / 2 - 200, 100, 400, 400), "I-I killed...a person...a living being. I can't believe i-...b-but it's to survive!\n\n" +
	" Right?! I need to survive...i-it's not my fault...");
	state = 1;
	}
	
	if (playerSanity == 4 && show4) {
	GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.label.wordWrap = true;

	GUI.Label(Rect(Screen.width / 2 - 200, 100, 400, 400), "They were going to kill me. I'm sure of it!\nEveryone is out to get me!\n" +
	"They're all evil...all of them!\n...right?" );
	state = 2;
	}
	
	if (playerSanity == 3 && show3) {
	GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.label.wordWrap = true;

	GUI.Label(Rect(Screen.width / 2 - 200, 100, 400, 400), 	"W-WHAT IS THIS PLACE?! H-Hell?! Ha...a-am I dead?\nNo, no, they're trying to trick me!\nIt's all because of THEM." );
	state = 3;
	}
	
	if (playerSanity == 2 && show2) {
	GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.label.wordWrap = true;
	

	GUI.Label(Rect(Screen.width / 2 - 200, 100, 400, 400), "D-demons! They were in human skin!! I k-knew I couldn't be killing real people!\nHa...ha...!");
	state = 4;
	}
	
	if (playerSanity == 1 && show1) {
	GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.label.wordWrap = true;

	GUI.Label(Rect(Screen.width / 2 - 200, 100, 400, 400), "R-ring-a-round the r-roses,\nhehe pocket full of p-PISTOLS,\nSHOOT! SHOOT!\nThey ALL FALL DOWN.");
	state = 5;
	}
	
	if (playerSanity == 0 && show0) {
	GUI.skin.label.alignment = TextAnchor.UpperLeft;
	GUI.skin.label.fontSize = 18;
	GUI.skin.label.fontStyle = FontStyle.BoldAndItalic;
	GUI.skin.label.wordWrap = true;

	GUI.Label(Rect(Screen.width / 2 - 200, 100, 400, 600), "THEY DID THIS TO ME. THEY DID THIS.\n");
	state = 6;
	}


	 switch (state) {
	 	case 1:
	 	 i1();
	 	 break;
	 	 case 2:
	 	 i2();
	 	 break;
	 	 case 3:
	 	 i3();
	 	 break;
	 	 case 4:
	 	 i4();
	 	 break;
	 	 case 5:
	 	 i5();
	 	 break;
	 	 case 6:
	 	 i6();
	 	 break;
	 	default: 
	 			break;
	 }
	 
}

function i1() {
yield WaitForSeconds(7);
show5 = false;
state = 0;
}

function i2() {
yield WaitForSeconds(7);
show4 = false;
state = 0;

}

function i3() {
yield WaitForSeconds(7);
show3 = false;
state = 0;
}

function i4() {
yield WaitForSeconds(7);
show2 = false;
state = 0;
}

function i5() {
yield WaitForSeconds(7);
show1 = false;
state = 0;
}

function i6() {
yield WaitForSeconds(7);
show0 = false;
state = 0;
}
