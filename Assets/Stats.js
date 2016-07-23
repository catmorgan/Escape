#pragma strict
//starting health
var health = 100; 
//base attack
var attack = 10;
//starting sanity
var sanity = 6; 

function Update () {

	//player dies
	if (health == 0) {
	Destroy(this);
	//Load.Death.Scene "You died"
	}
	
	 
	 //if player has weapon, attack is increased by weapon's attack
	 if (this.transform.FindChild("Weapon") && !null) {
	 attack = this.GetComponentInChildren(Stats).attack;
	 }
	 
	 

}