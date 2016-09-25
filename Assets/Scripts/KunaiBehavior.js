#pragma strict

var areaRadius = 12;

var player: GameObject;
var bang: GameObject;

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

function boot() {
    var force = direction.normalized * speed;
    GetComponent.<Rigidbody2D>().AddForce(force, ForceMode2D.Force);
}

function Start () {
    init();
    boot();
}

function outOfCamera() {
    // DONE: predicate if this is out of camera
    return transform.position.magnitude > areaRadius;
}

function Update () {
    // transform.Rotate(Vector3.forward * Time.deltaTime * 10);

    if (outOfCamera()) {
        Destroy(gameObject);
    }
}

function hitPlayer () {
    // DONE: player weaker or die
    player.GetComponent.<NinjaBehavior>().wasHitted(10);
    Debug.Log("hitPlayer()");
}

function OnTriggerEnter2D(collider : Collider2D) {
    if (collider.gameObject == player) {
        hitPlayer();
    } else if (collider.tag == "Kunai") {
        // TODO: play effects and audio
        Instantiate(bang, transform.position, Quaternion.identity);

        // DONE: destroy this and collider
        Destroy(gameObject);
        Destroy(collider);
    }
}
