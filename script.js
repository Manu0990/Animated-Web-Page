Shery.imageEffect("#back", {
     style: 5, 
     config: { 
        "a": { "value": 2, "range": [0, 30] }, 
        "b": { "value": -0.98, "range": [-1, 1] }, 
        "zindex": { "value": -9996999, 
        "range": [-9999999, 9999999] }, 
        "aspect": { "value": 1.9085428055806375 }, 
        "gooey": { "value": true }, 
        "infiniteGooey": { "value": true }, 
        "growSize": { "value": 4, 
        "range": [1, 15] }, 
        "durationOut": { "value": 1, "range": [0.1, 5] }, 
        "durationIn": { "value": 1, "range": [0.1, 5] }, 
        "displaceAmount": { "value": 0.5 }, 
        "masker": { "value": true }, 
        "maskVal": { "value": 1.1, "range": [1, 5] }, 
        "scrollType": { "value": 0 }, 
        "geoVertex": { "range": [1, 64], "value": 1 }, 
        "noEffectGooey": { "value": false }, 
        "onMouse": { "value": 1 }, 
        "noise_speed": { "value": 0.91, "range": [0, 10] }, 
        "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, 
        "discard_threshold": { "value": 0.71, "range": [0, 1] },
        "antialias_threshold": { "value": 0.02, "range": [0, 0.1] }, 
        "noise_height": { "value": 0.41, "range": [0, 2] }, 
        "noise_scale": { "value": 17.36, "range": [0, 100] } 
    }, 
    gooey: true, })

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;

    document.querySelector("#main").addEventListener("click", function () {

        // 'if' executes only if 'animating = false'
        if (!animating) {
            animating = true;   // 'animating = true' so no more animation starts right now

            // To push all my h1 elements upper (Animation)
            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: .9,

                // To stack the element back after the animation (For endless loop)
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    animating = false;  // Animation completed so 'animating = false', So that , animation can be started again
                },
            });

            // Increment the index and reset it to 0 when it reaches the end
            index = (index + 1) % h1s.length;

            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
})