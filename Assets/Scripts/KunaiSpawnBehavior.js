#pragma strict

var kunaiPrefab: Transform;

var amount = 20;

function Start () {

}

function Update () {
    // TODO: continuous attack (not by wave)
    if (transform.childCount < amount) {
        Instantiate(kunaiPrefab, transform);
    }
}
