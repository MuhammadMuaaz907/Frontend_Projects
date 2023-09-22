const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo,
            duration: 1,
            delay: -1,
            stagger: .2
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo
        })
}

var Timeout;

function cicleChaptaKaro(){
    // define default scale value 
    var xscale = 1;
    var yscale = 1;

    var xperv = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function(dets){
        clearTimeout(Timeout);
        xscale =  gsap.utils.clamp(.8, 1.2, dets.clientX - xperv); 
        yscale =  gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xperv = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
        Timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

        }, 100);
    });
}



function circleMouseFollower (xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

    })
}

cicleChaptaKaro();
circleMouseFollower(); 
firstPageAnim();



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot*0.5),
        });
    });
});


