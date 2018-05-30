import React from 'react'
import {AppConstants as Constants} from "../constants/AppConstants";

export const findAllWidgets = dispatch => {
    fetch(Constants.uri.widgets.LOCAL_HOST)
        .then(response => (response.json()))
        .then(widgets => (dispatch({
                type: Constants.actions.widgets.FIND_ALL,
                widgets: widgets
            })
        ))
};

export const findAllWidgetsByTopic = (dispatch, topicId) => (
    fetch(Constants.uri.widgets.FIND_ALL_OR_CREATE_BY_TOPIC_ID.replace('TID', topicId))
        .then(respone => (respone.json()))
        .then(widgets => (dispatch({
            type: Constants.actions.widgets.FIND_BY_TOPIC,
            widgets: widgets
        })))
);

export const saveAllWidgets = (dispatch) => (
    dispatch({type: Constants.actions.widgets.SAVE_ALL})
);

export const previewWidgets = dispatch => (
    dispatch({type: Constants.actions.widgets.PREV})
);
export const addWidget = (dispatch) => (
    dispatch({type: Constants.actions.widgets.ADD})
);

export const deleteWidget = (id, dispatch) => (
    dispatch({type: Constants.actions.widgets.DELETE, id: id})
);

export const changeWidget = (id, selectElement, dispatch) => ({
    type: Constants.actions.widgets.SELECT_TYPE,
    id: id,
    widgetType: selectElement.value
});