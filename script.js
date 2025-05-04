// ======== Focus/Blur Border Effect on Text Input ========
document.querySelector("input[type='text']").addEventListener("focus", function () {
    this.style.border = "2px solid #E74C3C";
});

document.querySelector("input[type='text']").addEventListener("blur", function () {
    this.style.border = "1px solid #ccc";
});

// ======== Menu Toggle & Navigation ========
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const searchContainer = document.querySelector('.search-container');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        searchContainer.classList.toggle('active');

        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('nav')) {
            navLinks.classList.remove('active');
            searchContainer.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// ======== Recipe Grid & Filtering ========
const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.querySelector('.search-box input');
const categoryCards = document.querySelectorAll('.category-card');
const phoneInput = document.querySelector('.phone-input input');
const continueBtn = document.querySelector('.continue-btn');

function displayRecipes(recipesToShow = recipes) {
    recipeGrid.innerHTML = '';
    recipesToShow.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-info">
                    <span class="time">${recipe.time}</span>
                    <span class="rating">★ ${recipe.rating}</span>
                </div>
            </div>
        `;
        recipeGrid.appendChild(card);
    });
}

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('span').textContent;
        const filteredRecipes = category === 'All'
            ? recipes
            : recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);

        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

categoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ======== Phone Number Formatting ========
phoneInput.addEventListener('input', (e) => {
    let number = e.target.value.replace(/\D/g, '');

    if (number.length > 10) {
        number = number.slice(0, 11);
    }

    if (number.length > 5) {
        number = number.slice(0, 5) + ' ' + number.slice(5);
    }

    e.target.value = number;

    continueBtn.disabled = number.length !== 11;
    continueBtn.style.opacity = number.length === 11 ? '1' : '0.5';
});

// ======== OTP Login Flow ========
continueBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const phoneNumber = phoneInput.value.replace(/\s/g, '');

    if (phoneNumber.length === 10) {
        try {
            alert('OTP sent to your phone number: +91 ' + phoneNumber);
            const otp = prompt('Please enter the OTP sent to your phone:');
            if (otp) {
                if (otp === '123456') {
                    alert('Login successful!');
                } else {
                    alert('Invalid OTP. Please try again.');
                }
            }
        } catch (error) {
            alert('Error sending OTP. Please try again.');
        }
    }
});

// ======== Initialize Animations ========
function initializeAnimations() {
    const appLogo = document.querySelector('.app-logo');

    if (appLogo) {
        appLogo.addEventListener('mouseover', () => {
            appLogo.style.transform = 'scale(1.05) rotate(5deg)';
        });
        appLogo.addEventListener('mouseout', () => {
            appLogo.style.transform = 'scale(1) rotate(0deg)';
        });
    }
}

// ======== DOM Ready: Run Init ========
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();

    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        handleUserLogin(userData);
    }

    displayRecipes();
});



  const backgroundSlider = document.querySelector('.hero');
  const images = ['pizza.jpg', 'ramen.jpg', 'tacos.jpg', 'sushi.jpg'];
  let currentIndex = 0;

  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loops back to the first image after the last one
    backgroundSlider.style.backgroundImage = `url('${images[currentIndex]}')`;
  }

  setInterval(changeBackgroundImage, 5000);  // Change image every 5 seconds

