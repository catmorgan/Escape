#pragma strict
var playerHealth = 0;
var playerAttack = 0;
var show = "";
var player: GameObject; 

function Awake () {
	player = GameObject.FindWithTag("Player");
}

function Update () {
	playerHealth = player.GetComponent(Stats).health;
	playerAttack = player.GetComponent(Stats).attack;
	show = "Health: " + playerHealth + "   Attack: " + playerAttack;
}

function OnGUI () {
GUI.skin.label.fontStyle = FontStyle.Bold;
GUI.skin.label.fontSize = 25;

	GUI.Label(Rect (5, Screen.height - 55, 300, 55), show);
}