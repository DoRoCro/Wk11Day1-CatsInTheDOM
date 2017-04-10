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

var createFoodLi = function (food) {
  var li = document.createElement('li')
  li.innerText = 'Favourite food: ' + food
  return li
}

var createImageLi = function (urlForImage) {
  var li = document.createElement('li')
  var img = document.createElement('img')
  img.style.width = '500px'
  img.src = urlForImage
  li.appendChild(img)
  return li
}

var addCat = function (name, food, urlForImage) {
  var catsContainer = document.getElementById('cats')
  var ul = createUlForCat()
  var nameLi = createNameLi(name)
  ul.appendChild(nameLi)
  ul.appendChild(createFoodLi(food))
  ul.appendChild(createImageLi(urlForImage))

  catsContainer.appendChild(ul)
}

// get cats list section
var catstuff = function () {
  addCat('Fluffy', 'Anything small, cute and alive', 'https://s-media-cache-ak0.pinimg.com/736x/e1/c6/4b/e1c64b052929fd122bd8a0f532a7f1fe.jpg')
}

window.onload = catstuff
