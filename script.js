document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic glow effect on name letters
    const nameTitle = document.querySelector(".hero h1");
    nameTitle.innerHTML = nameTitle.textContent.split('').map(letter => 
        `<span class="glow-letter">${letter}</span>`
    ).join('');
    

    document.querySelector(".btn").addEventListener("mouseleave", function() {
        this.style.boxShadow = "0px 4px 10px rgba(255, 204, 0, 0.5)";
    });
    
        letter.addEventListener("mouseout", function() {
            this.style.color = "";
            this.style.textShadow = "";
        });
    });

    // Button hover effect
    document.querySelector(".btn").addEventListener("mouseenter", function() {
        this.style.boxShadow = "0px 0px 15px #ffcc00";
    });
    document.querySelector(".btn").addEventListener("mouseleave", function() {
        this.style.boxShadow = "none";
    });
;
