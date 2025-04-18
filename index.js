<!DOCTYPE html>
<html>
  <head>
    <title>Jane Doe - Portfolio</title>
    <link rel="stylesheet" href="./style.css"/>
    <script src="./script.js"></script>
  </head>
  <body>
    <!-- Navigation Bar -->
    <nav>
      <div id="home">
        <div class="profile_name">
          Olusa Damilola
          <div class="contact_info">
            <img src="html_finalprojimages/envelope.png" alt="https://icons8.com/icon/124377/circled-envelope"/>
          jdoe@jeemail.com
        </div>
        <div style="clear:both;"></div>
        <div class="contact_info">
          <img src="html_finalprojimages/phone.png" alt="https://icons8.com/icon/124377/circled-envelope"/>
          +13456764598

        </div>
        </div>
        <div class="topdiv">
          <a class="topmenu" href="#about-me">About Me</a>
          <!-- Add the links for Skills, Projects and Recommendation here -->
          <a class="topmenu" href="#skills">Skills</a>
          <a class="topmenu" href="#projects">Projects</a>
          <a class="topmenu" href="#recommendations">Recommendations</a>

        </div>
      </div>    
    </nav>

    <!-- About Me -->
    <section id="about-me" class="container">
      <div>
        <img src="https://cdn.pixabay.com/photo/2020/03/17/17/47/engineer-4941347_1280.jpg" class="profile_image"/>
      </div>

      <div>
          <h1>
            Hi, I'm Olusa Damilola! <img src="html_finalprojimages/waving-hand.png" width="30px"/>
          </h1>
          <p>
            I am an aspiring fullstack engineer .
            I am currently learning, JavaScript, Css and Html. 
            I am currently enjoying my course with cousera.
          </p>
      </div>
    </section>
              
    <!-- Skills -->
    <section id="skills">
      <h2>Skills</h2>
      <div style="clear:both;"></div>

      <div class="all_skills">
        <div class="skill">
          <img src="html_finalprojimages/html5.png"/>
          <h6>HTML</h6>
          <p>2 years experience</p>
        </div>  

        <div class="skill">
          <img src="html_finalprojimages/js.jpeg"/>
          <h6>JavaScript</h6>
          <p>3 years experience</p>
        </div>  

        <!-- Add more skills here -->
         <div class="skill">
          <img src="html_finalprojimages/java.png"/>
          <h6>Java</h6>
          <p>0.5 years experience</p>
         </div>

         <div class="skill">
          <img src="html_finalprojimages/react.png"/>
          <h6>React</h6>
          <p>1 year experience</p>
         </div>

         <div class="skill">
          <img src="html_finalprojimages/node.png"/>
          <h6>Node.js</h6>
          <p>1 year experience</p>
         </div>
         


      </div>
    </section>
          
    <!-- Projects -->
    <section class="projects" id="projects">
      <h2>
        Projects
      </h2>
      <div style="clear:both;"></div>

        <div id="projects-container" class="projects-container">
          <div class="project-card">
            <h3>Login page</h3>
            <ul>
              <li>Developed a functioning login page for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant</li>
            </ul>
          </div>
          <hr>
          <div class="project-card">
            <h3>Website</h3>
            <ul>
              <li>Developed and deployed a functioning web page of an eCommerce platform using IBM NLU</li>
            </ul>
          </div>
          <hr>
          <div class="project-card">
            <h3>sportbetting Website</h3>
            <ul>
              <li>Created a styled multi-page website for a sportbetting company</li>
            </ul>
          </div>
    </div>
    </section>
    <div style="clear:both;"></div>

    <!-- Recommendations -->
    <section id="recommendations">
      <h2>Recommendations</h2>
      <div style="clear:both;"></div>
      <div class="all_recommendations" id="all_recommendations">
        <div class="recommendation">
          <span>&#8220;</span>
          Damilola is a very quick learner to the key concepts of Web development. 
          He got a great attitude and he is a serious team player. 
          he has a curious mind and asks the right question all the time.
          He takes initiative within a team and has potentials to lead the team to greatness.
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          Working with Damilola has been such a great experience. 
          He is highly knowledgable and always goes the extra step to make sure he does the right thing. 
          For any future projects that need his expertise I would definately want to collaborate with him again .
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          I had worked along with Damilola during the initial phase of our venture which needed Web development. 
          He is a committed resource and a well motivated person 
          He will be an invaluable asset for any organisation! 
          <span>&#8221;</span>
        </div>
      </div>
    </section>

    <!-- Recommendation Form -->
    <section id="contact">
      <div class="flex_center">
        <fieldset>
          <legend class="introduction">Leave a Recommendation</legend>          
          <input type="text" placeholder="Name (Optional)"> <br/>
          <textarea id="new_recommendation" cols="500" rows="10" placeholder="Message"></textarea>
          <div class="flex_center">
            <button id="recommend_btn" onclick="addRecommendation()">Submit</button>
          </div>
        </fieldset>
      </div>
    </section>

    <div class="iconbutton">
      <a href="#home">
        <!--Add the code here for the logo to appear and the icon to be actionable-->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="63px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </div>

    <div class="popup" id="popup" class="flex_center">
      <img src="html_finalprojimages/checkmark--outline.svg"/>
      <h3><!-- Add appropriate text here-->
        Thanks for leaving a recommendation!
      </h3>
      <button onclick="showPopup(false)">Ok</button>
    </div>
  </body>
</html>
