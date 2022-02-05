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

    function Start()
    {
        ProjectsContents();
        RenamePageProjects();
    }
    window.addEventListener("load",Start());
})();