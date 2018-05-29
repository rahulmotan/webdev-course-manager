import React from 'react'

export default class TopicListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card pt-3 bg-secondary">
                <div className="card-body text-center p-0">
                    <h5 className="card-title">{this.props.topic.title}</h5>
                </div>
            </div>
        )
    }
}