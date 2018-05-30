import {AppConstants as Constants} from "../constants/AppConstants";

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
        let autoIncrementId = state.widgets.length * 10;
        let orderNumber = state.widgets.length;
        let newState;
        switch (action.type) {
            case Constants.actions.widgets.FIND_ALL: {
                autoIncrementId = action.widgets.length;
                return Object.assign(state.widgets, action.widgets);
            }

            case Constants.actions.widgets.ADD:
                newState = Object.assign({}, state);
                newState.widgets = [...newState.widgets, {
                    id: autoIncrementId + 3,
                    text: '',
                    widgetType: 'Heading',
                    size: 1,
                    listType: "ordered",
                    orderNumber: orderNumber
                }];
                return newState;

            case Constants.actions.widgets.DELETE:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.filter(widget => {
                    return widget.id !== action.id
                });
                return newState;

            case Constants.actions.widgets.SELECT_TYPE :
                console.log(action);
                newState = {
                    widgets: state.widgets.filter((widget) => {
                        if (widget.id === action.id) {
                            widget.widgetType = action.widgetType;
                        }
                        return true;
                    })
                };
                return JSON.parse(JSON.stringify(newState));

            case Constants.actions.widgets.FIND_BY_TOPIC:
                newState = Object.assign({}, state);
                newState.widgets = action.widgets;
                return newState;

            case Constants.actions.widgets.SAVE_ALL:
                newState = Object.assign({}, state);
                newState.widgets = action.widgets;
                return newState;

            case Constants.actions.widgets.HEADING_SIZE:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                });
                return newState;
            case Constants.actions.widgets.HEADING_TEXT:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.text = action.newText
                    }
                    return Object.assign({}, widget)
                });
                return newState;
            case Constants.actions.widgets.CHANGE_WIDGET_NAME:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                });
                return newState;
            case Constants.actions.widgets.CHANGE_IMAGE_LINK:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                });
                return newState;
            case Constants.actions.widgets.CHANGE_LINK_TEXT:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                });
                return newState;
            case Constants.actions.widgets.CHANGE_LINK:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.href = action.href
                    }
                    return Object.assign({}, widget)
                });
                return newState;

            case Constants.actions.widgets.CHANGE_PARAGRAPH_TEXT:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                });
                return newState;
            case Constants.actions.widgets.CHANGE_LIST_TYPE:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                });
                return newState;
            case Constants.actions.widgets.CHANGE_LIST_ITEMS:
                newState = Object.assign({}, state);
                newState.widgets = newState.widgets.map(widget => {
                    if (widget.id == action.id) {
                        widget.listItems = action.listItems
                    }
                    return Object.assign({}, widget)
                });
                return newState;
            case Constants.actions.widgets.PREVIEW: {
                newState = Object.assign({}, state);
                newState.preview = !state.preview
                return newState
            }
            case Constants.actions.widgets.MOVE_DOWN: {
                let swapOrder = action.widget.orderNumber;
                if (action.widget.orderNumber < state.widgets.length - 1) {
                    let tempWidget = state.widgets[swapOrder];
                    tempWidget.orderNumber += 1;
                    state.widgets[swapOrder] = state.widgets[swapOrder + 1];
                    state.widgets[swapOrder + 1] = tempWidget;
                    state.widgets[swapOrder].orderNumber -= 1;
                    newState = Object.assign({}, state);
                    return JSON.parse(JSON.stringify(newState));
                } else {
                    let w = state.widgets[swapOrder];
                    let tempW = action.widget;
                    let otherIndex = 0;
                    state.widgets = [tempW, ...state.widgets.splice(0, swapOrder)];
                    state.widgets.map(widget => {
                        widget.orderNumber = otherIndex++;
                    });
                    newState = Object.assign({}, state);
                    return newState
                }
            }

            case Constants.actions.widgets.MOVE_UP: {
                let swapOrder = action.widget.orderNumber;
                if (action.widget.orderNumber > 0) {
                    let tempWidget = state.widgets[swapOrder];
                    tempWidget.orderNumber -= 1;
                    state.widgets[swapOrder] = state.widgets[swapOrder - 1];
                    state.widgets[swapOrder - 1] = tempWidget;
                    state.widgets[swapOrder].orderNumber += 1;
                    newState = Object.assign({}, state);
                    return JSON.parse(JSON.stringify(newState));
                } else {
                    let tempWidget = state.widgets[swapOrder];
                    let otherIndex = 0;
                    state.widgets = [...state.widgets.splice(1, state.widgets.length - 1), tempWidget];
                    state.widgets.map(widget => {
                        widget.orderNumber = otherIndex++;

                    });
                    newState = Object.assign({}, state);
                    return newState;
                }
            }

            default:
                return state;
        }
    }
;