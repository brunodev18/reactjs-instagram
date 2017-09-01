import React from 'react'

export default class InstagramImage extends React.Component {

    componentDidMount() {
        this.insertImage()
    }

    insertImage() {
        const media = this.props.media
        console.log(media)
        media.map((element) => {
            const media_url = element.images.thumbnail.url
            const caption = element.caption ? element.caption.text : ''

            this.refs.media.insertAdjacentHTML('beforeend', `<img src="${media_url}" alt="${caption}" />`)
        })
    }

    render() {
        return(
            <section ref="media"></section>
        )
    }

}