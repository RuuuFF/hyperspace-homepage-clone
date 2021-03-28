import { Section } from './Section.js'
import { Animation } from './Animation.js'

const Main = {
  checkBoxes() {
    const triggerBottom = window.innerHeight / 100 * 75
    const triggerCenter = window.innerHeight / 100 * 55
  
    Section.sectionCheck(triggerCenter)
    Animation.animationCheck(triggerBottom)
  }
}

window.addEventListener('scroll', Main.checkBoxes)

export { Main }