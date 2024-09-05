let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

// Listeners

const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});






        var swiper = new Swiper(".mySwiper", {
          slidesPerGroup: 1,
          loop: true,
          fade: true,
          // grabCursor: true,
          // loopFillGroupWithBlank: true,
          autoplay: {
            delay: 4000, 
            disableOnInteraction: false, 
        },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            868: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1250: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });



        const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const intervalTime = 3000; // Time in milliseconds between slides

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextCarouselItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
}

// Set interval to auto rotate carousel items
let autoCarousel = setInterval(nextCarouselItem, intervalTime);

// Optionally, stop auto-rotation on hover and restart on mouse leave
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoCarousel);
});

carouselContainer.addEventListener('mouseleave', () => {
    autoCarousel = setInterval(nextCarouselItem, intervalTime);
});

// Initialize the carousel
showCarouselItem(currentIndex);

     
  


  document.addEventListener("DOMContentLoaded", function() {
    // Get all nav-link elements
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each nav-link and add click event listener
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Remove 'active' class from all nav-links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked nav-link
        this.classList.add('active');
      });
    });
  });

