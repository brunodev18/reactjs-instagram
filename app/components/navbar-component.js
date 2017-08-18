let html = '<navbar>'
html += '<section id="navbar-options">'
html += '<ul>'
html += '<li><a href="#">Users</a></li>'
html += '<li><a href="#">Tags</a></li>'
html += '<li><a href="#">Location</a></li>'
html += '</ul>'
html += '<section>'
html += '</navbar>'

Vue.component('instavue-navbar', {
    template: html
})

new Vue({
    el: '#navbar'
})