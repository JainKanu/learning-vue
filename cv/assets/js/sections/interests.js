const interests = Vue.component('interests',{
    data () {
      return{
        interest: 'Apart from being a web developer, I enjoy most of my time being outdoors in the winters. I am also love to mountain trekking and natural environment.',
        interest2: 'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows and loves to spend time with family. When i have free time i love to reading books.I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.'
      }
  },
      template:`
      <section class="resume-section p-3 p-lg-5" id="interests" data-component="interests">

          <div class="w-100">
            <h1 class="mb-5">Interests</h1>
            <div class="text-muted">
              <p>{{interest}}</p>
              <p class="mb-0">{{interest2}}</p>
            </div>
          </div>
        </section>
      `
  });
  export default interests;