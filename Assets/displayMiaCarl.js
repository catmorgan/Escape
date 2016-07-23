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
var showEx = false;
var punch: AudioSource;
var knife: AudioSource;
var gun: AudioSource;



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
	attack = GUI.Button(Rect(Screen.width / 2 - 50, Screen.height /2 + 100, 100, 50), "Attack");
	} else {
	GUI.skin.box.alignment = TextAnchor.MiddleCenter;
	GUI.Box(Rect(Screen.width / 2 - 50, Screen.height /2 + 100, 100, 50), "Attack");
	}
}


if (attack && i==0) {
showEx = true;
 attackShow = false;
 
 
   var aSources = enemy.GetComponents(AudioSource);
    punch = aSources[0];
    knife = aSources[1];
    gun = aSources[2];

 if (playerAttack == 10) {
 	punch.Play();
 	//enemy.GetComponent(AudioSource).audio.Play();
 	}
 	
else if (playerAttack > 10 && playerAttack < 25) {
 	knife.Play();

   	}  	
 	
 else  {
 	gun.Play();
   	}  
	 	 message += "\n>You attack the person! You deal " + playerAttack +
	 " damage. Enemy is dead."  + "\n";
	 	message += "\nYou lose " + weaponAttack + " health." + "\n";
	    if (enemy.GetComponentInChildren(Stats).attack !=0 && playerAttack < weaponAttack) {
		message += "\nThis weapon is better than yours. You pick it up. Your attack is now " + 
		weaponAttack + "."; 
		} 
		else if(!GameObject.FindGameObjectWithTag("Finish").transform.IsChildOf(enemy.transform)) {
		message += "\nOh my god...they didn't even have a weapon on them...";
		}
		    else {
		message += "\nTheir weapon is worse than yours. You discard it.";
	    }
	 
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
  if (ex) {
   // player.GetComponent(MouseLook).enabled = true;
   	player.GetComponent(MouseLook).enabled = true;
   	player.GetComponent(FPSInputController).enabled = true;
   		player.GetComponent(CharacterMotor).enabled = true;
    playerAttack = weaponAttack; 
     playerSanity--;
	player.GetComponent(Stats).sanity =  playerSanity;
	player.GetComponent(Stats).attack =  playerAttack;
	player.GetComponent(Stats).health -=  weaponAttack;
	Destroy(enemy);
}
}

