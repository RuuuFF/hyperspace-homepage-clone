const Section = {
  sections: document.querySelectorAll('.to-js'),
  navButtons: document.querySelectorAll('.sidebar nav ul a'),

  addActiveButton(index) {
    Section.navButtons[index].classList.add('active')
  },

  removeActiveButtons() {
    Section.navButtons.forEach(navButton => navButton.classList.remove('active'))
  },

  sectionCheck(trigger) {
    Section.sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
  
      if (sectionTop <= trigger) {
        Section.removeActiveButtons()
        Section.addActiveButton(index)
      }
    })
  }
}

export { Section }