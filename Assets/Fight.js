#pragma strict
var message = "Enter description";
var initialMessage = message;
var eat;
var nothanks;
var button;
var ex;
var show = false;
var player: GameObject;
var state = 0;
var hit : RaycastHit;
var eatShow = false;
var noShow = false; 
var i = 0;
var showEx = false;

function Awake () {
	player = GameObject.FindWithTag("Player");
	message += "\n\nThis weapon's attack is "
    				+ this.gameObject.GetComponent(Stats).attack + ".\n";
	initialMessage = message;
     eatShow = true;
    noShow = true;
}

function Update(){
    if(Input.GetMouseButtonDown(0) &&
       collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit,
                        Mathf.Infinity)) {
           show = true;
           	player.GetComponent(MouseLook).enabled = false;
           	player.GetComponent(FPSInputController).enabled = false;
           		message = initialMessage;
   				 noShow = true;
   			     state = 0;	
				showEx = false;
				i = 0;
          }
}

function OnGUI () {
if (show) {
    GUI.skin.button.alignment = TextAnchor.UpperLeft;
	GUI.skin.button.wordWrap = true; 
	GUI.skin.box.alignment = TextAnchor.UpperLeft;
	GUI.skin.box.wordWrap = true; 
		GUI.skin.button.fontSize = 17; 
		
	GUI.skin.box.fontSize = 17;
	
    button = GUI.Button(Rect(Screen.width / 2 - 100, Screen.height /2 - 100, 200, 200 ), message); 
    
          if (showEx) { 
     ex = GUI.Button(Rect(Screen.width / 2 + 80, Screen.height /2 - 130, 60, 30 ), "Close");
     
     }
          
     if (eatShow){
     GUI.skin.button.alignment = TextAnchor.MiddleCenter;
 	eat = GUI.Button(Rect(Screen.width / 2 - 100, Screen.height /2 + 100, 100, 50), "Pick Up");
 	} else {
 	GUI.skin.box.alignment = TextAnchor.MiddleCenter;
 		GUI.Box(Rect(Screen.width / 2 - 100, Screen.height /2 + 100, 100, 50), "Pick Up");
 	}
 	if (noShow) {
 	GUI.skin.button.alignment = TextAnchor.MiddleCenter;
	nothanks = GUI.Button(Rect(Screen.width / 2, Screen.height /2+ 100, 100, 50), "Leave");
	} else {
	GUI.skin.box.alignment = TextAnchor.MiddleCenter;
 	GUI.Box(Rect(Screen.width / 2, Screen.height /2 + 100, 100, 50), "Leave");
	}
}

if (eat && i ==0) {
state = 1; 
this.gameObject.GetComponent(AudioSource).audio.Play();
player.GetComponent(Stats).attack = this.gameObject.GetComponent(Stats).health;
message += "\n>You take the knife. Your attack is now " + this.gameObject.GetComponent(Stats).attack + "."; 
i++;
showEx = true;
}

if (nothanks && i ==0) {
state = 2;
message += "\n>Crappy ol' piece of shit.";

i++;
showEx = true;
}

 	 switch (state) {
	 	case 1:
	 	 i1();
	 	 break;
	 	 case 2:
	 	 i2();
	 	 break;
	 	default: 
	 			break;
	 }
 
}

function i1() {
eatShow = false;
if (ex) {
yield WaitForSeconds(1);
player.GetComponent(MouseLook).enabled = true;
player.GetComponent(FPSInputController).enabled = true;
Destroy(this.gameObject);
}
}

function i2() {
noShow = false;
if (ex) {
yield WaitForSeconds(1);
    message = initialMessage;
    noShow = true;
    player.GetComponent(MouseLook).enabled = true;
    player.GetComponent(FPSInputController).enabled = true;
    nothanks = false;
	show = false;
	i = 0;
}
}
