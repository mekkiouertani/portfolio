AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  offset: -100,
});

jQuery(function ($) {
  "use strict";
  loader();
  siteMenuClone();
  mobileToggleClick();
  onePageNavigation();
  siteIstotope();
  portfolioItemClick();
  owlCarouselPlugin();
  floatingLabel();
  scrollWindow();
  counter();
  jarallaxPlugin();
  /* contactForm(); */
  stickyFillPlugin();
  animateReveal();
});

var siteIstotope = function () {
  var $container = $("#posts").isotope({
    itemSelector: ".item",
    isFitWidth: true,
  });

  $(window).resize(function () {
    $container.isotope({
      columnWidth: ".col-sm-3",
    });
  });

  $container.isotope({ filter: "*" });

  $("#filters").on("click", "a", function (e) {
    e.preventDefault();
    var filterValue = $(this).attr("data-filter");
    $container.isotope({ filter: filterValue });
    $("#filters a").removeClass("active");
    $(this).addClass("active");
  });

  $container
    .imagesLoaded()
    .progress(function () {
      $container.isotope("layout");
    })
    .done(function () {
      $(".gsap-reveal-img").each(function () {
        var html = $(this).html();
        $(this).html(
          '<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">' +
            html +
            "</div></div>"
        );
      });

      var controller = new ScrollMagic.Controller();

      var revealImg = $(".gsap-reveal-img");

      if (revealImg.length) {
        var i = 0;
        revealImg.each(function () {
          var cover = $(this).find(".cover"),
            revealContent = $(this).find(".reveal-content"),
            img = $(this).find(".reveal-content img");

          var tl2 = new TimelineMax();

          setTimeout(function () {
            tl2;
            tl2.set(img, { scale: "2.0", autoAlpha: 1 }).to(cover, 1, {
              marginLeft: "0",
              ease: Expo.easeInOut,
              onComplete() {
                tl2.set(revealContent, { autoAlpha: 1 });
                tl2.to(cover, 1, { marginLeft: "102%", ease: Expo.easeInOut });
                tl2.to(img, 2, { scale: "1.0", ease: Expo.easeOut }, "-=1.5");
              },
            });
          }, i * 700);

          var scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: "0%",
            reverse: false,
            offset: "-300%",
          })
            .setTween(tl2)
            .addTo(controller);

          i++;
        });
      }
    });

  $(".js-filter").on("click", function (e) {
    e.preventDefault();
    $("#filters").toggleClass("active");
  });
};
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Optional: remove class if you want it to disappear when not in view
        }
      });
    },
    {
      threshold: 0.1, // Adjust this value to trigger animation earlier or later
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

var loader = function () {
  setTimeout(function () {
    TweenMax.to(".site-loader-wrap", 1, {
      marginTop: 50,
      autoAlpha: 0,
      ease: Power4.easeInOut,
    });
  }, 10);
  $(".site-loader-wrap").delay(200).fadeOut("slow");
  $("#unslate_co--overlayer").delay(200).fadeOut("slow");
};

var siteMenuClone = function () {
  setTimeout(function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-inner");
    });

    var counter = 0;
    $(".unslate_co--site-mobile-menu .has-children").each(function () {
      var $this = $(this);

      $this.prepend('<span class="arrow-collapse collapsed">');

      $this.find(".arrow-collapse").attr({
        "data-toggle": "collapse",
        "data-target": "#collapseItem" + counter,
      });

      $this.find("> ul").attr({
        class: "collapse",
        id: "collapseItem" + counter,
      });

      counter++;
    });
  }, 1000);

  $("body").on("click", ".arrow-collapse", function (e) {
    var $this = $(this);
    if ($this.closest("li").find(".collapse").hasClass("show")) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
    e.preventDefault();
  });

  $(window).resize(function () {
    var $this = $(this),
      w = $this.width();

    if (w > 768) {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
      }
    }
  });

  $(".js-burger-toggle-menu").click(function (e) {
    e.preventDefault();
    if ($("body").hasClass("offcanvas")) {
      $("body").removeClass("offcanvas");
      $(".js-burger-toggle-menu").removeClass("open");
    } else {
      $("body").addClass("offcanvas");
      $(".js-burger-toggle-menu").addClass("open");
    }
  });
};

// var siteIstotope = function() {

// }

