#pragma strict

var areaRadius = 12;

var player: GameObject;

var direction: Vector2;
var speed: float;

function init() {
    var pos = Random.insideUnitCircle.normalized * areaRadius;
    transform.position = pos;

    player = GameObject.FindWithTag("Player");

    direction = player.transform.position - transform.position;
    direction += Random.insideUnitCircle;

    speed = Random.Range(90, 110);
}

function Start () {
    init();
    GetComponent.<Rigidbody2D>().AddForce(
            direction.normalized * speed, ForceMode2D.Force);
}

function outOfCamera() {
    // DONE: predicate if this is out of camera
    return transform.position.magnitude > areaRadius;
}

function Update () {
    if (outOfCamera()) {
        Destroy(gameObject);
    }
}

function hitPlayer () {
    Debug.Log("Player was hitted!");
}

function OnTriggerEnter2D(collider : Collider2D) {
    if (collider.gameObject == player) {
        hitPlayer();
    } else if (collider.tag == "Kunai") {
        // TODO: destroy this and collider
        Debug.Log("<" + name + ">" + " hit " + "<" + name + ">");
    }
}
