let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
      $('.mask-phone').mask('+38 0(99)-999-99-99');
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next"
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
            },
            567: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }

      });
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },


  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },
  hoverTab: function (el, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    el.currentTarget.className += " active";
  },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      let langToggle = document.querySelector('.lang-select-wrapper') !== null;
if (langToggle) {
    (document).querySelector('.lang-select-wrapper').addEventListener('click', function() {
        this.querySelector('.lang-select').classList.toggle('open');
        for (const option of document.querySelectorAll(".lang-option")) {
            option.addEventListener('click', function() {

                if (!this.classList.contains('selected')) {
                    this.parentNode.querySelector('.lang-option.selected').classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.lang-select').querySelector('.lang-select__trigger span').textContent = this.textContent;
                }
            })
        }
        window.addEventListener('click', function(e) {
            const select1 = document.querySelector('.lang-select')
            if (!select1.contains(e.target)) {
                select1.classList.remove('open');
            }
        });
    })
}
  }
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {

      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
        $(document).on('click', '.scroll-to-top i', function () {
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
      });
        $(document).on('click', '.scroll-down i', function () {
            $('html, body').animate({
                scrollTop: $(this).closest("section").next().offset().top - 90
             }, "slow");
      });

  }
};


jQuery(function () {
  front.init();
  modal.init();
    
});

// $(document).ready(function() {
//     $(".accordion__item").on("click", function(e) {
//     e.preventDefault();
//         if ($(this).hasClass("active")) {
//         $(this).removeClass("active");
//         $(this)
//             .find(".accordion__content")
//             .slideUp(200);
//         } else {
//         $(".accordion__item").removeClass("active");
//         $(this).addClass("active");
//         $(".accordion__content").slideUp(200);
//         $(this)
//             .find(".accordion__content")
//             .slideDown(200);
//         }
//     });
//   });
$(document).ready(function() {
    $(".accordion__item .accordion__button").on("click", function(e) {
    e.preventDefault();
        if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
        $(this).parent().find(".accordion__content").slideUp(200);
        } else {
        $(".accordion__item").removeClass("active");
        $(this).parent().addClass("active");
        $(".accordion__content").slideUp(200);
        $(this).parent().find(".accordion__content").slideDown(200);
        }
    });
  });
document.body.addEventListener('keyup', function(e) {
  if (e.which === 9) /* tab */ {
    document.body.classList.remove('no-focus-outline');
  }
});




