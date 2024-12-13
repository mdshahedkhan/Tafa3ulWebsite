import gsap from "gsap"

interface HeaderAnimationProps {
    beforeEnter?: (element: any) => void
    enter?: (element: any, done: () => void) => void
}

const timeline = gsap.timeline()
export const useHeaderAnimation = function (): HeaderAnimationProps {
    return {
        beforeEnter: function (element: any) {
        },
        enter: function (element: any, done: () => void) {
            const items = element.querySelectorAll("ul li");
            if (items.length > 0) {
                timeline.from(items, {
                    y: -30,
                    duration: 0.5,
                    opacity: 0,
                    stagger: 0.2,
                })
                done()
            } else {
                timeline.from(element, {
                    y: -30,
                    duration: 0.5,
                    opacity: 0,
                    stagger: 0.2,
                })
                done()
            }
        }
    }
}

export const useHomeSectionAnimation = function () {
    function numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return {
        enter: function (element: any, done: () => void) {
            const direction = element.dataset.direction
            if (direction === "left") {
                timeline.from(element, {
                    x: -300,
                    duration: 0.5,
                    opacity: 0,
                })
            }
        },
        enterCounter(element: any, done: () => void) {
            const count = element.querySelector(".counter")
            timeline.from(count, {
                textContent: 0,
                duration: 2,
                ease: "power1.in",
                snap: {textContent: 1},
                stagger: {
                    each: 1.0,
                    onUpdate: function () {
                        count.innerHTML = numberWithCommas(Math.ceil(count.textContent));
                    },
                }
            })
        },
        enterLeftSideAnimation(element: any, done: () => void) {
            timeline.from(element, {
                x: 200,
                duration: 0.2,
                opacity: 0,
            })
            done()
        },
        enterHomeEvents(element: any, done: () => void) {
            timeline.from(element.querySelectorAll('img'), {
                x: 200,
                duration: 0.4,
                opacity: 0,
                stagger: 0.1
            })
        },
        enterItems: function (element: any, done: () => void) {
            const dataset = element.dataset
            const images = element.querySelectorAll("div img")
            let direction = 40
            if (dataset.direction === "left") {
                direction = -40
            }
            timeline.from(element, {
                x: 200,
                duration: 1,
                opacity: 0,
            })
            if (images.length > 0) {
                timeline.from(images, {
                    x: direction,
                    duration: dataset.duration && dataset.duration || 0.5,
                    opacity: 0,
                    stagger: 0.2,
                })
            }

            done()
        }
    }
}