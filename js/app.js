$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 4,
  arrows:false,
  autoplay:true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows:false,
        autoplay: true,
      }
    },
    {
      breakpoint: 976,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        dots:true,
        autoplay: true,

      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        dots:true

      }
    },
    
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows:false,
        dots:false

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

 
});
	