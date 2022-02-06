//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function IndexContents()
    {
        console.log("Index Page contents will be loaded now...");
        //Insertion of page contents goes after here
        document.getElementsByTagName("main")[0].innerHTML =  `
        <section class="mbr-section content4">
            <div class="container w-50">
                <div class="media-container-row">
                    <h1 class="text-center text-white">Welcome to our Lab 1 page for WEBD6201</h1>
                    <h2 class="text-center font-weight-light text-white">Check out the links in the navbar to learn about us and what we can do for you</h2>
            </div>
        </section>
        
        `
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