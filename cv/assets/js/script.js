// import App from "./App.js";
import showNotshow from "./components/show-not-show.js";
import languagesIcon from "./components/languages-icon.js";
import SocialIcons from "./components/social-icons.js";
import sideNavbar from "./sections/nav.js";
import about from "./sections/about.js";
import experience from "./sections/experience.js";
import education from "./sections/education.js";
import Skills from "./sections/Skills.js";
import interests from "./sections/interests.js";
// import Routr from "./router.js";

// App,
languagesIcon,
SocialIcons,
showNotshow,
sideNavbar,
about,
experience,
education,
Skills,
interests,

new Vue({
    el: '#app',
    data: {
        links: [
          {
            sections:'<a class="nav-link" href="#about">About</a>',
          },
          {
            sections:'<a class="nav-link" href="#experience">Experience</a>',
          },
          {
            sections:'<a class="nav-link" href="#education">Education</a>',
          },
          {
            sections:'<a class="nav-link" href="#skills">Skills</a>',
          },
          {
            sections:'<a class="nav-link" href="#interests">Interests</a>',
          }
        ]
        

    }
});

