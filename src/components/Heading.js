import React from 'react'
import * as actions from "../actions/action"
import {connect} from 'react-redux'

const dispatchToPropsMapper = dispatch => ({
    changeHeadingSize: (id, size) => (actions.changeHeadingSize(id, size, dispatch)),
    changeHeadingText: (id, newText) => (actions.changeHeadingText(id, newText, dispatch)),
    changeWidgetName: (id, newName) => (actions.changeWidgetName(id, newName, dispatch))
});

const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const Heading = ({widget, preview, changeHeadingSize, changeHeadingText, changeWidgetName}) => {
    let nameElem;
    let selectElement;
    let inputElem;
    return (

        <div className="col-md-12">
            <div hidden={preview}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" value={widget.text} className="form-control" id="headingText"
                                   placeholder="Heading text" onChange={() => {
                                changeHeadingText(widget.id, inputElem.value)
                            }}
                                   ref={node => inputElem = node}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <select onChange={() => changeHeadingSize(widget.id, selectElement.value)}
                                className="form-control"
                                ref={node => selectElement = node}
                                value={widget.size}>
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" value={widget.name} className="form-control" id="widgetName"
                                   placeholder="Widget name" onChange={() => {
                                changeWidgetName(widget.id, nameElem.value)
                            }} ref={node => nameElem = node}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <h5 hidden={preview}>Preview</h5>
                        {widget.size == 1 && <h1>{widget.text}</h1>}
                        {widget.size == 2 && <h2>{widget.text}</h2>}
                        {widget.size == 3 && <h3>{widget.text}</h3>}
                    </div>
                </div>
            </div>
        </div>
    )
};

const HeadingContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Heading);

export default HeadingContainer