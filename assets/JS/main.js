window.onscroll = function (){
  const navbar = document.querySelector('.nav-section');
  const header = document.querySelector('header');
    // console.log(window.scrollY);
    if (window.scrollY > header.offsetTop){
        navbar.classList.add('navbar-section-scrolled');
    }else{
        navbar.classList.remove('navbar-section-scrolled')
    }
}
// top product -product 1-
document.querySelectorAll('.productOne').forEach(product => {

  const img = product.querySelector('.productImage img');
  const redColor = product.querySelector('.selected-color-red');
  const blackColor = product.querySelector('.selected-color-black');
  const yellowColor = product.querySelector('.selected-color-yellow');
  //red color
  product.querySelector('.red-color').addEventListener('click' ,() => {
    img.setAttribute('src','./assets/image/product/Aloha Shirt.webp');
    redColor.classList.add('selected-color-style');
    blackColor.classList.remove('selected-color-style');
    yellowColor.classList.remove('selected-color-style');
  })
  // black color 
  product.querySelector('.black-color').addEventListener('click' ,() => {
    img.setAttribute('src','./assets/image/product/FancyShirt.webp');
    blackColor.classList.add('selected-color-style');
    redColor.classList.remove('selected-color-style');
    yellowColor.classList.remove('selected-color-style');
  });
  //yellow color
  product.querySelector('.yellow-color').addEventListener('click' ,() => {
    img.setAttribute('src','./assets/image/product/FormalGrayShirt.webp');
    yellowColor.classList.add('selected-color-style');
    blackColor.classList.remove('selected-color-style');
    redColor.classList.remove('selected-color-style');
  });
  // hover Image product one 
    img.addEventListener('mouseenter' , () =>{
      img.setAttribute('data-original-src' , img.src)
      img.setAttribute('src' , './assets/image/product/FormalGrayShirt.webp');
    });
    img.addEventListener('mouseleave' ,() =>{
      img.setAttribute('src' , img.getAttribute('data-original-src'))
    });

})
// top product -product 2 -
// Get all product-two sections
document.querySelectorAll('.product-two').forEach(product => {

    const img = product.querySelector('.productImage img');

    // Red Color Click
    product.querySelector('.red-color').addEventListener('click', () => {
        img.setAttribute('src', './assets/image/product/EpauletteShirt.webp');
        product.querySelector('.selected-color-red').classList.add('selected-color-style');
        product.querySelector('.selected-color-blue').classList.remove('selected-color-style');
        product.querySelector('.selected-color-pink').classList.remove('selected-color-style');
    });

    // Blue Color Click
    product.querySelector('.blue-color').addEventListener('click', () => {
        img.setAttribute('src', './assets/image/product/TheDistinguishing.webp');
        product.querySelector('.selected-color-blue').classList.add('selected-color-style');
        product.querySelector('.selected-color-pink').classList.remove('selected-color-style');
        product.querySelector('.selected-color-red').classList.remove('selected-color-style');
    });

    // Pink Color Click
    product.querySelector('.pink-color').addEventListener('click', () => {
        img.setAttribute('src', './assets/image/product/shortSleeveShirt.webp');
        product.querySelector('.selected-color-pink').classList.add('selected-color-style');
        product.querySelector('.selected-color-red').classList.remove('selected-color-style');
        product.querySelector('.selected-color-blue').classList.remove('selected-color-style');
    });
    // hover Image product two 

    // On hover (mouseenter) - change to alternate image
    img.addEventListener('mouseenter', () => {
      img.setAttribute('data-original-src' , img.src)
      img.setAttribute('src', './assets/image/product/underShirt.webp');
    });
  
    // On mouse leave - restore original image
    img.addEventListener('mouseleave', () => {
      img.setAttribute('src', img.getAttribute('data-original-src'));
    });
});

// top product -product 3-
document.querySelectorAll('.product-three').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const blackColor = product.querySelector('.selected-color-black');
  const yellowColor = product.querySelector('.selected-color-yellow');
  const blueColor = product.querySelector('.selected-color-blue');
  // black-color
  product.querySelector('.black-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/FancyShirt.webp');
    blackColor.classList.add('selected-color-style');
    yellowColor.classList.remove('selected-color-style');
    blueColor.classList.remove('selected-color-style');
  });
  // yellow-color
  product.querySelector('.yellow-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/stripedShirt.webp');
    yellowColor.classList.add('selected-color-style');
    blackColor.classList.remove('selected-color-style');
    blueColor.classList.remove('selected-color-style');
  });
  // blue-color
  product.querySelector('.blue-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/GranddadShirt.webp');
    blueColor.classList.add('selected-color-style');
    yellowColor.classList.remove('selected-color-style');
    blackColor.classList.remove('selected-color-style');
  });
  
  // On hover (mouseenter) - change to alternate image
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src);
    img.setAttribute('src', './assets/image/product/stripedShirt.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});

// top product -product 4-
document.querySelectorAll('.product-four').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const blueColor = product.querySelector('.selected-color-blue');
  const redColor = product.querySelector('.selected-color-red');
  //blue-color
  product.querySelector('.blue-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/FormalGrayShirt.webp');
    blueColor.classList.add('selected-color-style');
    redColor.classList.remove('selected-color-style');
  });
  //  red-color
  product.querySelector('.red-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/FancyShirt.webp');
    redColor.classList.add('selected-color-style');
    blueColor.classList.remove('selected-color-style');
  });
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/FancyShirt.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
})

