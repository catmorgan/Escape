#pragma strict
var player: GameObject; 

function Awake() {
	player = GameObject.FindWithTag("Player");
}

function Update () {

	if (GameObject.Find("Mia") == null) {
	player.GetComponent(mentalState).Mia = false;
	}
	
	if (GameObject.Find("beer") == null) {
	player.GetComponent(mentalState).beer = false;
	}
	
	if (GameObject.Find("cake") == null) {
	player.GetComponent(mentalState).cake = false;
	}
	
	if (GameObject.Find("knife") == null) {
	player.GetComponent(mentalState).knife = false;
	}
	
	if (GameObject.Find("knife1") == null) {
	player.GetComponent(mentalState).knife1 = false;
	}
	
	if (GameObject.Find("carl") == null) {
	player.GetComponent(mentalState).carl = false;
	}
	
	if (GameObject.Find("Joan") == null) {
	player.GetComponent(mentalState).Joan = false;
	}
	
	if (GameObject.Find("justin") == null) {
	player.GetComponent(mentalState).justin = false;
	}
	
	if (GameObject.Find("Jane") == null) {
	player.GetComponent(mentalState).jane = false;
	}
	
	
	if (GameObject.Find("modelMushrooms") == null) {
	player.GetComponent(mentalState).modelMushrooms = false;
	}
	
	if (GameObject.Find("vincent") == null) {
	player.GetComponent(mentalState).vincent = false;
	}

}

