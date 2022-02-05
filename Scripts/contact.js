//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function ContactContents()
    {
        console.log("Contact Page contents will be loaded now...");
        //Insertion of page contents goes after here
    }

    // Sets the nav-link as active and aria-current for the current page
    function UpdateContactActive()
    {
        document.getElementById("navbarContactUs").setAttribute("class", "nav-link active");
        document.getElementById("navbarContactUs").setAttribute("aria-current", "page");
    }

    function Start()
    {
        ContactContents();
        UpdateContactActive();
    }
    window.addEventListener("load",Start());

    // Contact form redirects to home
    sendButton.addEventListener("click", function()
    {
        location.href = "index.html";
    })
})();