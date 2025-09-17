//Kod av fermanjj
const kb = document.getElementById('kb');
let x_incr = 5;
let y_incr = 5;

function init() {
    kb.style.position = "absolute";
    kb.style.top = `${x_incr}px`;
    kb.style.left = `${y_incr}px`;

    // animate the logo
    requestAnimationFrame(animate);
}


function handle_collision() {
    const kb_height = kb.offsetHeight;
    const kb_width = kb.offsetWidth;
    const kb_top = kb.offsetTop;
    const kb_left = kb.offsetLeft;
    const win_height = window.outerHeight;
    const win_width = window.outerWidth;

    if (kb_left <= 0 || kb_left + kb_width >= win_width) {
        // reverse x_incr
        x_incr = -x_incr;
    }

    if (kb_top <= 0 || kb_top + kb_height >= win_height) {
        // reverse y_incr
        y_incr = -y_incr;
    }
}

function animate() {
    handle_collision();
    kb.style.top = `${kb.offsetTop + y_incr}px`;
    kb.style.left = `${kb.offsetLeft + x_incr}px`;

    requestAnimationFrame(animate);
}

init();