var owlCarouselPlugin = function () {
  $(".testimonial-slider").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 20,
    margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: [
      '<span class="icon-keyboard_arrow_left">',
      '<span class="icon-keyboard_arrow_right">',
    ],

    responsive: {
      400: {
        stagePadding: 20,
        margin: 10,
      },
      600: {
        stagePadding: 100,
        margin: 50,
      },
    },
  });
  owlSingleSlider();

  if ($(".logo-slider").length) {
    $(".logo-slider").owlCarousel({
      center: false,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      autoplayHoverPause: true,
      dots: false,
      nav: false,
      responsive: {
        400: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
};

var owlSingleSlider = function () {
  if ($(".single-slider").length) {
    $(".single-slider").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1500,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      nav: true,
      navText: [
        '<span class="icon-keyboard_arrow_left">',
        '<span class="icon-keyboard_arrow_right">',
      ],

      responsive: {
        400: {
          stagePadding: 0,
          margin: 0,
        },
        600: {
          stagePadding: 0,
          margin: 0,
        },
      },
    });
  }
};

var floatingLabel = function () {
  $(".form-control").on("input", function () {
    var $field = $(this).closest(".form-group");
    if (this.value) {
      $field.addClass("field--not-empty");
    } else {
      $field.removeClass("field--not-empty");
    }
  });
};

// scroll
var scrollWindow = function () {
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var $w = $(this),
      st = $w.scrollTop(),
      navbar = $(".unslate_co--site-nav");
    // sd = $('.js-scroll-wrap');

    if (st > 150) {
      if (!navbar.hasClass("scrolled")) {
        navbar.addClass("scrolled");
      }
    }
    if (st < 150) {
      if (navbar.hasClass("scrolled")) {
        navbar.removeClass("scrolled sleep");
      }
    }
    if (st > 350) {
      if (!navbar.hasClass("awake")) {
        navbar.addClass("awake");
      }

      // hide / show on scroll
      if (st > lastScrollTop) {
        // downscroll code
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      } else {
        // upscroll code
        navbar.addClass("awake");
      }
      lastScrollTop = st;
    }
    if (st < 350) {
      if (navbar.hasClass("awake")) {
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      }
    }
  });
};

var counter = function () {
  $(".section-counter").waypoint(
    function (direction) {
      if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
        var comma_separator_number_step =
          $.animateNumber.numberStepFactories.separator(",");
        $(this.element)
          .find(".number-counter")
          .each(function () {
            var $this = $(this),
              num = $this.data("number");
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              {
                easing: "swing",
                duration: 3000,
              }
            );
          });
      }
    },
    { offset: "95%" }
  );
};

var mobileToggleClick = function () {
  $(".js-menu-toggle").click(function (e) {
    e.preventDefault();

    if ($("body").hasClass("offcanvas")) {
      $("body").removeClass("offcanvas");
      $(".js-menu-toggle").removeClass("active");
      if ($(".js-burger-toggle-menu").length) {
        $(".js-burger-toggle-menu").removeClass("open");
      }
    } else {
      $("body").addClass("offcanvas");
      $(".js-menu-toggle").addClass("active");
      if ($(".js-burger-toggle-menu").length) {
        $(".js-burger-toggle-menu").addClass("open");
      }
    }
  });

  // click outisde offcanvas
  $(document).mouseup(function (e) {
    var container = $(".unslate_co--site-mobile-menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $("body").find(".js-menu-toggle").removeClass("active");

        $("body").find(".js-burger-toggle-menu").removeClass("open");
      }
    }
  });
};

// navigation
var onePageNavigation = function () {
  var navToggler = $(".site-menu-toggle");
  $("body").on(
    "click",
    ".unslate_co--site-nav .site-nav-ul li a[href^='#'], .smoothscroll[href^='#'], .unslate_co--site-mobile-menu .site-nav-wrap li a[href^='#']",
    function (e) {
      e.preventDefault();

      var $body = $("body");
      if ($body.hasClass("offcanvas")) {
        $body.removeClass("offcanvas");
        $("body").find(".js-burger-toggle-menu").removeClass("open");
      }

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    }
  );
};

// load ajax page
// Carica la pagina AJAX
var portfolioItemClick = function () {
  $(".ajax-load-page").on("click", function (e) {
    var id = $(this).data("id"),
      href = $(this).attr("href");

    // Rimuove completamente il contenuto precedente
    $("#portfolio-single-holder").empty();

    TweenMax.to(".loader-portfolio-wrap", 1, {
      top: "-50px",
      autoAlpha: 1,
      display: "block",
      ease: Power4.easeOut,
    });

    // Scorre la pagina fino alla sezione del portfolio
    $("html, body").animate(
      {
        scrollTop: $("#portfolio-section").offset().top - 50,
      },
      700,
      "easeInOutExpo"
    );

    setTimeout(function () {
      loadPortfolioSinglePage(id, href);
    }, 100);

    e.preventDefault();
  });

  // Chiudi il post del portfolio
  $("body").on("click", ".js-close-portfolio", function () {
    setTimeout(function () {
      // Scorre la pagina fino alla sezione del portfolio dopo un breve ritardo
      $("html, body").animate(
        {
          scrollTop: $("#portfolio-section").offset().top - 50,
        },
        700,
        "easeInOutExpo"
      );
    }, 200);

    // Mostra di nuovo il contenuto del portfolio
    TweenMax.set(".portfolio-wrapper", {
      visibility: "visible",
      height: "auto",
    });
    TweenMax.to(".portfolio-single-inner", 1, {
      marginTop: "50px",
      opacity: 0,
      display: "none",
      onComplete() {
        // Rimuove il contenuto del portfolio chiuso
        $("#portfolio-single-holder").empty();

        TweenMax.to(".portfolio-wrapper", 1, {
          marginTop: "0px",
          autoAlpha: 1,
          position: "relative",
        });
      },
    });
  });
};

