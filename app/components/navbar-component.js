let html = '<section id="navbar-options">'
html += '<ul>'
html += '<li><a href="#">Users</a></li>'
html += '<li><a href="#">Tags</a></li>'
html += '<li><a href="#">Location</a></li>'
html += '</ul>'
html += '<section>'

Vue.component('instavue-navbar-options', {
    template: html
})

new Vue({
    el: '#navbar'
})