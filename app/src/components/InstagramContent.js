import React from 'react'

//Components
import InstagramSearch from './InstagramSearch'

export default class InstagramContent extends React.Component {

    render() {
        return (
            <section id="content">
                <InstagramSearch />
            </section>
        )
    }

}