$(document).ajaxStop(function () {
  setTimeout(function () {
    TweenMax.to(".loader-portfolio-wrap", 1, {
      top: "0px",
      autoAlpha: 0,
      ease: Power4.easeOut,
    });
  }, 400);
});

// Carica la pagina singola del portfolio
var loadPortfolioSinglePage = function (id, href) {
  $.ajax({
    url: href,
    type: "GET",
    success: function (html) {
      TweenMax.to(".portfolio-wrapper", 1, {
        marginTop: "50px",
        autoAlpha: 0,
        visibility: "hidden",
        onComplete() {
          TweenMax.set(".portfolio-wrapper", { height: 0 });
        },
      });

      var pSingleHolder = $("#portfolio-single-holder");

      var getHTMLContent = $(html).find(".portfolio-single-wrap").html();

      // Rimuove il contenuto precedente prima di aggiungere il nuovo
      pSingleHolder.empty();

      pSingleHolder.append(
        '<div id="portfolio-single-' +
          id +
          '" class="portfolio-single-inner"><span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center"><span class="close-portfolio-label">Ritorna al portfolio </span><span class="icon-close2 wrap-icon-close"></span></span>' +
          getHTMLContent +
          "</div>"
      );

      setTimeout(function () {
        owlSingleSlider();
      }, 10);

      setTimeout(function () {
        TweenMax.set(".portfolio-single-inner", {
          marginTop: "100px",
          autoAlpha: 0,
          display: "none",
        });
        TweenMax.to(".portfolio-single-inner", 0.5, {
          marginTop: "0px",
          autoAlpha: 1,
          display: "block",
          onComplete() {
            TweenMax.to(".loader-portfolio-wrap", 1, {
              top: "0px",
              autoAlpha: 0,
              ease: Power4.easeOut,
            });
          },
        });
      }, 700);
    },
  });

  return false;
};

var jarallaxPlugin = function () {
  $(".jarallax").jarallax({
    speed: 0.2,
  });
  jarallax(document.querySelectorAll(".jarallax-video"), {
    speed: 0.2,
    videoSrc: "https://www.youtube.com/watch?v=mwtbEGNABWU",
    videoStartTime: 8,
    videoEndTime: 70,
  });
};

$(document).ready(function () {
  var contactForm = function () {
    if ($("#contactForm").length > 0) {
      $("#contactForm").validate({
        rules: {
          name: "required",
          email: {
            required: true,
            email: true,
          },
          message: {
            required: true,
            minlength: 5,
          },
        },
        messages: {
          name: "Si prega di inserire il nome",
          email: "Si prega di inserire un indirizzo mail valido.",
          message: "Si prega di inserire un messaggio",
        },
        errorElement: "span",
        errorLabelContainer: ".form-error",
        submitHandler: function (form) {
          var $submit = $(".submitting"),
            waitText = "Submitting...";

          $.ajax({
            type: "POST",
            url: "https://portfolio-send-email-2994007de98d.herokuapp.com/php/send-email.php",
            data: $(form).serialize(),
            beforeSend: function () {
              $submit.css("display", "block").text(waitText);
            },
            success: function (msg) {
              console.log("Response from server:", msg); // Aggiunto per debug
              if (msg == "OK") {
                $("#form-message-warning").hide();
                setTimeout(function () {
                  $("#contactForm").fadeOut();
                }, 1000);
                setTimeout(function () {
                  $("#form-message-success").fadeIn();
                }, 1400);
              } else {
                console.error("Error message from server:", msg); // Aggiunto per debug
                $("#form-message-warning").html(msg);
                $("#form-message-warning").fadeIn();
                $submit.css("display", "none");
              }
            },
            error: function (xhr, status, error) {
              console.error("Error: ", error); // Aggiunto per debug
              console.error("Status: ", status); // Aggiunto per debug
              console.dir(xhr); // Aggiunto per debug
              $("#form-message-warning").html(
                "Qualcosa è andato storto. Si prega di riprovare."
              );
              $("#form-message-warning").fadeIn();
              $submit.css("display", "none");
            },
          });
        },
      });
    }
  };

  contactForm();
});

