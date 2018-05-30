import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/action'

const dispatchToPropsMapper = dispatch => ({
    changeListType: (id, type) => (actions.changeListType(id, type, dispatch)),
    changeListItems: (id, items) => (actions.changeListItems(id, items, dispatch)),
    changeWidgetName: (id, newName) => (actions.changeWidgetName(id, newName, dispatch))
});

const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const List = ({widget, changeListType, changeListItems, changeWidgetName}) => {
    let selectElem, inputElem, textElem;
    let textItems = [];
    if (widget.listItems) {
        textItems = widget.listItems.split("\n");
    }
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <textarea className="form-control" id="headingText"
                                  placeholder="Enter one list item per line" onChange={() => {
                            changeListItems(widget.id, textElem.value)
                        }} ref={node => textElem = node}>
                        </textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <select className="form-control" value={widget.listType} onChange={() => {
                        changeListType(widget.id, selectElem.value)
                    }} ref={node => selectElem = node}>
                        <option value="ordered">Ordered</option>
                        <option value="unordered">Unordered</option>
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
            <div className="row">
                <div className="col-md-12">
                    <h5>Preview</h5>
                    {widget.listType == "ordered" &&
                    <ol>
                        {textItems.map(item => (
                            <li>{item}</li>
                        ))}
                    </ol>}
                    {widget.listType == "unordered" &&
                    <ul>
                        {textItems.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>}
                </div>
            </div>
        </div>
    )
};

const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);

export default ListContainer;