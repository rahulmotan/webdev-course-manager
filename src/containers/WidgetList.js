import React from 'react'
import {connect} from 'react-redux'
import {WidgetContainer} from '../components/Widget'
import '../../node_modules/font-awesome/css/font-awesome.css'
import * as actions from "../actions/action";

let initialState = {
    widgets: [
        {id: 1, text: 'Widget 1', widgetType: 'Heading'},
        {id: 2, text: 'Widget 2', widgetType: 'Paragraph'},
        {id: 3, text: 'Widget 3', widgetType: 'Heading'}
    ]
};
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
        findAllWidgetsByTopic: (topicId) => (actions.findAllWidgetsByTopic(dispatch, topicId))
        //deleteWidget: () => (deleteWidget(dispatcher))
    }
};

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        //this.props.findAllWidgets();
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