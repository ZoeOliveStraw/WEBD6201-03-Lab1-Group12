//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function ProjectsContents()
    {
        console.log("Projects Page contents will be loaded now...");
        document.getElementsByTagName("main")[0].innerHTML = `
        <section class="mbr-section content4">
            <div class="container w-50">
                <div class="media-container-row">
                    <h1 class="text-center">Our Projects</h1>
                    <h2 class="text-center font-weight-light">Below are samples of projects we have worked on for school and in our free time</h2>
                </div>
                <div class="mt-5">
                    <!-- Start of Article 1 contents -->
                    <div class="media-container-row">
                        <h4 class="text-start font-weight-light">Shrine to the Goddess - Zoe</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                          <p>This is a render of a shrine that I made in Blender a few weeks ago. It combines elements
                               of Shinto and other East Asian shrines that I went to during my travels  in Southeast Asia
                                in the early 2010s. This was made to experiment with dramatic lighting and reflective 
                                of materials. <br/><br/>The total poly count of the render is actually quite low, with beveling
                                being applied via post-processing modifiers instead of being built into meshes. Emmission 
                                materials and transparency is applied in a number of places to give off the desired effect.</p>
                        </div>
                        <div class="col-sm">
                          <img class="img-fluid" src="./media/Goddess Shrine 3.png"><i>Shrine to the Goddess, by Zoe Straw</i></img>
                        </div>
                    </div>
                    <!-- Start of Article 2 contents -->
                    <div class="media-container-row mt-5">
                        <h4 class="text-end font-weight-light">Shrine to the Goddess - Zoe</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                          <img class="img-fluid" src="./media/Goddess Shrine 3.png"><i>Shrine to the Goddess, by Zoe Straw</i></img>
                        </div>
                        <div class="col-sm">
                            <p>This is a render of a shrine that I made in Blender a few weeks ago. It combines elements
                                 of Shinto and other East Asian shrines that I went to during my travels  in Southeast Asia
                                  in the early 2010s. This was made to experiment with dramatic lighting and reflective 
                                  of materials. <br/><br/>The total poly count of the render is actually quite low, with beveling
                                  being applied via post-processing modifiers instead of being built into meshes. Emmission 
                                  materials and transparency is applied in a number of places to give off the desired effect.</p>
                          </div>
                    </div>
                    <!-- Start of Article 3 contents -->
                    <div class="media-container-row mt-5 mb-6">
                        <h4 class="text-start font-weight-light">Goth Bedroom - Zoe</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                          <p>This render of a bedroom was my contribution to a popular trend among 3D artists on social media
                              to create stylized dioramas of interiors. This involve some UV unwrappinga and texture mapping
                              for the movie posters and a lot of edge beveling and mesh editing to ensure thateverything maintains
                              a fairly soft, stylized feel.
                              <br/><br/>The color palette was picked with mind being paid to color theoy so that each color would 
                              go together fairly well. The movies were picked because classic monster movies have fun classic
                              film cred and fit with the entire goth aesthetic.<br/><br/><br/><br/><br/>
                          </p>
                        </div>
                        <div class="col-sm">
                          <img class="img-fluid" src="./media/Goth bedroom 5.png"><i>Shrine to the Goddess, by Zoe Straw</i></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `
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