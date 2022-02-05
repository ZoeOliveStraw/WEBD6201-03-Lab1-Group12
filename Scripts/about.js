//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function AboutContents()
    {
        console.log("About Page contents will be loaded now...");
        //Insertion of page contents goes after here
    }

    // Sets the nav-link as active and aria-current for the current page
    function UpdateAboutActive()
    {
        document.getElementById("navbarAboutUs").setAttribute("class", "nav-link active");
        document.getElementById("navbarAboutUs").setAttribute("aria-current", "page");
    }

    function Start()
    {
        AboutContents();
        UpdateAboutActive();
    }
    window.addEventListener("load",Start());
})();