document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        console.error("Mobile menu elements not found.");
        return;
    }

    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isOpen = navLinks.classList.contains("active");

        if (isOpen) {

            navLinks.classList.remove("active");

            navLinks.style.setProperty(
                "display",
                "none",
                "important"
            );

            menuToggle.classList.remove("active");

        } else {

            navLinks.classList.add("active");

            navLinks.style.setProperty(
                "display",
                "flex",
                "important"
            );

            menuToggle.classList.add("active");

        }

    });


    /* Close menu after clicking a link */

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            navLinks.style.setProperty(
                "display",
                "none",
                "important"
            );

            menuToggle.classList.remove("active");

        });

    });

});