#pragma strict

var kunaiPrefab: Transform;

function Start () {
    for (var i = 0; i < 20; i++) {
        Instantiate(kunaiPrefab, transform);
    }
}

function Update () {

}
