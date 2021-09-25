const headerImg = document.querySelector('.header--img');
const section1MainSectionImage = document.querySelector('.section-1--main-container--img');
const ourCreatinsGridElementsImg = document.querySelectorAll('.our-creations-grid--element-img')


window.onresize = (e) => {
  const width = Number(window.innerWidth);

  if (width <= 768) {
    console.log('fdmkdfm')
    for (let i = 0; i < ourCreatinsGridElementsImg.length; i++) {
      ourCreatinsGridElementsImg[i].src = ourCreatinsGridElementsImg[i].src.replace('desktop', 'mobile');
    }
  } else {
    for (let i = 0; i < ourCreatinsGridElementsImg.length; i++) {
      ourCreatinsGridElementsImg[i].src = ourCreatinsGridElementsImg[i].src.replace('mobile', 'desktop');
    }
  }
}