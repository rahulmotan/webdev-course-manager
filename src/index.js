import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/jquery/dist/jquery'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './css/coursebody.style.css'
import CourseManager from "./containers/CourseManager";

ReactDOM.render(
    <div style={{"background-color": "lightgray"}}>
        <CourseManager/>
    </div>, document.getElementById('root'));

