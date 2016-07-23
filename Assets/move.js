#pragma strict

function OnTriggerEnter() {
GameObject.FindWithTag("Player").transform.position = Vector3(-0.4644034, 1, -6.188068);
Destroy (this.gameObject);
}