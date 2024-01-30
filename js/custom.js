// Aos_animation
AOS.init({
  once: true
});

// Slick_slider

    $('.slider_wrapper').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: '0px',
                }
              }
          ]
    });
  

  // testimonial_slider

    $('.testimonial_slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                }
              },
            {
              breakpoint: 767,
              settings: {
              }
            },
            {
              breakpoint: 480,
              settings: {
              }
            }
          ]
    });
    // voipservices-slider
  $('.voip_services-slider').slick({
    slidesToShow: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1800,
        settings: {
        }
      }
      ]
  });


  // 
  $(document).ready(function() {
      $('.hero_content').addClass("text_animate");
    });

  //
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 300) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("sticky_header");
    }
    else {
      $("header").removeClass("sticky_header");
  }
}); //missing ); 

// playbutton
var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  var x = document.getElementById("videowrap");
  if (video.paused == true) {
    // Play the video
    video.play();
    x.style.display = "none";

    // Update the button text to 'Pause'
    playButton.innerHTML = "<li class='fa'>&#xf04c;</li><br>";
  } else {
    // Pause the video
    video.pause();
    x.style.display = "block";

    // Update the button text to 'Play'
    playButton.innerHTML = "<li class='fa'>&#xf04b;</li><br>";
  }
});

// Fullslider
$('.full_slider').slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '320px',
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        centerPadding: '200px',
      }
    },
    {
      breakpoint: 1799,
      settings: {
        slidesToShow: 3,
        centerPadding: '260px',
      }
    },
    {
      breakpoint: 1699,
      settings: {
        slidesToShow: 3,
        centerPadding: '200px',
      }
    },
      {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            centerPadding: '50px',
          }
        },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        }
      }
    ]
});