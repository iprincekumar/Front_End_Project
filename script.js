function changeAboutMeText()
{
    const aboutMeTexts=[" Full-Stack Developer!!", " Data Scientist!!", "n Upcoming Red Hat Hacker!!"];
    const typingSpeed=100;//milisecond per character
    const eraseSpeed=50;//miliseocnd per character during erasing
    const pauseTime=1500;//miliseconds to pause b/w each text change
    const aboutMeElement = document.querySelector('.about-me'); 

    let textIndex=0;
    let charIndex=0;
    let isDeleting=false;

    function type(){
        const currentText=aboutMeTexts[textIndex];
        /*typing*/
        if(!isDeleting && charIndex < currentText.length)
        {
            aboutMeElement.textContent+=currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        /* Erasing*/
        else if(isDeleting && charIndex > 0)
        {
            aboutMeElement.textContent=currentText.substring(0, charIndex-1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        }
        /*switching the deleting or typing process*/
        else{
            isDeleting=!isDeleting;
            if(!isDeleting){
                textIndex=(textIndex+1)% aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }
    type();

}
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = toggleButton.querySelector('i');
    const text = toggleButton.querySelector('span');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Light Mode';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'Dark Mode';
    }
});

function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }
// Set the initial mode based on the body's class
document.addEventListener('DOMContentLoaded', () => {
    const icon = toggleButton.querySelector('i');
    const text = toggleButton.querySelector('span');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Light Mode';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'Dark Mode';
    }
});


changeAboutMeText();

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                
                progressBar.style.setProperty('--progress', `${progress}%`); // Set custom property for progress
                progressBar.classList.add('animated'); // Add a class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    });

    const programmingLanguages = document.querySelectorAll('#programming-languages .skills');
    programmingLanguages.forEach(skills => {
        observer.observe(skills);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const scrollToTopButton = document.getElementById('scroll-to-top');
        // Smooth scrolling
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
        // Scroll to top button
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
    
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });