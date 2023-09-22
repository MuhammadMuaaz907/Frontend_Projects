var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"

})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 4
        crsr.style.border = "0.1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px"
        crsr.style.backgroundColor = "#95C11E"
    })
})











gsap.to("#nav", {
    backgroundColor:"#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end : "top -11%",
        scrub: 2,
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger: {
        trigger:"#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end : "top -70%",
        scrub: 2,
    }
    
})

gsap.from("#about-us img,#about-us-in" , {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 4,
    }
})
gsap.from("#card-container" , {
    scale: 0.4,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 4,
    }
})

gsap.from("#quote-left" , {
    y: -60,
    x: -60,
    scrollTrigger:{
        trigger: "#quote-left",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end : "top 55%",
        scrub: 4,
    }
})

gsap.from("#quote-right" , {
    y: 60,
    x: 60,
    scrollTrigger:{
        trigger: "#quote-right",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end : "top 85%",
        scrub: 4,
    }
})

gsap.from("#page-4 h1", {
    y: 50,
    scrollTrigger:{
        trigger: "#page-4",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end : "top 85%",
        scrub: 2,
    }
})