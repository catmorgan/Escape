#pragma strict
var player: GameObject; 
var mia;
var beer;
var cake; 
var knife;
var knife1;
var carl;
var Joan;
var justin;
var jane;
var mushrooms;
var vincent;
var time = 0.0;

function Awake() {
	player = GameObject.FindWithTag("Player");
    mia = player.GetComponent(mentalState).Mia;
    beer = player.GetComponent(mentalState).beer;
    cake = player.GetComponent(mentalState).cake;
    knife = player.GetComponent(mentalState).knife;
    knife1 = player.GetComponent(mentalState).knife1;
    carl = player.GetComponent(mentalState).carl;
    Joan = player.GetComponent(mentalState).Joan;
    justin = player.GetComponent(mentalState).justin;
    jane = player.GetComponent(mentalState).jane;
    mushrooms = player.GetComponent(mentalState).modelMushrooms;
   vincent = player.GetComponent(mentalState).vincent;
   
   
   if (!mia) {
		//destroy corresponding monster 
		Destroy(GameObject.Find("demonMia"));
	}
	
	if (!beer) {
		//destroy corresponding monster 
		Destroy(GameObject.Find("40oz beer"));
	}
	
	if (!cake) {
		Destroy(GameObject.Find("cake"));
	}
	
	if (!knife) {
		Destroy(GameObject.Find("knife"));
	}
	
	if (!knife1) {
		Destroy(GameObject.Find("knife1"));
	}
	
	if (!mushrooms) {
		Destroy(GameObject.Find("modelMushrooms"));
	}
	
	if (!Joan) {
		Destroy(GameObject.Find("demonJoan"));
	}
	
	if (!justin) {
		Destroy(GameObject.Find("demonJustin"));
	}
	
	if (!vincent) {
		Destroy(GameObject.Find("demonVincent"));
	}
	
	if (!jane) {
		Destroy(GameObject.Find("demonMia2"));

	}
	
	if (!carl) {
		Destroy(GameObject.Find("demonCarl"));
	}
   

}