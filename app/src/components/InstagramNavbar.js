import React from 'react'
import axios from 'axios'

export default class InstagramNavbar extends React.Component {

    constructor() {
        super()

        this.state = {
            userName: ''
        }
    }

    componentDidMount() {
        this.getUser()
    }

    //Get yourself data
    getUser() {
        axios.post('/instagram/users/self', {})
        .then((response) => {
            const { data } = response.data
            try {
                console.log(data)
                this.setState({userName: data.username})
                this.refs.profilePicture.insertAdjacentHTML('beforeend', `<img class="user-picture" src="${data.profile_picture}" />`)
            } catch (e) {
                console.log(e)
            }
        }).catch((error) => console.log(error))
    }

    render() {
        return(
            <section id="navbar">
                <nav>
                    <section id="navbar-logo">
                        <img src="/images/instagram-logo.png" width="150" />
                    </section>
                    <section id="navbar-options">
                        <ul>
                            <li><a href="#">Olá, {this.state.userName}</a></li>
                            <li><a href="#" ref="profilePicture"></a></li>
                        </ul>
                    </section>
                </nav>
            </section>
        )
    }

}