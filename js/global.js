// Expandable nav search bar

var navSearchContainer = $(".nav-search-container");
var navSearchForm = $(".nav-search-container > form");
var closeSearchNav = $(".nav-search-close-btn");
var navFormInput1 = $(".nav-search-container> form .input-1");
var navFormInput2 = $(".nav-search-container> form .input-2");
var navFormSubmitText = $(".nav-search-submit-label");

var navSearchShow = false;

navSearchForm.click(function(){
    navSearchContainer.css("width","98%");
    navSearchContainer.css("left","0");
    navSearchForm.css("width","100%");
    closeSearchNav.css("display","block")
    navFormInput1.css("display","none");
    navFormInput2.css("display","block");
    navFormSubmitText.css("display","block");

   if(!navSearchShow){
    navFormInput2[0].focus();
   }
   navSearchShow = true;
});

closeSearchNav.click(function(){
    navSearchContainer.css("width","");
    navSearchContainer.css("left","");
    navSearchForm.css("width","");
    closeSearchNav.css("display","none")
    navFormInput1.css("display","block");
    navFormInput2.css("display","none");
    navFormSubmitText.css("display","none");
    navSearchShow = false;
})


///////////////////
// recommended jobs slick causel
//////////////////

$(".recommended-jobs-owl-carousel-container").slick({
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
    centerPadding: '0',
    pauseOnHover:true,
    dots:false,
    responsive: [
        {
          breakpoint: 1125,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
})