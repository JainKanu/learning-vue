import SocialIcons from "../components/social-icons.js";
const about = Vue.component('about',{
  data () {
    return{
      firstName: 'Karan',
      lastName: 'Jain',
      address: 'Rampura Phul Punjab 151104',
      mail: 'mailto:',
      email: 'karan.jain740@gmail.com',
      intro: 'HANDS-ON, SUCCESSFUL SOFTWARE ENGINEER WITH DECADES OF VERIFIABLE SUCCESS LEADING TEAMS IN DELIVERING APPROPRIATE TECHNOLOGY SOLUTIONS FOR DESKTOP AND MOBILE PRODUCTS.  COMPREHENSIVE KNOWLEDGE OF PLATFORM DEVELOPMENT AND WEB- BASED APPLICATIONS.',
    }
},
    template:`
    <section class="resume-section p-3 p-lg-5" id="about" data-component="about">

    <div class="w-100">
      <h1 class="mt-5 mb-0"> {{firstName}} <span class="name">{{lastName}}</span></h1>
      <div class="text-muted">
        <h6 class="mb-5">{{address}}-<a v-bind:href="mail + email" class="name">{{email}}</a></h6>
        <p>{{intro}}</p>
      </div>
      <social-icons></social-icons>
    </div>
  </section>
    `
});
export default about;