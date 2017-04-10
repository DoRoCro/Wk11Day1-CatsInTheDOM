var createUlForCat = function () {
  var ul = document.createElement('ul')
  ul.classList.add('cat')
  return ul
}

// get cats list section
var catstuff = function () {
  var catsContainer = document.getElementById('cats')
  var ul = createUlForCat()
  catsContainer.appendChild(ul)
}

window.onload = catstuff
