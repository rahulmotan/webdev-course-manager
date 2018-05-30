import React from 'react'
import {Link} from 'react-router-dom'

export default class TopicListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.topic.id} className="card pt-3 bg-secondary">
                <div className="card-body text-center p-0">
                    <h5 className="card-title"><Link
                        to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>{this.props.topic.title}</Link>
                    </h5>
                </div>
            </div>
        )
    }
}