// hover image product 5
document.querySelectorAll('.product-five').forEach(product => {
  const img = product.querySelector('.productImage img');

  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/poloPants.webp');
    product.querySelector('.product-five .soldout-btn').classList.add('soldout-btn-hidden');

  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
    product.querySelector('.product-five .soldout-btn').classList.add('soldout-btn-hidden');

  });
});

// top product -product 6 -
document.querySelectorAll('.product-six').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const pinkColor = product.querySelector('.selected-color-pink');
  const redColor = product.querySelector('.selected-color-red');
  // pink-color
  product.querySelector('.pink-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/GranddadShirt.webp');
    pinkColor.classList.add('selected-color-style');
    redColor.classList.remove('selected-color-style');
  });
  // red-color
  product.querySelector('.red-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/Tunic-shirt-For-Girl.webp');
    redColor.classList.add('selected-color-style');
    pinkColor.classList.remove('selected-color-style');
  });
  // hover
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/Tunic-shirt-For-Girl.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});

// top product -product 7 -
document.querySelectorAll('.product-siven').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const redColor = product.querySelector('.selected-color-red');
  const yellowColor = product.querySelector('.selected-color-yellow');
  const blackColor = product.querySelector('.selected-color-black');
// red-color
product.querySelector('.red-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/JerseyShirt.webp');
  redColor.classList.add('selected-color-style');
  blackColor.classList.remove('selected-color-style');
  yellowColor.classList.remove('selected-color-style');
});
// yellow-color
product.querySelector('.yellow-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/Aloha Shirt.webp');
  yellowColor.classList.add('selected-color-style');
  redColor.classList.remove('selected-color-style');
  blackColor.classList.remove('selected-color-style');
});
//black-color
product.querySelector('.black-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/FormalGrayShirt.webp');
  blackColor.classList.add('selected-color-style');
  yellowColor.classList.remove('selected-color-style');
  redColor.classList.remove('selected-color-style');
});
    // hover Image product 7 

  // On hover (mouseenter) - change to alternate image
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src);
    img.setAttribute('src', './assets/image/product/Aloha Shirt.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});

// top product -product 8 -
document.querySelectorAll('.product-eight').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const redColor = product.querySelector('.selected-color-red');
  const pinkColor = product.querySelector('.selected-color-pink');
  const blueColor = product.querySelector('.selected-color-blue');

  // red-color
product.querySelector('.red-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/LumberjackShirt.webp');
  redColor.classList.add('selected-color-style');
  pinkColor.classList.remove('selected-color-style');
  blueColor.classList.remove('selected-color-style');
});
// pink-color
product.querySelector('.pink-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/JerseyShirt.webp');
  pinkColor.classList.add('selected-color-style');
  redColor.classList.remove('selected-color-style');
  blueColor.classList.remove('selected-color-style');
});
// blue-color
product.querySelector('.blue-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/Aloha Shirt.webp');
  blueColor.classList.add('selected-color-style');
  pinkColor.classList.remove('selected-color-style');
  redColor.classList.remove('selected-color-style');
});
    // hover Image product 8

  // On hover (mouseenter) - change to alternate image
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src);
    img.setAttribute('src', './assets/image/product/JerseyShirt.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});
// newArrival product 1
document.querySelectorAll('.newArrivaProduct-one').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const redColor = product.querySelector('.selected-color-red');
  const yellowColor = product.querySelector('.selected-color-yellow');
  const pinkColor = product.querySelector('.selected-color-pink');
  // red-color 
product.querySelector('.red-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/poloPants.webp');
  yellowColor.classList.remove('selected-color-style');
  pinkColor.classList.remove('selected-color-style');
  redColor.classList.add('selected-color-style');
});
// yellow-color
product.querySelector('.yellow-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/manJaket.webp');
  yellowColor.classList.add('selected-color-style');
  pinkColor.classList.remove('selected-color-style');
  redColor.classList.remove('selected-color-style');
});
// pink-color
product.querySelector('.pink-color').addEventListener('click' , () =>{
  img.setAttribute('src','./assets/image/product/blue-women-shirt.webp');
  yellowColor.classList.remove('selected-color-style');
  pinkColor.classList.add('selected-color-style');
  redColor.classList.remove('selected-color-style');
});
  // On hover (mouseenter) - change to alternate image
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src);
    img.setAttribute('src', './assets/image/product/manJaket.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});
// newArrival product 5
document.querySelectorAll('.newArrivaProduct-five').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const greenColor = product.querySelector('.selected-color-green');
  const blackColor = product.querySelector('.selected-color-black');
  const pinkColor = product.querySelector('.selected-color-pink');
  // green-color 
  product.querySelector('.green-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/PoloOriginal-shirts.webp');
    greenColor.classList.add('selected-color-style');
    pinkColor.classList.remove('selected-color-style');
    blackColor.classList.remove('selected-color-style');
  });
  // black-color
  product.querySelector('.black-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/women-pant.webp');
    greenColor.classList.remove('selected-color-style');
    pinkColor.classList.remove('selected-color-style');
    blackColor.classList.add('selected-color-style');
  });
    // pink-color
    product.querySelector('.pink-color').addEventListener('click' , () =>{
      img.setAttribute('src','./assets/image/product/LumberjackShirt.webp');
      greenColor.classList.remove('selected-color-style');
      pinkColor.classList.add('selected-color-style');
      blackColor.classList.remove('selected-color-style');
    });
      // On hover (mouseenter) - change to alternate image
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src);
    img.setAttribute('src', './assets/image/product/women-pant.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});
// newArrival product 8 
document.querySelectorAll('.newArrivaProduct-eight').forEach(product => {
  const img = product.querySelector('.productImage img');

  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/GirlsFormalshirts.webp');
    product.querySelector('.newArrivaProduct-eight .soldout-btn').classList.add('soldout-btn-hidden');

  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
    product.querySelector('.newArrivaProduct-eight .soldout-btn').classList.add('soldout-btn-hidden');

  });
});

