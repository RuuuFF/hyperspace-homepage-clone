const Animation = {
  inactives: document.querySelectorAll('.animation'),

  removeInactiveClass(index) {
    Animation.inactives[index].classList.add('run-animation')
  },

  animationCheck(trigger) {
    Animation.inactives.forEach((inactive, index) => {
      const animationTop = inactive.getBoundingClientRect().top;
  
      if (animationTop <= trigger) {
        Animation.removeInactiveClass(index)
      }
    })
  }
}

export { Animation }