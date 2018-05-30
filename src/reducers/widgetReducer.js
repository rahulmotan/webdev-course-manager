import {AppConstants as Constants} from "../constants/AppConstants";

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
        let autoIncrementId = state.widgets.length * 10;
        switch (action.type) {
            case Constants.actions.widgets.FIND_ALL: {
                autoIncrementId = action.widgets.length;
                return Object.assign(state.widgets, action.widgets);
            }

            case Constants.actions.widgets.ADD:
                return {
                    widgets: [...state.widgets, {
                        id: autoIncrementId + 3,
                        text: 'Heading Text',
                        widgetType: 'Heading',
                        size: 1
                    }]
                };

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
                };

            case Constants.actions.widgets.SAVE_ALL:
                return {
                    widgets: [...action.widgets]
                };

            case Constants.actions.widgets.HEADING_SIZE:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.size = action.size
                        }
                        return Object.assign({}, widget)
                    })
                };
            case Constants.actions.widgets.HEADING_TEXT:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.text = action.newText
                        }
                        return Object.assign({}, widget)
                    })
                };
            case Constants.actions.widgets.CHANGE_WIDGET_NAME:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.name = action.name
                        }
                        return Object.assign({}, widget)
                    })
                };
            case Constants.actions.widgets.CHANGE_IMAGE_LINK:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.src = action.src
                        }
                        return Object.assign({}, widget)
                    })
                };
            case Constants.actions.widgets.CHANGE_LINK_TEXT:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.text = action.text
                        }
                        return Object.assign({}, widget)
                    })
                };
            case Constants.actions.widgets.CHANGE_LINK:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.href = action.href
                        }
                        return Object.assign({}, widget)
                    })
                };
            case Constants.actions.widgets.CHANGE_PARAGRAPH_TEXT:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.text = action.text
                        }
                        return Object.assign({}, widget)
                    })
                };
            case Constants.actions.widgets.CHANGE_LIST_TYPE:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.listType = action.listType
                        }
                        return Object.assign({}, widget)
                    })
                };
            case Constants.actions.widgets.CHANGE_LIST_ITEMS:
                return {
                    widgets: state.widgets.map(widget => {
                        if (widget.id == action.id) {
                            widget.listItems = action.listItems
                        }
                        return Object.assign({}, widget)
                    })
                };
            default:
                return state;
        }
    }
;