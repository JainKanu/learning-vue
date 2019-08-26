import languagesIcon from "../components/languages-icon.js";

const Skills = Vue.component('skills',{
    data () {
      return{
        skills: 'PROGRAMMING LANGUAGES TOOLS',
        items: [
            {
              message:'<i class="fa-li fa fa-check"></i> Mobile-First, Responsive Design',
            },
            {
              message:'<i class="fa-li fa fa-check"></i> Cross Browser Testing Debugging',
            },
            {
              message:'<i class="fa-li fa fa-check"></i> Cross Functional Teams',
            },
            {
              message:'<i class="fa-li fa fa-check"></i> Agile Development Scrum',
            }
          ],
      }
  },
      template:`
      <section class="resume-section p-3 p-lg-5" id="skills" data-component="skills">

          <div class="w-100">
            <h1 class="mb-5 mt-5">Skills</h1>

            <div class="resume-item mb-5">
              <div class="resume-content">
                <div class="text-muted mb-3">
                  <h5>{{skills}}</h5>
                  <languages-icon></languages-icon>
                  <h6 class="mt-4">WORKFLOW</h6>
                  <ul class="fa-ul mt-4">
                    <li v-for="item in items">
                      <span v-html='item.message'></span>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      `
  });
  export default Skills;