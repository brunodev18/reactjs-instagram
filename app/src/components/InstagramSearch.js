import React from 'react'

export default class InstagramSearch extends React.Component {

    render() {
        return (
            <section id="search-bar">
                <input type="text" name="search-bar" placeholder="Insira o termo para a busca" />
                <button className="search-term" id="searchTerm">🔍</button>
            </section>
        )
    }

}