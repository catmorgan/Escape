#pragma strict
var walk: AudioSource;

function Update () {

 var aSources = this.gameObject.transform.GetComponents(AudioSource);
   walk = aSources[1];

if (Input.GetKeyDown(KeyCode.W) ||
	Input.GetKeyDown(KeyCode.A) ||
	Input.GetKeyDown(KeyCode.S) ||
	Input.GetKeyDown(KeyCode.D)) {
	//Debug.Log(this.gameObject.transform.name);
	walk.Play();
		}
	
	if (Input.GetKeyUp(KeyCode.W) ||
	Input.GetKeyUp(KeyCode.A) ||
	Input.GetKeyUp(KeyCode.S) ||
	Input.GetKeyUp(KeyCode.D)) {
	walk.Stop();
	}
}