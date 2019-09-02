import React from "react"
import Thumbnail from "./Thumbnail";
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Ubud from "./Ubud"

function Projects(props) {
    return (
        <BrowserRouter>
            <div>
                <h1>Projects</h1>
                <Thumbnail
                    link="/ubud"
                    image="https://images.unsplash.com/photo-1559603739-f9d7d50360a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    title="Ubud"
                    category=""
                />
            </div>
            <Route path="/ubud" component={Ubud} />
        </BrowserRouter>
    )
}

export default Projects