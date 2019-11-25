import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
    constructor() {
        this.mainHeader = document.querySelector(".selector")
        this.pageSections = document.querySelectorAll(".selector")
        this.browserHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.events()
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight
        }, 330))
    }

    determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down'
        } else {
            this.scrollDirection = 'up'
        }
        this.previousScrollY = window.scrollY
    }

    runOnScroll() {

        this.determineScrollDirection()

        if (window.scrollY > 60 && this.scrollDirection = 'up') {
            this.mainHeader.classList.add("class")
        } else {
            this.mainHeader.classList.remove("class")
        }

        this.pageSections.forEach(el => this.calcSection(el))
    }
}

export default StickyHeader