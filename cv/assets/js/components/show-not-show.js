const showNotshow = Vue.component('show-not-show', {
    data () {
        return{
            name: 'Karan Jain',
            image: 'assets/img/karan.jpg'
        }
    },
    template: `
<a class="navbar-brand" href="#">
        <span class="d-block d-lg-none"> {{name}} </span>
        <span class="d-none d-lg-block">
            <img v-bind:src="image" class="img-fluid img-profile rounded-circle" alt="my profile pic">
        </span>
    </a>
`
});
export default showNotshow;