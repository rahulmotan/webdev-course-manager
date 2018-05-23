import React from 'react'
import "../css/coursebody.style.css";
import CourseService from "../services/CourseService";
import {Link} from 'react-router-dom'

export default class CourseRow
    extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
    }

    deleteCourse(event) {
        let currentTarget = event.currentTarget;
        let value = currentTarget.attributes[1].value;
        this.courseService.deleteCourse(value).then(function (response) {
                if (response.ok) {
                    alert("course deleted!")
                }
            }
        );
        return;
    }

    render() {
        return (
            <tr id={this.props.course.id} key={this.props.courseId}>
                <td>
                    <div>
                        <i className="fa fa-files-o pr-2"></i><Link to={`/course/${this.props.course.id}`}><span
                        className="font-weight-bold text-black-50">{this.props.course.title}</span></Link><i
                        className="fa fa-times fa-2x float-right text-dark" style={{"hover": "cursor"}}
                        onClick={() => {
                            this.props.deleteCourse(this.props.course.id)
                        }}></i></div>

                </td>
            </tr>
        );
    }
}