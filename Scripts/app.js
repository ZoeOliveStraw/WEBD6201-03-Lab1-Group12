
"use strict";
(function()
{
    // Todo
    // ADD FONTAWESOME ICONS
    // ADD HR TO NAVBAR
    // UPDATE ACTIVE PAGE

    // DOM MANIPULATION

    // Top Navbar Injection
    function AddTopNavbar()
    {
        document.getElementsByTagName('header')[0].innerHTML = 
        `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">WEBD6201 Lab 1</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="navbarLinks" class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a id="navbarHome" class="nav-link active" aria-current="page" href="index.html"><i class="fas fa-home"></i> Home</a>
                    </li>
                    <li class="nav-item">
                        <a id="navbarProducts" class="nav-link" href="products.html"><i class="fas fa-folder"></i> Products</a>
                    </li>
                    <li class="nav-item">
                        <a id="navbarServices" class="nav-link" href="services.html"><i class="fas fa-dollar-sign"></i> Services</a>
                    </li>
                    <li class="nav-item">
                        <a id="navbarAboutUs" class="nav-link" href="about.html"><i class="fas fa-info"></i> About Us</a>
                    </li>
                    <li class="nav-item">
                        <a id="navbarContactUs" class="nav-link" href="contact.html"><i class="fas fa-envelope"></i> Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        `
        RenameNavbarProductsToProjects();
    }

    //This function name is horribly long but it does exactly what it says
    function RenameNavbarProductsToProjects()
    {
        console.log("Called Projects");
        document.getElementById("navbarProducts").innerHTML = `<i class="fas fa-briefcase"></i> Projects`;
        document.getElementById("navbarProducts").setAttribute("id", "navbarProjects");
    }

    // Add Human Resourecs between About us and Contact us
    function InjectHumanResources()
    {
        console.log("Called HR");
        // Get the navbar elements
        let NavbarLinks = document.getElementById("navbarLinks");

        // Create the element
        let navbarHR = document.createElement("li");

        // Set its attributes
        navbarHR.setAttribute("class", "nav-item")
        navbarHR.innerHTML = `<a id="navbarHumanResources" class="nav-link" href="#HumanResources"><i class="fas fa-user"></i> Human Resources</a>`;

        // Insert it before Contact Us
        NavbarLinks.insertBefore(navbarHR, NavbarLinks.childNodes[8]);
    }

    // Add fixed bottom navbar with copyright 
    function AddBottomNavbar()
    {
        // console.log("Called bottom navbar");

        // Create the element
        let Navbar = document.createElement("nav");

        // Set its attributes
        Navbar.setAttribute("class", "navbar fixed-bottom navbar-light bg-light")
        Navbar.innerHTML = `<a class="navbar-brand" href="#">&copy Copyright 2022</a>`;

        // Append it
        document.body.appendChild(Navbar);

    }

    function Start()
    {
        AddTopNavbar();
        AddBottomNavbar();
        InjectHumanResources();
    }

    window.addEventListener("load",Start());

})();