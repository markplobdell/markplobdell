

/* Code for Animations */

const observer =  new IntersectionObserver((entries) => {

    entries.forEach((entry) =>{

        if(entry.isIntersecting){

            entry.target.classList.add('showing');
            
        }
        else{

            entry.target.classList.remove('showing');

        }

    });

});




var fadeInElements = document.querySelectorAll('.fadeInAnimation');
var fadeInLeftElements = document.querySelectorAll('.fadeInLeft');
var fadeInRightElements = document.querySelectorAll('.fadeInRight');


fadeInElements.forEach((el) => observer.observe(el));
fadeInLeftElements.forEach((el) => observer.observe(el));
fadeInRightElements.forEach((el) => observer.observe(el));