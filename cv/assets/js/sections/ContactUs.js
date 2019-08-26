import ContactUsHtml from "./contactUs.html.js";
const ContactUs = Vue.component('contactUs',{

        data () {
          return{
            errors:[],
            firstName:null,
            email:null,
            subject:null,
            message:null,
          }
      },
        methods:{
            checkForm:function(e) {
            if(this.firstName && this.email && this.subject && this.message) return true;
            this.errors = [];
            if(!this.firstName) this.errors.push("Name required.");
            if(!this.email) this.errors.push("Email required.");
            if(!this.subject) this.errors.push("Subject required.");
            if(!this.message) this.errors.push("Message required.");
            console.log(this.errors);
            e.preventDefault();
            }
        },
          template:ContactUsHtml
      });
export default ContactUs;