#pragma strict

var player: GameObject;

var direction: Vector2;
var speed: float;

function init() {
    var pos = Random.onUnitSphere * 10;
    pos.z = 0;
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
    // TODO: 判断该gameObject是否跑出Camera
    return false;
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
    }
}