//  bestSellers product 3 

document.querySelectorAll('.bestSellersProduct-3').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const redColor = product.querySelector('.selected-color-red');
  const yellowColor = product.querySelector('.selected-color-yellow');
  // red-color
  product.querySelector('.red-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/shortSleeveShirt.webp');
    redColor.classList.add('selected-color-style');
    yellowColor.classList.remove('selected-color-style');
  });
  // yellow-color
  product.querySelector('.yellow-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/TheDistinguishing.webp');
    redColor.classList.remove('selected-color-style');
    yellowColor.classList.add('selected-color-style');
  });

  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/TheDistinguishing.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});
// section special product-1
document.querySelectorAll('.special-product-1').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const plumColor = product.querySelector('.selected-color-plum');
  const greenColor = product.querySelector('.selected-color-green');
  const blackColor = product.querySelector('.selected-color-black');
  // green-color
  product.querySelector('.green-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/manJaket.webp');
    greenColor.classList.add('selected-color-style');
    plumColor.classList.remove('selected-color-style');
    blackColor.classList.remove('selected-color-style');
  });
  // plum-color
  product.querySelector('.plum-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/blue-women-shirt.webp');
    plumColor.classList.add('selected-color-style');
    greenColor.classList.remove('selected-color-style');
    blackColor.classList.remove('selected-color-style');
  });
  // black-color
  product.querySelector('.black-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/PoloOriginal-shirts.webp');
    blackColor.classList.add('selected-color-style');
    greenColor.classList.remove('selected-color-style');
    plumColor.classList.remove('selected-color-style');
  });
  // On hover (mouseenter) - change to alternate image
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src);
    img.setAttribute('src', './assets/image/product/blue-women-shirt.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});

// section special product-2
document.querySelectorAll('.special-product-2').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const grayColor = product.querySelector('.selected-color-gray');
  const blackColor = product.querySelector('.selected-color-black');
  // gray-color
  product.querySelector('.gray-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/women-pant.webp');
    blackColor.classList.remove('selected-color-style');
    grayColor.classList.add('selected-color-style');
  });
  // black-color
  product.querySelector('.black-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/LumberjackShirt.webp');
    blackColor.classList.add('selected-color-style');
    grayColor.classList.remove('selected-color-style');
  });
    // On hover (mouseenter) - change to alternate image
    img.addEventListener('mouseenter', () => {
      img.setAttribute('data-original-src' , img.src);
      img.setAttribute('src', './assets/image/product/LumberjackShirt.webp');
    });
  
    // On mouse leave - restore original image
    img.addEventListener('mouseleave', () => {
      img.setAttribute('src', img.getAttribute('data-original-src'));
    });
});

