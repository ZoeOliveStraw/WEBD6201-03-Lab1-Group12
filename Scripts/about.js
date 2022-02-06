//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function AboutContents()
    {
        console.log("About Page contents will be loaded now...");
        //Insertion of page contents goes after here

        // <!-- About Us Page: Include details (text and current images) about you (and your partner).
        // Please keep this appropriate. Include links to your resume(s) (5 Marks: Site Content) -->
        document.getElementsByTagName("main")[0].innerHTML = `
        <section class="mbr-section content4">
            <div class="container w-50">
                <div class="media-container-row">
                    <h1 class="text-center">About Us</h1>
                </div>
                <div class="mt-5">
                    <!-- Start of Article 1 contents -->
                    <div class="media-container-row">
                        <h4 class="text-start font-weight-light">Zoe Straw</h2>
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
                        <h4 class="text-end font-weight-light">Jacob Kent</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                          <img class="img-fluid" src="./media/JK2021.jpg"><i>Photo of Jacob</i></img>
                          <br/><br/><br/><br/><br/>
                        </div>
                        <div class="col-sm">
                            <p> I'm Jacob Kent, a Programming Student at Durham College and graduate from the Human Resources 2-year program from the same institution.
                            <br/>
                            So far I've learned the basics of coding Python, C++, C#, PHP, HTML, and Javascript. 
                            My experiences and education have some together so far to make me skilled at problem solving, data evaluation, and creative thinking.

                                <br/>
                                
                                
                            </p>
                          </div>
                    </div>
                </div>
            </div>
        </section>
        `


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