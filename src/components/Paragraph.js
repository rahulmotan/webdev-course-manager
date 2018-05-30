import React from 'react'
import * as actions from "../actions/action";
import {connect} from 'react-redux'

const dispatchToPropsMapper = dispatch => ({
    changeParagraphText: (id, text) => (actions.changeParagraphText(id, text, dispatch)),
    changeWidgetName: (id, newName) => (actions.changeWidgetName(id, newName, dispatch))
});

const stateToPropsMapper = (state) => ({
    preview: state.preview
});

const Paragraph = ({widget, changeParagraphText, changeWidgetName}) => {
    let inputElem, textElem;
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <textarea type="text" className="form-control" id="pText"
                                  placeholder="Paragraph text" onChange={() => {
                            changeParagraphText(widget.id, textElem.value)
                        }} ref={node => textElem = node}></textarea>
                    </div>
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
                    <div className="form-group">
                        <h4>Preview text</h4>
                        <p>{widget.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
const ParagraphContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Paragraph);
export default ParagraphContainer