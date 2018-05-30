import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/action'

const dispatchToPropsMapper = dispatch => ({
    changeListType: (id, size) => (actions.changeListType(id, size, dispatch)),
    changeListItems: (id, items) => (actions.changeListItems(id, items, dispatch)),
    changeWidgetName: (id, newName) => (actions.changeWidgetName(id, newName, dispatch))
});

const stateToPropsMapper = (state) => ({
    preview: state.preview
});

const List = ({widget, changeListType, changeListItems, changeWidgetName}) => {
    let selectElem, inputElem;
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <textarea className="form-control" id="headingText"
                                  placeholder="Enter one list item per line" onChange={() => {
                            changeListItems(widget.id, inputElem.value)
                        }} ref={node => inputElem = node}>
                        </textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <select className="form-control" onChange={() => {
                        changeListType(widget.id, selectElem.value)
                    }} ref={node => selectElem = node}>
                        <option>Ordered</option>
                        <option>Unordered</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="widgetName"
                               placeholder="Widget name" onChange={() => {
                            changeWidgetName(widget.id, inputElem.value)
                        }} ref={node => inputElem = node}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);

export default ListContainer;