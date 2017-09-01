const navbarOptions = new Vue({
    el: '#navbar-options',
    data: {
        userImage: ''
    },
    mounted: () => {
        const request = ajax({
            method: 'POST',
            url: 'http://localhost:3000/instagram/users/self'
        })

        request.then((response) => {
            console.log(response.data)
        })
    }
})