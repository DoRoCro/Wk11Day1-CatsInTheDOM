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
  var cats = [
    { name: 'Boba', food: 'Sock fluff', photo: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'
    },
    { name: 'Barnaby', food: 'Tuna', photo: 'http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg'
    },
    { name: 'Max', food: 'Whiskas Temptations', photo: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'
    },
    { name: 'Fluffy', food: 'Anything small, cute and alive', photo: 'https://s-media-cache-ak0.pinimg.com/736x/e1/c6/4b/e1c64b052929fd122bd8a0f532a7f1fe.jpg'
    }
  ]
  cats.forEach(function (cat) {
    addCat(cat.name, cat.food, cat.photo)
  })
}

window.onload = catstuff
