$( document ).ready( function () {
  // ==== full scroll
  $( "#pagepiling" ).pagepiling( {
    menu: null,
    direction: "vertical",
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: false,
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,

    //events
    onLeave: function ( index, nextIndex, direction ) { },
    afterLoad: function ( anchorLink, index ) { },
    afterRender: function () { }
  } );

  // couter
  $( ".count" ).each( function () {
    $( this )
      .prop( "Counter", 500 )
      .animate(
        {
          Counter: $( this ).text()
        },
        {
          duration: 4000,
          easing: "swing",
          step: function ( now ) {
            $( this ).text( Math.ceil( now ) );
          }
        }
      );
  } );
  //  slider about
  $( ".slider__about" ).slick( {
    slidesToScroll: 1,
    cssEase: "ease",
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true
  } );
  //  slider client
  $( ".clients__slider" ).slick( {
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true
  } );
  //  slider parnters
  $( ".partners__slider" ).slick( {
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true
  } );
} );
