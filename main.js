
let count = 1;
const cartIcon = document.querySelector('.cart-icon');
const addButtons = document.querySelectorAll('.add-to-cart');

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = function() {
    count++;
    cartIcon.setAttribute('data-count', count);
  };
}


const ctaButton = document.querySelector('.cta-button');
ctaButton.onclick = function() {
  alert('Redirecting to the shop section!');
};

const aboutBtn = document.querySelector('.about .btn');
aboutBtn.onclick = function() {
  const shopSection = document.querySelector('#shop');
  if (shopSection) {
    shopSection.scrollIntoView({ behavior: 'smooth' });
  }
};


 if (email.includes('@')) {
    alert('تم الاشتراك بنجاح مع: ' + email);
  } else {
    alert('من فضلك أدخل بريد إلكتروني صالح');
  }
