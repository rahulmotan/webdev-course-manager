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

    render() {
        return (
            <tr id={this.props.course.id} key={this.props.courseId}>
                <td className="w-50">
                    <div>
                        <i className="fa fa-files-o pr-2"></i>
                        <Link to={`/course/${this.props.course.id}`}>
                            <span className="font-weight-bold text-black-50">{this.props.course.title}</span>
                        </Link>
                    </div>
                </td>
                <td>
                    me
                </td>
                <td>
                    <div>
                        <span className="font-weight-bold text-black-50">{this.props.course.modified}</span>
                        <i className="fa fa-times fa-2x float-right text-dark" style={{"hover": "cursor"}}
                           onClick={() => {
                               this.props.deleteCourse(this.props.course.id)
                           }}></i>
                    </div>
                </td>
            </tr>
        );
    }
}