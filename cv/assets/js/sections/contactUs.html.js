const ContactUsHTML = `<section class="resume-section p-3 p-lg-5" id="contact" data-component="contact">
        <h4><strong>Contact form</strong></h4>
        <p class="text-muted">
            GET IN TOUCH
        </p>
        <div class="cform" id="contact-form">
            <form class="contactForm" id="app" @submit="checkForm" action="/something" method="post">
              <p :if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                  <li class='text-danger' v-for="error in errors">{{ error }}</li>
                  </ul>
              </p>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input :class="[ errors.includes('Name required.') ? 'bg-danger' : 'bg-success' ]" type="text" name="firstName" class="form-control" id="name" v-model="firstName">
                    
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                    <input :class="[ errors.includes('Email required.') ? 'bg-danger' : 'bg-success' ]" type="email" class="form-control" name="email" id="email"
                    v-model="email">
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                    <input :class="[ errors.includes('Subject required.') ? 'bg-danger' : 'bg-success' ]" type="text" class="form-control" name="subject" id="subject"
                    v-model="subject">
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                    <textarea :class="[ errors.includes('Message required.') ? 'bg-danger' : 'bg-success' ]" class="form-control" name="message" rows="5" v-model="message"></textarea>
                </div>

                <div class="text-center mb-3"><button type="submit" class="btn btn-lg btn-theme">Send Message</button></div>
            </form>
        </div>
          </section>`;
export default ContactUsHTML;