//  newArrival product 3
document.querySelectorAll('.newArrivaProduct-three').forEach(product => {
  const img = product.querySelector('.productImage img');

  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/underShirt.webp');
    product.querySelector('.newArrivaProduct-three .soldout-btn').classList.add('soldout-btn-hidden');

  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
    product.querySelector('.newArrivaProduct-three .soldout-btn').classList.add('soldout-btn-hidden');

  });
});
// fashion product 
document.querySelectorAll('.product-three-fashion').forEach(product => {
  const img = product.querySelector('.productImage img');

  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/GranddadShirt.webp');
    product.querySelector('.product-three-fashion .soldout-btn').classList.add('soldout-btn-hidden');

  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));

  });
});
// fashion product four
document.querySelectorAll('.product-four-fashion').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const orangeColor = product.querySelector('.selected-color-orange');
  const pinkColor = product.querySelector('.selected-color-pink');
  const redColor = product.querySelector('.selected-color-red');
  // orange-color
  product.querySelector('.orange-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/TheDistinguishing.webp');
    orangeColor.classList.add('selected-color-style');
    pinkColor.classList.remove('selected-color-style');
    redColor.classList.remove('selected-color-style');
  });
  // pink-color
  product.querySelector('.pink-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/Stiff-folded-collar.webp');
    pinkColor.classList.add('selected-color-style');
    orangeColor.classList.remove('selected-color-style');
    redColor.classList.remove('selected-color-style');
  });
  // red-color
  product.querySelector('.red-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/Tunic-shirt-For-Girl.webp');
    redColor.classList.add('selected-color-style');
    pinkColor.classList.remove('selected-color-style');
    orangeColor.classList.remove('selected-color-style');
  });
  // On hover (mouseenter) - change to alternate image
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src);
    img.setAttribute('src', './assets/image/product/Stiff-folded-collar.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});
// fashion product five
document.querySelectorAll('.product-five-fashion').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const blueColor = product.querySelector('.selected-color-blue');
  const redColor = product.querySelector('.selected-color-red');
  const greenColor = product.querySelector('.selected-color-green');
  // blue-color
  product.querySelector('.blue-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/blue-women-shirt.webp');
    blueColor.classList.add('selected-color-style');
    redColor.classList.remove('selected-color-style');
    greenColor.classList.remove('selected-color-style');
  });
  // red-color
  product.querySelector('.red-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/PoloOriginal-shirts.webp');
    redColor.classList.add('selected-color-style');
    greenColor.classList.remove('selected-color-style');
    blueColor.classList.remove('selected-color-style');
  });
  // green-color
  product.querySelector('.green-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/women-pant.webp');
    greenColor.classList.add('selected-color-style');
    blueColor.classList.remove('selected-color-style');
    redColor.classList.remove('selected-color-style');
  });
  // On hover (mouseenter) - change to alternate image
  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src);
    img.setAttribute('src', './assets/image/product/PoloOriginal-shirts.webp');
  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));
  });
});
// women-fashion-product-4
document.querySelectorAll('.women-fashion-product-4').forEach(product =>{
  const img = product.querySelector('.productImage img');
  const pinkColor = product.querySelector('.selected-color-pink');
  const blueColor = product.querySelector('.selected-color-blue');
  // pink-color
  product.querySelector('.pink-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/TheDistinguishing.webp');
    blueColor.classList.remove('selected-color-style');
    pinkColor.classList.add('selected-color-style');
  });
  // blue-color
  product.querySelector('.blue-color').addEventListener('click' , () =>{
    img.setAttribute('src','./assets/image/product/EpauletteShirt.webp');
    blueColor.classList.add('selected-color-style');
    pinkColor.classList.remove('selected-color-style');
  });
    // On hover (mouseenter) - change to alternate image
    img.addEventListener('mouseenter', () => {
      img.setAttribute('data-original-src' , img.src);
      img.setAttribute('src', './assets/image/product/EpauletteShirt.webp');
    });
  
    // On mouse leave - restore original image
    img.addEventListener('mouseleave', () => {
      img.setAttribute('src', img.getAttribute('data-original-src'));
    });
});
// women fashion product five
document.querySelectorAll('.women-fashion-product-five').forEach(product => {
  const img = product.querySelector('.productImage img');

  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/Stiff-folded-collar.webp');

  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));

  });
});
// women fashion product six
document.querySelectorAll('.women-fashion-product-six').forEach(product => {
  const img = product.querySelector('.productImage img');

  img.addEventListener('mouseenter', () => {
    img.setAttribute('data-original-src' , img.src)
    img.setAttribute('src', './assets/image/product/GirlsFormalshirts.webp');
    product.querySelector('.women-fashion-product-six .soldout-btn').classList.add('soldout-btn-hidden');

  });

  // On mouse leave - restore original image
  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', img.getAttribute('data-original-src'));

  });
});
// latest news swiper
const swiperNews = new Swiper(".swiper-news", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  speed: 2000,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    1440:{slidesPerView: 3}
  }
});

