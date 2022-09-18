import gsap from "gsap";


export function textAnimation(target, { duration, type }) {
    
    gsap.fromTo(target, {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: duration
    })

    console.log(target)
    console.log(duration, type)
}