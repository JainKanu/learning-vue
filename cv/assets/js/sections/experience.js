const experience = Vue.component('experience',{
    data () {
      return{
        intern: 'Web Design Internship',
        company : 'Sebiz Infotech Pvt. Ltd.',
        intro1: 'One Year,Web training in mobile designing.How screen design can be created in that,How application works.It was really good experience with sebiz.I really happy with training and enjoying few short period of learning curve.',
        timingInfo: 'March 2015-May 2016',
        intern2: 'Junior Web Developer',
        company2: 'Mediaoncloud',
        intro2: 'I am passionate about web bas application.As of now i am working as a Junior Web Developer and learning niche skills as well,I really like to learn new things.',
        timingInfo2: 'May 2018-July 2019',
      }
  },
      template:`
      <section class="resume-section p-3 p-lg-5" id="experience" data-component="experience">
          <div class="w-100">
            <h1 class="mb-5">Experience</h1>
            <div class="resume-item mb-5 row">
              <div class="resume-content col-lg-10">
                <h3 class="mb-0">{{intern}}</h3>
                <div class="text-muted mb-3">
                  <h5 class="mt-2">{{company}}</h5>
                  <p>{{intro2}}</p>
                </div>
              </div>
              <div class="resume-date text-md-right col-lg-2">
                <span class="senior"><b>{{timingInfo}}</b></span>
              </div>
            </div>

            <div class="resume-item mb-5 row">
              <div class="resume-content col-lg-10">
                <h3 class="mb-0">{{intern2}}</h3>
                <div class="text-muted mb-3">
                  <h5 class="mt-2">{{company2}}</h5>
                  <p>{{intro2}}</p>
                </div>
              </div>
              <div class="resume-date text-md-right col-lg-2">
                <span class="date"><b>{{timingInfo2}}</b></span>
              </div>
            </div>
          </div>
        </section>
      `
  });
  export default experience;