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
                          <p>Hi there, my name is Zoe! I am a passionate young tech professional with an especially intense
                          love for Virtual Reality and other cutting edge media technologies. When not in school learning
                          the ins and outs of web development, databases, mainframes and object oriented programming, I am
                          hard at work on passion projects that will enable me to create engaging virtual worlds in VR.
                          <br/><br/>Beyond programming and game engines, I also enjoy 3D art as a hobby, which enabled me
                          to create modeled and textured assets for use within my creations. My goal is to be competent in
                          the full stack of 3D game creation for VR platforms, with platform agnostic and performance focused
                          designs. I love solving problems.
                          <br/><br/>Beyond my development and art, I am a huge geek, into Dungeons and Dragons, Star Trek and
                          all manner of video games. I also love makeup, fashion and staying active. If you want to know anything
                          about classic TOHO Godzilla films or the finer points of the Metal Gear Solid games, I'm your girl!</p>
                        </div>
                        <div class="col-sm">
                          <img class="img-fluid" src="./media/Resume Picture.jpg"><i>Zoe Straw</i></img>
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