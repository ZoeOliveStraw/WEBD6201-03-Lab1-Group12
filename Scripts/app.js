
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
function AddBottomNavbar()
{
    document.body.insertAdjacentHTML("beforeend", 
    `<nav class="navbar fixed-bottom navbar-light bg-light">
    <a class="navbar-brand" href="#">&copy Copyright 2022</a>
    </nav>`)
}
AddBottomNavbar();

// CONTACT FORM

// Add event listener for submit redirects to home
})();