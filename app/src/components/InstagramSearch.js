import React from 'react'

export default class InstagramSearch extends React.Component {

    render() {
        return (
            <section id="search-bar">
                <section id="search-kind">
                    <label>Type of search: </label>
                    <label>
                        <input type="radio" name="search-kind" id="Users" /> Users
                    </label>
                    <label>
                        <input type="radio" name="search-kind" id="Locations" /> Locations
                    </label>
                </section>
                <input type="text" name="search-bar" placeholder="Type here what do you search..." />
                <button className="search-term" id="searchTerm">🔍</button>
            </section>
        )
    }

}