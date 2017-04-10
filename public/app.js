var createUlForCat = function () {
  var ul = document.createElement('ul')
  ul.classList.add('cat')
  return ul
}

var createNameLi = function (name) {
  var li = document.createElement('li')
  li.innerText = 'Name: ' + name
  return li
}

var addCat = function (name) {
  var catsContainer = document.getElementById('cats')
  var ul = createUlForCat()
  var nameLi = createNameLi(name)
  ul.appendChild(nameLi)

  catsContainer.appendChild(ul)
}

// get cats list section
var catstuff = function () {
  addCat('Fluffy')
}

window.onload = catstuff
