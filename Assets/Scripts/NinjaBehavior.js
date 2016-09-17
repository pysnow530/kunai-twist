#pragma strict

function Start () {

}

function Update () {
    var dx = Input.GetAxis('Horizontal');
    var dy = Input.GetAxis('Vertical');

    if (dx < 0) {
        transform.Translate(Vector2.left * Time.deltaTime);
    } else if (dx > 0) {
        transform.Translate(Vector2.right * Time.deltaTime);
    }

    if (dy < 0) {
        transform.Translate(Vector2.down * Time.deltaTime);
    } else if (dy > 0) {
        transform.Translate(Vector2.up * Time.deltaTime);
    }
}
