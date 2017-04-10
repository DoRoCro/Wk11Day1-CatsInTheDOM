var createUlForCat = function () {
  var ul = document.createElement('ul')
  ul.classList.add('cat')
  ul.style.listStyleType = 'none'
  document.body.style.backgroundColor = 'darkgray'
  return ul
}

var createNameLi = function (name) {
  var li = document.createElement('li')
  li.innerText = 'Name: ' + name
  li.style.display = 'inline'
  li.style.color = 'blue'
  return li
}

var createFoodLi = function (food) {
  var li = document.createElement('li')
  li.innerText = 'Favourite food: ' + food
  li.style.color = 'darkcyan'
  li.style.display = 'inline'
  li.style.padding = '30px'
  return li
}

var createImageLi = function (urlForImage) {
  var li = document.createElement('li')
  var img = document.createElement('img')
  img.style.width = '500px'
  img.style.height = '500px'
  img.style.display = 'inline-block'
  img.style.margin = '5px'
  img.style.border = '3px solid #c99'
  img.style.backgroundPosition = 'center center'
  img.style.backgroundSize = 'cover'
  img.style.borderRadius = '50%'
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
    },
    { name: 'Ginger', food: 'Cheese', photo: 'https://pbs.twimg.com/media/C75JBFeVsAAVwlj.jpg'
    }
  ]
  cats.forEach(function (cat) {
    addCat(cat.name, cat.food, cat.photo)
  })
}

window.onload = catstuff
