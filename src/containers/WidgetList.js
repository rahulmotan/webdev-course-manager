import React from 'react'
import {connect} from 'react-redux'
import {WidgetContainer} from '../components/Widget'
import '../../node_modules/font-awesome/css/font-awesome.css'
import * as actions from "../actions/action";
import {saveAllWidgets} from "../actions/action";

let newId;
const stateToPropertiesMapper = (state, prevData) => {
    console.log(prevData);
    return {
        topicId: state.topicId,
        widgets: state.widgets,
        prevTopicId: prevData.topicId,
        prevTopic: prevData.topic
    }
};


const dispatcherToPropsMapper = dispatch => {
    return {
        findAllWidgets: () => (actions.findAllWidgets(dispatch)),
        addWidget: () => (actions.addWidget(dispatch)),
        findAllWidgetsByTopic: (topicId) => (actions.findAllWidgetsByTopic(dispatch, topicId)),
        saveAllWidgets: (widgets, topicId) => (actions.saveAllWidgets(widgets, topicId, dispatch))
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
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="d-flex float-right my-auto pr-2">
                            <h5>Preview</h5>
                        </div>
                        <div className="d-flex pr-2">
                            <button onClick={() => {
                                saveAllWidgets(this.props.widgets, this.props.prevTopicId)
                            }} className="btn btn-success m-auto" type="button" name="save">
                                <i className="fa fa-save pr-1"></i>Save
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={this.props.addWidget}>Add</button>
                <ul className="list-group">
                    {
                        this.props.widgets.map(widget => (
                            <WidgetContainer widget={widget} key={widget.id}/>
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