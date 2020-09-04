
var flick = (function () {

  const swiperParams = {
    swiperOne: {
      slidesPerView: 1,
    },
    swiperTwo: {
      slidesPerView: 1,
      ps_settings: {
        initWhen: 1200,
      }
    },
    swiperThree: {
      slidesPerView: 2,
      ps_settings: {
        nav: {
          appendTo: ['.arrow-nav'],
        }
      }
    },
    swiperFour: {
      slidesPerView: 1,
      ps_settings: {
        nav: {
          appendTo: ['.prev-arrow', '.next-arrow'],
          prevHtml: 'P',
          nextHtml: 'N'
        }
      }
    },
    swiperFive : {
      ps_settings : {
        assignEle : ['#swiperFive>ul', '#swiperFive>ul>li']
      }
    }
  }
  populateSwiper(swiperParams);
})();
