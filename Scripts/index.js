//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function IndexContents()
    {
        console.log("Index Page contents will be loaded now...");
        //Insertion of page contents goes after here
    }

    // Sets the nav-link as active and aria-current for the current page
    function UpdateHomeActive()
    {
        document.getElementById("navbarHome").setAttribute("class", "nav-link active");
        document.getElementById("navbarHome").setAttribute("aria-current", "page");
    }

    function Start()
    {
        IndexContents();
        UpdateHomeActive();
    }
    
    window.addEventListener("load",Start());
})();