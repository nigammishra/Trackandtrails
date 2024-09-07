document.querySelectorAll('.tab-title').forEach((tab) => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs and contents
      document.querySelectorAll('.tab-title').forEach((tab) => tab.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach((content) => content.classList.remove('active'));
  
      // Add active class to the clicked tab and corresponding content
      this.classList.add('active');
      document.querySelector(`.tab-content[data-tab="${this.dataset.tab}"]`).classList.add('active');
    });
  });
  


  const toggleIcons = document.querySelectorAll('.toggle-icon');

  toggleIcons.forEach((icon) => {
    icon.addEventListener('click', function() {
      const serviceList = this.nextElementSibling;

      if (serviceList.style.height === '0px' || serviceList.style.height === '') {
        serviceList.style.height = serviceList.scrollHeight + 'px'; // Expand the list
        this.textContent = '-'; // Change icon to minus
      } else {
        serviceList.style.height = '0px'; // Collapse the list
        this.textContent = '+'; // Change icon to plus
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Function to animate the numbers
    function animateNumbers(element) {
      const endValue = parseFloat(element.getAttribute('data-count'));
      let startValue = 0;
      const duration = 2000; // Duration in milliseconds
      const stepTime = 100; // Time per step in milliseconds
      const steps = Math.ceil(duration / stepTime);
      const stepValue = endValue / steps;
  
      function updateNumber() {
        startValue += stepValue;
        if (startValue >= endValue) {
          element.textContent = endValue + (element.querySelector('.plus') ? element.querySelector('.plus').textContent : '');
          clearInterval(interval);
        } else {
          element.textContent = Math.floor(startValue) + (element.querySelector('.plus') ? element.querySelector('.plus').textContent : '');
        }
      }
  
      const interval = setInterval(updateNumber, stepTime);
    }
  
    // Function to handle element visibility
    function handleScroll() {
      const numbers = document.querySelectorAll('.number');
      numbers.forEach(number => {
        const rect = number.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
        if (isVisible && !number.classList.contains('animated')) {
          animateNumbers(number);
          number.classList.add('animated');
        }
      });
    }
  
    // Set up intersection observer
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5
    });
  
    document.querySelectorAll('.number').forEach(number => {
      observer.observe(number);
    });
  
    // Initial check
    handleScroll();
  });

  
      // Get the button element
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");

      // Show the button when the user scrolls down 300px from the top of the document
      window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      };
  
      // Scroll to the top of the document when the button is clicked
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Smooth scroll behavior
        });
      }