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
            const likes = element.likes.count
            const comments = element.comments.count

            let html = '<section id="user-media">'
            html += `<img src="${media_url}" alt="${caption}" />`
            html += '<section id="media-modal">'
            html += '<section id="media-assets">'
            html += `<span>♥️ ${likes}</span>`
            html += `<span>💬 ${comments}</span>`
            html += '</section>'
            html += '</section>'
            html += '</section>'

            this.refs.media.insertAdjacentHTML('beforeend', html)
        })
    }

    render() {
        return(
            <section ref="media"></section>
        )
    }

}