import React from 'react'
import CourseList from "./CourseList"
import CourseEditor from "./CourseEditor"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "../css/coursebody.style.css"

export default class CourseManager
    extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div style={{
                    "background-color": "lightgrey",
                    "padding-bottom": "30%",
                    "overflow-y": "hidden",
                }}>
                    <Route path="/courses" component={CourseList}></Route>
                    <Route path="/course/:courseId" component={CourseEditor}></Route>
                </div>
            </Router>
        );
    }
}

