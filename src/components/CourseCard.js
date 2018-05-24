import React from 'react'
import {Link} from 'react-router-dom'

export default class CourseCard
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card" id={this.props.course.id} key={this.props.courseId}>
                <i className="card-img-top fa fa-user-circle fa-3x text-center pt-3"></i>
                <div className="card-body p-0">
                    <div className="card-title">
                        <div className="p-1">
                            <i className="fa fa-files-o pr-2"></i>
                            <Link to={`/course/${this.props.course.id}`}>
                                <p className="card-text font-weight-bold text-black-50">{this.props.course.title}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated on {this.props.course.modified}</small>
                </div>
            </div>
        );
    }
}