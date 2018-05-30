import React from 'react'
import {Link} from 'react-router-dom'

export default class TopicListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.topic.id} className="d-inline bg-dark mr-1">
                <div className="input-group">
                    <h5 className="my-auto px-2">
                        <Link
                            to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>
                            {this.props.topic.title}</Link>
                    </h5>
                    <div className="input-group-append">
                        <button className="btn btn-dark pl-2">
                            <i className="fa fa-times"
                               onClick={() => {
                                   this.props.delete(this.props.topic.id)
                               }}></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}