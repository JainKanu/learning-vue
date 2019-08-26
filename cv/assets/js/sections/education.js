const education = Vue.component('education',{
    data () {
      return{
        schoolBoard: 'Punjab School Education Board',
        edu: 'Senior secondary',
        marks: 'Marks: 79%',
        session: 'April 2014-March 2015',
        university: 'Punjabi University Patiala',
        graduation: 'Bachelor of Computer Application',
        edu2: 'Computer Science - Development Track',
        session2: 'July 2015-May 2018'
      }
  },
      template:`
      <section class="resume-section p-3 p-lg-5" id="education" data-component="education">
          <div class="w-100">
            <h1 class="mb-5">Education</h1>

            <div class="resume-item mb-5 row">
              <div class="resume-content col-lg-10">
                <h3 class="mb-0">{{schoolBoard}}</h3>
                <div class="text-muted mb-3">
                  <h5 class="mt-2">{{edu}}</h5>
                  <p>{{marks}}</p>
                </div>
              </div>
              <div class="resume-date text-md-right col-lg-2">
                <span class="senior"><b>{{session}}</b></span>
              </div>
            </div>

            <div class="resume-item mb-5 row">
              <div class="resume-content col-lg-10">
                <h3 class="mb-0">{{university}}</h3>
                <div class="text-muted mb-3">
                  <h5 class="mt-2">{{graduation}}</h5>
                  <p>{{edu2}}</p>
                </div>
              </div>
              <div class="resume-date text-md-right col-lg-2">
                <p class="date"><b>{{session2}}</b></p>
              </div>
            </div>
          </div>
        </section>
      `
  });
  export default education;