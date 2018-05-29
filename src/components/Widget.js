import React from 'react'
import {connect} from 'react-redux'

const deleteWidget = (dispatch, id) => (
    dispatch({type: 'delete', id: id}));

const Widget = ({dispatch, widget}) => {
    return (
        <li key={widget.id}>{widget.text}
            <button onClick={() => (deleteWidget(dispatch, widget.id))}>Del</button>
        </li>
    );
};
export const WidgetContainer = connect()(Widget);