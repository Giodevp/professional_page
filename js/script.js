const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalimgportfolio = document.querySelector(".img-modal-js")

$portfolio.addEventListener('click' , (e) => {
   console.log(e.target.classList);
   if(e.target.classList.contains('img-btn-modal-js')){
       //SRC
       let urlimg =  e.target.attributes[0].nodeValue
       //Add modal
       $modalimgportfolio.src = urlimg
   }
})

   // Activate  scrollspy on the main nav element
window.addEventListener('DOMContentLoaded', (event) => {
  
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 700,
    });
  }
});
