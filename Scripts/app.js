
"use strict";
(function()
{
// Todo

// Navbar Injection?

// DOM MANIPULATION

// Inject text for pages with javascript

// Change "Products" link to "Projects"

// Add HR link between About and Contact in the navbar

// Add fixed bottom navbar with copyright 

    function AddTopNavbar()
    {
        document.getElementsByTagName('header')[0].innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">WEBD6201 Lab 1</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="products.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="services.html">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        `
    }

    function AddBottomNavbar()
    {
        document.body.insertAdjacentHTML("beforeend", 
        `<nav class="navbar fixed-bottom navbar-light bg-light">
        <a class="navbar-brand" href="#">&copy Copyright 2022</a>
        </nav>`)
    }

    function Start()
    {
        AddTopNavbar();
        AddBottomNavbar();
    }

    window.addEventListener("load",Start());

// CONTACT FORM

// Add event listener for submit redirects to home
})();