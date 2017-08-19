let content = '<section id="navbar-logo">'
content += '<img src="assets/images/instagram-logo.png" width="150" />'
content += '</section>'

Vue.component('instavue-logo', {
    template: content
})

new Vue({
    el: '#navbar'
})