let path = "M 30 275 Q 400 10 720 275";
let finalPath = "M 30 275 Q 400 275 720 275";

let svgContainer = document.querySelector(".svg-container");

svgContainer.addEventListener("mousemove", (event)=>
{
    path = `M 30 275 Q ${event.x} ${event.y} 720 275`;

    gsap.to("svg path",{
        attr: {
            d: path
        },
        duration: 0.6

    })
})
svgContainer.addEventListener("mouseleave", (event)=>
{
    gsap.to("svg path",{
        attr: {
            d: finalPath
        },
        duration: 0.6,
        ease: "elastic.out(1.5,0.4)"
    })
})