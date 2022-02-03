import React, { Component } from 'react'
import "../style/Footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer-div">
                <p>Made by <a href="https://abclinks.vercel.app" target="_blank" rel="noopener noreferrer">uvacoder</a></p>
                <p>Built with React, Hosted on <a href="https://github.com/uvacoder" target="blank">Github</a></p>
            </div>
        )
    }
}
