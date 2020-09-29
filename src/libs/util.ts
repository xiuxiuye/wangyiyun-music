const util = {
  getMaxZIndex () {
  return Array.from(document.body.querySelectorAll('*')).reduce((pre, next) => {
      return Math.max(pre, +window.getComputedStyle(next).zIndex || 0)
    }, 0)
  }
}

export default util
