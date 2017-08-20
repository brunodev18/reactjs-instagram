let searchbar = '<section id="search-bar"><input type="text" name="search-bar" placeholder="Insira o termo para a busca" />'
searchbar += '<button class="search-term" id="searchTerm">🔍</button></section>'

Vue.component('instavue-searchbar', {
    template: searchbar
})

new Vue({
    el: '#content'
})