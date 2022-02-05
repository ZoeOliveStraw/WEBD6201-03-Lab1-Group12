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
                          <img class="img-fluid" src="./media/JK2021.jpg"><i>A probability analysis example, by Jacob Kent</i></img>
                        </div>
                        <div class="col-sm">
                            <p> This image is a section from one worksheet in an Excel Workbook I created for my final paper for Math1110 at Durham College.
                                The subject of this paper was comparing probabilities of outcomes when rolling two dice when one die has a modifer to its result.
                                <br/>
                                While it isn't so visually spectacular, I was able to take the data from my worksheets and work backwards 
                                to create a formula producing the likelihood or each result based on the number of sides and the dice modifier.
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