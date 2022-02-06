//By Jacob Kent and Zoe Straw for WEBD6201 Lab 1

(function()
{
    function ServicesContents()
    {
        console.log("Services Page contents will be loaded now...");
        //Insertion of page contents goes after here

        document.getElementsByTagName("main")[0].innerHTML = `
        <section class="mbr-section content4">
            <div class="container w-50">
                <div class="media-container-row">
                    <h1 class="text-center">Our Services</h1>
                    <h2 class="text-center font-weight-light">See what we can do for you</h2>
                </div>
                <div class="mt-5">
                    <!-- Start of Article 1 contents -->
                    <div class="media-container-row mt-5">
                        <h4 class="text-end font-weight-light">Database Integration</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                          <img class="img-fluid" src="./media/Tables.png"><i>Table diagram in pgAdmin</i></img>
                        </div>
                        <div class="col-sm">
                            <p> Create, read, update and delete your data in real time. 
                                Your data will be safe and organised in our relational databases 
                                which can be securely accessed by you and your employees wherever and whenever you need it.
                                <br/>                                
                            </p>
                          </div>
                    </div>
                    <!-- Start of Article 2 contents -->
                    <div class="media-container-row mt-5 mb-6">
                        <h4 class="text-start font-weight-light">Full Stack VR development</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                          <p>I have been working with the Unity game engine for over 2 years. I am also a hard surface 3D
                          modeller in Blender and a programmer in C#. I can create fully function Virtual Reality applications
                          that will build to PC or Android, the two largest VR platforms. These are created with the OpenXR
                          API and are platform agnostic, so should be easily adaptable to future VR platforms compatible
                          with the OpenXR standard.
                          <br/><br/>My focus has been on creating performant, cross platfrom apps that will work on the widest
                          range of devices and systems possible with a high degree of performance. I can also create 3D art
                          assets with full PBR as necessary.
                          </p>
                        </div>
                        <div class="col-sm">
                          <img class="img-fluid" src="./media/VR-stock-photo.jpg"><i>Virtual Reality Development</i></img>
                        </div>
                    </div>
                    <!-- Start of Article 3 contents -->
                    <div class="media-container-row mt-5">
                        <h4 class="text-end font-weight-light">Automated Web Testing</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                          <img class="img-fluid" src="./media/AutoTesting.png"><i>A section of webdriver code in Python</i></img>
                          <br/><br/><br/><br/><br/>
                        </div>
                        <div class="col-sm">
                            <p> We can do more than just build your website or application, we can help test it too. 
                                With automated testcases your product can be tested repeatedly with a variety of information and in a plethora of environments.
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