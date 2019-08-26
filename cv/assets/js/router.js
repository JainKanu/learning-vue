import about from "./sections/about.js";
import experience from "./sections/experience.js";
import education from "./sections/education.js";
import Skills from "./sections/Skills.js";
import interests from "./sections/interests.js";
import Contact from "./sections/ContactUs.js";
import Blog from "./sections/Blog.js";
const routes = [
    { path: '/',name:'landingpage', component: about },
    { path: '/about',name:'about', component: about },
    { path: '/experience',name:'experience', component: experience },
    { path: '/education',name:'education', component: education },
    { path: '/Skills',name:'Skills', component: Skills },
    { path: '/interests',name:'interests', component: interests },
    { path: '/Contact',name:'Contact', component: Contact },
  ]
  const router = new VueRouter({
    routes // short for `routes: routes`
  }) 

export default router;
