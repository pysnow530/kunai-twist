#pragma strict

var kunaiPrefab: Transform;

var amount = 20;

function Start () {

}

function Update () {
    // DONE: continuous attack (not by wave)
    if (transform.childCount < amount) {
        Instantiate(kunaiPrefab, transform);
    }
}
