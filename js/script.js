/* mixitup filter */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* Active Work */
const linkWork = document.querySelectorAll ('.category__btn');

function activeWork () {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/* Contact Form */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    
    //check if the field has a value
    if (contactName.value === '' || 
    contactEmail.value === '' || 
    Message.value === '')
    {
        //add and remove colour
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        //show message
        contactMessage.textContent = 'Oops, you forgot to fill in a field';
    }   else {
        //serviceID - templateID - #form - publickey
        emailjs.sendForm(
         'service_hxxc9oc',
         'template_67za1ey',
         '#contact-form', 
         'GT3Bwkxw_w56UMukS'
        )
        .then(() => {
            //show message and add color, window 
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent :)';

            //remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        }, 
        (error) => {
            alert('Oh No! SOMETHING WENT WRONG...', error);
        }
      );

      //clear input fields
      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

let backToTopBtn = document.getElementById("backToTopBtn");

// After 20px, button appears
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

//Actual back to top function
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
