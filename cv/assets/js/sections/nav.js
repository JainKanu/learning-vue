import showNotshow from "../components/show-not-show.js";

const sideNavbar = Vue.component('side',{
    data () {
      return{
        links: [
            {
              sections:'About',
            },
            {
              sections:'Experience',
            },
            {
              sections:'Education',
            },
            {
              sections:'Skills',
            },
            {
              sections:'Interests',
            },
            {
              sections:'Contact',
            }
          ],
      }
  },
      template:`
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
      <show-not-show></show-not-show>
      <a class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </a>
      <div class="navbar-collapse collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="link in links">
          
          <router-link class="nav-link" :to="link.sections">{{link.sections}}</router-link>
            
          </li>
        </ul>
      </div>
      </nav>
      `
  });
  export default sideNavbar;