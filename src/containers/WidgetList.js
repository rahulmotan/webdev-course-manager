import React from 'react'
import {WidgetContainer} from '../components/Widget'
import '../../node_modules/font-awesome/css/font-awesome.css'
import * as actions from "../actions/action";
import {connect} from 'react-redux'

let newId;
const stateToPropertiesMapper = (state, prevData) => {
    console.log(prevData);
    return {
        topicId: state.topicId,
        widgets: state.widgets,
        prevTopicId: prevData.topicId,
        prevTopic: prevData.topic,
        previewMode: state.preview
    }
};


const dispatcherToPropsMapper = dispatch => {
    return {
        findAllWidgets: () => (actions.findAllWidgets(dispatch)),
        addWidget: () => (actions.addWidget(dispatch)),
        findAllWidgetsByTopic: (topicId) => (actions.findAllWidgetsByTopic(dispatch, topicId)),
        saveAllWidgets: (widgets, topicId) => (actions.saveAllWidgets(widgets, topicId, dispatch)),
        togglePreview: () => (actions.togglePreview(dispatch))
    }
};

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.prevTopicId !== newId) {
            newId = newProps.prevTopicId;
            this.props.findAllWidgetsByTopic(newId);
        }
    }

    render() {
        return (
            <div>
                <div className="container pt-5 bg-light">
                    <div className="row flex-row-reverse pr-2 pb-3">
                        <div className="d-flex float-right my-auto">
                            <label className="switch m-auto">
                                <input type="checkbox" onClick={
                                    this.props.togglePreview
                                }/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="d-flex float-right my-auto pr-2">
                            <h5>Preview</h5>
                        </div>
                        <div className="d-flex pr-2">
                            <button hidden={this.props.previewMode} onClick={() => {
                                this.props.saveAllWidgets(this.props.widgets, this.props.prevTopicId)
                            }} className="btn btn-success m-auto" type="button" name="save">
                                <i className="fa fa-save pr-1"></i>Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-danger floating-add-widget"
                            onClick={this.props.addWidget}>
                        <i className="fa fa-plus-square fa-2x"></i>
                    </button>
                </div>
                <ul className="list-group">
                    {
                        this.props.widgets.map(widget => (
                            <WidgetContainer widget={widget} key={widget.id} preview={this.props.previewMode}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const App = connect(stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App;