import React from 'react'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'
import {AppConstants as Constants} from "../constants/AppConstants";
import {WidgetContainer} from '../components/Widget'

const findAllWidgets = dispatch => {
    fetch(Constants.uri.widgets.LOCAL_HOST)
        .then(response => (response.json()))
        .then(widgets => (dispatch({
                type: Constants.actions.widgets.FIND_ALL,
                widgets: widgets
            })
        ))
};
export const MyComponent = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);
let initialState = {
    widgets: [
        {id: 1, text: 'Widget 1'},
        {id: 2, text: 'Widget 2'},
        {id: 3, text: 'Widget 3'}
    ]
};
const stateToPropertiesMapper = (state) => ({
        widgets: state.widgets
    }
);
const addWidget = (dispatch) => (
    dispatch({type: 'add'}));


const dispatcherToPropsMapper = (dispatcher) => {
    return {
        findAllWidgets: () => (findAllWidgets(dispatcher)),
        addWidget: () => (addWidget(dispatcher)),
        //deleteWidget: () => (deleteWidget(dispatcher))
    }
};

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets();
    }

    render() {
        return (
            <div>
                <h1>Widget Editor</h1>
                <h4>{this.props.widgets.length}</h4>
                <button onClick={this.props.addWidget}>Add</button>
                <ul>
                    {
                        this.props.widgets.map(widget => (
                            <WidgetContainer widget={widget} key={widget.id} deleteWidget={this.props.deleteWidget}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.actions.widgets.FIND_ALL_WIDGETS:
            return {widgets: action.widgets};
        case 'add':
            return {widgets: [...state.widgets, {id: 4, text: 'Widget 4'}]};
        case 'delete':
            return {
                widgets: state.widgets.filter(widget => {
                    return widget.id !== action.id
                })
            };
        default:
            return state;
    }
};
let store = createStore(widgetReducer);

const App = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(WidgetList);