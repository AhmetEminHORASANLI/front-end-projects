/* Modal */
$(function() {
    // Auto play modal video
    $(".video").click(function () {
      var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  });


/*Write it from SmoothScroll github page*/ 
var scroll = new SmoothScroll('a[href*="#"]');

/*Write it from ScroolReveal github page*/


window.sr = ScrollReveal();
sr.reveal('.main-content',{
  duration:2000
});

sr.reveal('#features',{
  duration:3000
});

sr.reveal('.historyLeft',{
  duration:3000,
  origin:'left',
  viewFactor:0.2,
  distance:'60px'
});

sr.reveal('.historyRight',{
  duration:3000,
  origin:'right',
  viewFactor:0.2,
  distance:'60px'
});

sr.reveal('.team1',{
  duration:3000,
  origin:'left',
  viewFactor:0.2,
  distance:'60px'
});

sr.reveal('.team2',{
  duration:3000,
  delay:500,
  origin:'left',
  viewFactor:0.2,
  distance:'60px'
});

sr.reveal('.team3',{
  duration:3000,
  delay:1000,
  origin:'left',
  viewFactor:0.2,
  distance:'60px'
});

sr.reveal('.team4',{
  duration:3000,
  delay:1500,
  origin:'left',
  viewFactor:0.2,
  distance:'60px'
});