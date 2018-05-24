import React from 'react'
import {Link} from 'react-router-dom'

export default class LessonListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item m-1 px-0 py-1">
                <span className="float-left pl-1"><Link
                    to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}</Link></span>
                <span className="float-right pl-2">
                        <i className="fa fa-times-circle"
                           onClick={() => {
                               this.props.delete(this.props.lesson.id)
                           }}></i>
                    </span>
            </li>
        );
    }
}