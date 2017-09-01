import React from 'react'

//Components
import InstagramSearch from './InstagramSearch'
import InstagramMedia from './InstagramMedia'

export default class InstagramContent extends React.Component {

    render() {
        return (
            <section id="content">
                <InstagramSearch />
                <InstagramMedia />
            </section>
        )
    }

}