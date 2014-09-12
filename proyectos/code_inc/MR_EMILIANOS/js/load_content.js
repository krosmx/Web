(function(){
  if( $("#carousel").length >0 )
    loadCarousel();
  function loadCarousel(){
    var info= {
      "carousel": $("#carousel").data("type")

    },
    carouselElements = [],
    listElements = [];
    $.ajax({
     url:"php/getImages.php",
     dataType:"json",
     data: info,
     success: function(data, status, xhr){
      if(typeof data.response !=undefined &&  data.response)
        for(var temp= 0, total = data.files.length; temp<total; temp++){
          var activeElement = (temp === 0)?"active" : "";

          listElements[temp]= '<li data-target="#carousel" data-slide-to="'+temp+'" class="'+activeElement+'"></li>';

          carouselElements[temp] = "<div class='"+ activeElement +" item'>"+
          "<div class='main-title-carousel'>Enjoy with us!</div>"+
          "<img src='php/"+escape(data.files[temp])+"' alt='Follow us!' />" +
          "</div>";
        }
        $('#carousel .carousel-indicators').append( listElements.join(' ') );
        $("#carousel .carousel-inner").append( carouselElements.join(' ') );
      }
    });


    $('#carousel').carousel({
      interval : 2000
    });

    $(window).on("resize scroll", function(){
      var heightBack = $(".container-section").css("height");
      $(".background-phrasal").css("height", heightBack );
    });

  }
})();
