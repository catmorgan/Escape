#pragma strict
//displays the room's prompt
var display : boolean = false; 
//Message to display
var message = "Enter description";
var initialMessage = message;
//Beating the enemy message
var attack;
var runaway;
var state = 0;
var button;
var ex;
//player object
var player : GameObject; 
//player's health
var playerHealth : int;
//player's attack
var playerAttack : int;
//player's sanity
var playerSanity : int;
//enemy object
var enemy : GameObject;
//enemy health
var enemyHealth : int;
//enemy attack
var enemyAttack : int;
//enemy weapon's attack
var weaponAttack : int;
var i = 0;
var attackShow = true;
var runShow = true;
var showEx = false;
var laugh: AudioSource;


function Awake () {
	player = GameObject.FindWithTag("Player");
	enemy = this.transform.parent.gameObject;
	enemyHealth = enemy.GetComponent(Stats).health;
	enemyAttack = enemy.GetComponent(Stats).attack;
	weaponAttack = enemy.GetComponentInChildren(Stats).attack;
	message += "\n";
	initialMessage = message;
}

function OnTriggerEnter() {
	playerHealth = player.GetComponent(Stats).health;
	playerAttack = player.GetComponent(Stats).attack;
	playerSanity = player.GetComponent(Stats).sanity;
	display = true;
	player.GetComponent(MouseLook).enabled = false;
	player.GetComponent(FPSInputController).enabled = false;
	player.GetComponent(CharacterMotor).enabled = false;
}

function OnTriggerExit() {
	//this.gameObject.GetComponent(B
	i = 0;
	state = 0;
	attackShow = true;
	runShow = true;
	message = initialMessage;
	showEx = false;
	display = false;
}

function OnGUI() {

	GUI.skin.button.alignment = TextAnchor.UpperLeft;
	GUI.skin.button.wordWrap = true; 
	GUI.skin.button.fontSize = 18; 
	
		GUI.skin.box.alignment = TextAnchor.UpperLeft;
	GUI.skin.box.wordWrap = true; 
	GUI.skin.box.fontSize = 18;

	if (display) {
	
	
	button = GUI.Button(Rect(Screen.width / 2 - 200, Screen.height /2 - 200, 400, 300 ), message); 
	if (showEx) {
	ex = GUI.Button(Rect(Screen.width / 2 + 180, Screen.height /2 - 230, 60, 30 ), "Close"); 
	}
	
		if (attackShow) {
		GUI.skin.button.alignment = TextAnchor.MiddleCenter;
	attack = GUI.Button(Rect(Screen.width / 2 - 200, Screen.height /2 + 100, 100, 50), "Attack");
	} else {
	GUI.skin.box.alignment = TextAnchor.MiddleCenter;
	GUI.Box(Rect(Screen.width / 2 - 200, Screen.height /2 + 100, 100, 50), "Attack");
	}
	if (runShow) {
	GUI.skin.button.alignment = TextAnchor.MiddleCenter;
	runaway = GUI.Button(Rect(Screen.width / 2 + 100, Screen.height /2 + 100, 100, 50), "Run Away");	
	} else {
	GUI.skin.box.alignment = TextAnchor.MiddleCenter;
	GUI.Box(Rect(Screen.width / 2 + 100, Screen.height /2+ 100, 100, 50), "Run Away");	
	}
}


	
 
 if (runaway && i ==0) {
 runShow = false;
 
 var aSources = enemy.GetComponents(AudioSource);
    laugh = aSources[1];
    
    
 	player.GetComponent(AudioSource).audio.Play();
 	laugh.Play();
 	
 	
 	message += "\n>Hahhaha running, running from fire! Play with fire and you'll get burned~! \n\nYou lose " + 
	(weaponAttack / 2) + " health. \n\nLet's play again sometime, Demon."; 
	playerHealth = player.GetComponent(Stats).health -= (weaponAttack / 2);
	//showRunaway = true;
	state = 3;
	i++;
	showEx = true;
 }

if (attack && i==0) {
showEx = true;
 attackShow = false;
     enemy.GetComponent(AudioSource).audio.Play();
	 	 message += "\n>I'm not this dark, twisted person. \n" +
	 	 "'Yes, yes! I have my demons and this is my way of exorcising them. It gets them out, out, out! \n" +
	 	 "Better out than in!'\n\nYou deal " + playerAttack +
	 " damage. \n\nBye, bye! Bye, bye!";
	 	message += "\n\nYou lose " + weaponAttack + " health." + "\n"; 
	 	  state = 1;
	 	  i++;
	}
	
	 	
	 switch (state) {
	 	case 1:
	 	 i1();
	 	 break;
	 	 case 3:
	 	 i3();
	 	 break;
	 	default: 
	 			break;
	 }
}

	
	
function i1() {
  if (ex) {
   // player.GetComponent(MouseLook).enabled = true;
   	player.GetComponent(MouseLook).enabled = true;
   	player.GetComponent(FPSInputController).enabled = true;
   		player.GetComponent(CharacterMotor).enabled = true;
    playerSanity--;
    playerAttack = weaponAttack; 
	player.GetComponent(Stats).sanity =  playerSanity;
	player.GetComponent(Stats).attack =  playerAttack;
	player.GetComponent(Stats).health -=  weaponAttack;
	Destroy(enemy);
}
}


function i3() {
if (ex) {
    yield WaitForSeconds(1);
    message = initialMessage;
  //  player.GetComponent(MouseLook).enabled = true;
    runaway = false;
	display = false;
	state = 0;
	player.GetComponent(MouseLook).enabled = true;
	player.GetComponent(FPSInputController).enabled = true;
	player.GetComponent(CharacterMotor).enabled = true;
}
}

