document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM fully loaded and parsed');

    var rotated_text = document.getElementById('rotated_text');

    var old_width = rotated_text.offsetWidth;
    var width;

    // animation frame loop
    function loop() {
        
        // get widt of div with id="rotated_text"
        width = rotated_text.offsetWidth;

        // if width has changed
        if (width != old_width) {
            // set new width
            old_width = width;

            // set font-size of p inside rotated_text to width * n
            rotated_text.children[0].style.fontSize = width * 0.15 + 'px';
        }



        requestAnimationFrame(loop);
    }

    // start the loop
    requestAnimationFrame(loop);

});