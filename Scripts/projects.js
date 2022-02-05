//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function ProjectsContents()
    {
        console.log("Projects Page contents will be loaded now...");
        //Insertion of page contents goes after here
    }

    //This function contains logic that renames the title to "projects" rather than "products"
    function RenamePageProjects()
    {
        document.title = "Projects";
    }

    // Sets the nav-link as active and aria-current for the current page
    function UpdateProjectsActive()
    {
        document.getElementById("navbarProjects").setAttribute("class", "nav-link active");
        document.getElementById("navbarProjects").setAttribute("aria-current", "page");
    }

    function Start()
    {
        ProjectsContents();
        RenamePageProjects();
        UpdateProjectsActive();
    }
    window.addEventListener("load",Start());
})();