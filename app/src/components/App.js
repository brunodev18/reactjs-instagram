import React from 'react'

//Components
import InstagramNavbar from './InstagramNavbar'
import InstagramContent from './InstagramContent'

export default class App extends React.Component {

    constructor() {
        super()

        this.state = {
            url: 'http://localhost:3000'
        }
    }

    render() {
        return (
            <section>
                <InstagramNavbar url={this.state.url} />
                <InstagramContent />
            </section>
        )
    }

}