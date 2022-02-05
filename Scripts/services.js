//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function ServicesContents()
    {
        console.log("Services Page contents will be loaded now...");
        //Insertion of page contents goes after here
    }

    // Sets the nav-link as active and aria-current for the current page
    function UpdateServicesActive()
    {
        document.getElementById("navbarServices").setAttribute("class", "nav-link active");
        document.getElementById("navbarServices").setAttribute("aria-current", "page");
    }

    function Start()
    {
        ServicesContents();
        UpdateServicesActive();
    }
    window.addEventListener("load",Start());
})();