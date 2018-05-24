import React from 'react'

export default class TopicListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card pt-3 bg-secondary">
                <i className="card-img-top fa fa-desktop fa-4x text-center bg-secondary mt-2"></i>
                <div className="card-body text-center">
                    <h5 className="card-title">{this.props.topic.title}</h5>
                </div>
            </div>
        )
    }
}