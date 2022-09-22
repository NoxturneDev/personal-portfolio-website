import gsap from "gsap";

export const scrollAnimation = {
    target, 
    snap: () => {
        

    },
    children: (target) => {
        gsap.fromTo(target, {
            opacity: 0,
            x: 100
        }, {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power2.out',
            stagger: {
                from: "start",
                each: 0.3
            }
        })
    }
}

export function snapAnimation(target) {

    gsap.fromTo(target, {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: duration
    })

}

