$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode:'masonry',
    masonry: {
      columnWidth: 300,
      gutter:30,
      isFitWidth: true,
    }
  });

  //grid options
$(function(){
  let titleBar = $('.grid-item');
  let titleTextBottom = $('.title-text-bottom');
  let titleTextTop = $('.title-text-top');
  let titleBarHeight = titleBar.height();
  //let titleBarWidth = titleBar.width();

  let titleTextTopHeight = titleBarHeight * 0.35;
  let titleTextBottomHeight = titleBarHeight * 0.32;

  titleTextBottom.css('width',titleTextBottomHeight);
  titleTextTop.css('width',titleTextTopHeight);

  $('.grid-item').on({
    mouseenter: function(){
    let titleTextBottomHeight2 = titleBarHeight * 0.9;
    $('.title-bar .title-text-bottom-height2').css('width',titleTextBottomHeight2);

    let num = $(this).index();
    $('.grid-text').eq(num).text('BOX HOVER');
    $('.header').text('BOX HOVER');
    },
    mouseleave:function(){
      let num = $(this).index();
      $('.grid-text').eq(num).text('BOX');
      $('.header').text('DEFAULT');
    }
  });
  $('.title-bar').on({
    mouseenter: function(){
      $('.title-text-bottom-height2').css('width','100px');
      let num = $(this).parent().index();
      $('.grid-text').eq(num).text('TITLE HOVER');
      $('.header').text('TITLE HOVER');
    },
    mouseleave: function(){
      let titleTextBottomHeight2 = titleBarHeight * 0.87;
      $('.title-bar .title-text-bottom-height2').css('width',titleTextBottomHeight2);
      let num = $(this).parent().index();
      $('.grid-text').eq(num).text('BOX HOVER');
      $('.header').text('BOX HOVER');
    }
  });


});

//header options
$(function(){
  $('.header')
});