var stickyFillPlugin = function () {
  var elements = document.querySelectorAll(".unslate_co--sticky");
  Stickyfill.add(elements);
};

var animateReveal = function () {
  var controller = new ScrollMagic.Controller();

  var greveal = $(".gsap-reveal");

  // gsap reveal
  $(".gsap-reveal").each(function () {
    $(this).append('<span class="cover"></span>');
  });
  if (greveal.length) {
    var revealNum = 0;
    greveal.each(function () {
      var cover = $(this).find(".cover");

      var tl = new TimelineMax();

      setTimeout(function () {
        tl.fromTo(
          cover,
          2,
          { skewX: 0 },
          { xPercent: 101, transformOrigin: "0% 100%", ease: Expo.easeInOut }
        );
      }, revealNum * 0);

      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "0%",
        reverse: false,
        offset: "-300%",
      })
        .setTween(tl)
        .addTo(controller);

      revealNum++;
    });
  }

  // gsap reveal hero
  $(".gsap-reveal-hero").each(function () {
    var html = $(this).html();
    $(this).html(
      '<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">' +
        html +
        "</span></span>"
    );
  });
  var grevealhero = $(".gsap-reveal-hero");

  if (grevealhero.length) {
    var heroNum = 0;
    grevealhero.each(function () {
      var cover = $(this).find(".cover"),
        revealContent = $(this).find(".reveal-content");

      var tl2 = new TimelineMax();

      setTimeout(function () {
        tl2.to(cover, 1, {
          marginLeft: "0",
          ease: Expo.easeInOut,
          onComplete() {
            tl2.set(revealContent, { x: 0 });
            tl2.to(cover, 1, { marginLeft: "102%", ease: Expo.easeInOut });
          },
        });
      }, heroNum * 0);

      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "0%",
        reverse: false,
        offset: "-300%",
      })
        .setTween(tl2)
        .addTo(controller);

      heroNum++;
    });
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const word = "Mekki Ouertani";
  const textElement = document.getElementById("text");
  const cursorElement = document.getElementById("cursor");
  const iconElement = document.getElementById("icon");
  let currentWord = "";
  let isDeleting = false;
  let hideCursor = false;
  let isEnlarging = false;
  let timer;

  function typingEffect() {
    if (isDeleting) {
      currentWord = word.substring(0, currentWord.length - 1);
    } else {
      currentWord = word.substring(0, currentWord.length + 1);
    }

    textElement.textContent = currentWord;
    cursorElement.style.visibility = hideCursor ? "hidden" : "visible";

    let typingSpeed = isDeleting ? 200 : 500;

    if (!isDeleting && currentWord === word) {
      typingSpeed = 2000; // Pause when the word is fully written
      isDeleting = true;
    } else if (isDeleting && currentWord === "") {
      isDeleting = false;
      hideCursor = true;
      isEnlarging = true;
      iconElement.classList.add("enlarge");

      setTimeout(() => {
        hideCursor = false;
        isEnlarging = false;
        iconElement.classList.remove("enlarge");
        typingEffect();
      }, 1500); // Pause for 1.5 seconds when the last letter is deleted
      return;
    }

    timer = setTimeout(typingEffect, typingSpeed);
  }

  typingEffect();
  /*   document
    .getElementById("show-phone")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Previene il comportamento predefinito del link
      document.getElementById("phone-number").style.display = "block"; // Mostra il numero di telefono
      this.style.display = "none"; // Nasconde il link "Clicca per mostrare"
    }); */

  // Clear timeout if needed
  window.onbeforeunload = function () {
    clearTimeout(timer);
  };
});
$(document).ready(function () {
  // Init Isotope
  var $grid = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
    transitionDuration: "0.5s", // Transition duration
  });

  // Filter items on button click
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // Fix for layout issues
  $grid.imagesLoaded().progress(function () {
    $grid.isotope("layout");
  });
});

document.addEventListener("scroll", function () {
  var footer = document.getElementById("main-footer");
  var scrollPosition = window.scrollY + window.innerHeight;
  var pageHeight = document.documentElement.scrollHeight;

  var distanceFromBottom = window.innerHeight * 0.15;

  if (window.innerWidth <= 992) {
    // Adjust the condition for smaller screens and tablets
    distanceFromBottom = window.innerHeight * 0.3; // Increase the visibility threshold for mobile and tablets
  }

  if (scrollPosition >= pageHeight - distanceFromBottom) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
});
