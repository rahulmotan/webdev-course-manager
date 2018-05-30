import {AppConstants as Constants} from "../constants/AppConstants";

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {

        switch (action.type) {
            case Constants.actions.widgets.FIND_ALL:
                return Object.assign(state.widgets, action.widgets);

            case Constants.actions.widgets.ADD:
                return {widgets: [...state.widgets, {id: 4, text: 'Widget 4', widgetType: 'Heading'}]};

            case Constants.actions.widgets.DELETE:
                return {
                    widgets: state.widgets.filter(widget => {
                        return widget.id !== action.id
                    })
                };

            case Constants.actions.widgets.SELECT_TYPE :
                console.log(action);
                let newState = {
                    widgets: state.widgets.filter((widget) => {
                        if (widget.id === action.id) {
                            widget.widgetType = action.widgetType;
                        }
                        return true;
                    })
                };
                return JSON.parse(JSON.stringify(newState));

            case Constants.actions.widgets.FIND_BY_TOPIC:
                return {
                    widgets: [...action.widgets]
                }
            default:
                return state;
        }
    }
;