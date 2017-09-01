import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

//Components
import InstagramImage from './InstagramImage'

export default class InstagramMedia extends React.Component {

    componentDidMount() {
        this.getRecentMedia()
    }

    //Get yourself media
    getRecentMedia() {
        axios.post('/instagram/users/self/media', {}).then((response) => {
            const { data } = response.data

            if ( data.map ) {
                ReactDOM.render(
                    <InstagramImage media={data} />,
                    document.getElementById('media')
                )
            }
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <section id="media"></section>
        )
    }

}