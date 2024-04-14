// Nav Bar Jquery
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


// Button Animation
let link = document.querySelector(".Hero-button");
let pink = document.querySelector(".hero-btn-color");

let hoverTL = gsap.timeline();
hoverTL.pause();

// from, to, fromTo Tweens
hoverTL.to(pink, {
  width: "calc(100% + 1.3em)",
  ease: "Elastic.easeOut(0.25)",
  duration: 0.4
});
hoverTL.to(pink, {
  width: "2em",
  left: "calc(100% - 1.45em)",
  ease: "Elastic.easeOut(0.4)",
  duration: 0.6
});

link.addEventListener("mouseenter", () => {
  hoverTL.play();
});

link.addEventListener("mouseleave", () => {
  hoverTL.reverse();
});
// Button Animation ENds