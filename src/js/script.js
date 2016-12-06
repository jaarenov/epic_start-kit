$(document).ready(function(){
  // $('blockquote').each(
  //   function(){
  //     // console.log( $(this).text()  );
  //     $(this).prepend('232fd ' +  $(this).index() + ' ' );
  //   }
  // );


  // $(document).on('click', '.show-more', function(event){
  //   event.preventDefault();
  //   $( $(this).attr('href') ).slideToggle();
  // });
  //
  // $('#root').append('<article class="blog-post"><h1>header add js</h1><a href="#post-id-124" class="show-more">Show-more</a><div id="post-id-124"class="blog-post__moretext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nam.</div></article>');


//   $('#gallery-thumbs').owlCarousel({
//     items: 3,
//     center: true,
//     loop: true,
//     responsive: {
//       680: {
//         items: 4,
//       },
//       800: {
//         items: 5,
//       }
//     }
//
//   }) ;
//
//
//   var mainImageUrl = $('#gallery-start-photo').attr('href');
//   $('#gallery-main-pict').append('<img src="'+mainImageUrl+'" alt="">');
//
//
//
//   $('#gallery-thumbs a').on('click', function(e){
//     e.preventDefualt();
//     var imageUrl = $(this).attr('href');
//     $('#gallery-main-pict').hrml('<img src="'+imageUrl+'" alt="">');
//   });
//

$("#owl-demo").owlCarousel({

    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});

});
