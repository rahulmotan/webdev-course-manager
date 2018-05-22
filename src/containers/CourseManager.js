import React from 'react'
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseList from "./CourseList"
import "../css/coursebody.style.css"

export default class CourseManager
    extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{"background-color": "lightgrey", "padding-bottom": "100%"}}>
                <CourseList/>
            </div>
        );
    }
}

