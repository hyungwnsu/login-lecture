let slides = document.querySelector('.slider');
let slideImg = document.querySelectorAll('.slider li');
let loginBtn = document.querySelector('.secondary_navigation a');

currentIdx = 0;
slideCount = slideImg.length;
prev = document.querySelector('.prev');
next = document.querySelector('.next');
slideWidth =  1240;
slideMargin = 30;
makeClone();
initfunction();
function makeClone(){
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}

function initfunction(){
  slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
  slides.style.left = -(slideWidth + slideMargin) + 'px';
}

next.addEventListener('click', function(){
  if(currentIdx <= slideCount - 1){
    slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`;
  }
  if(currentIdx === slideCount - 1){
    setTimeout(function(){
      slides.style.left = -(slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
});

prev.addEventListener('click', function(){
  console.log(currentIdx);
  if(currentIdx >= 0){
    slides.style.left = -currentIdx * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`;
  }
  if(currentIdx === 0){
    setTimeout(function(){
      slides.style.left = -slideCount * (slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
});




function showSlides(){
  if(currentIdx <= slideCount - 1){
    slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`;
  }
  if(currentIdx === slideCount - 1){
    setTimeout(function(){
      slides.style.left = -(slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
  setTimeout(showSlides, 5000);
}
var interval = setInterval(showSlides(), 3000);

loginBtn.addEventListener("click", () => {
  localStorage.removeItem("id");
})
//로그인 확인용
window.addEventListener("load", function(event) {
  const id = this.localStorage.getItem("id");
  if(id){
    loginBtn.innerText = "로그아웃";
  }else{
    loginBtn.innerText = "로그인";
  }
});