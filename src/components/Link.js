import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/action'

const dispatchToPropsMapper = dispatch => ({
    changeLinkUrl: (id, href) => (actions.changeLinkUrl(id, href, dispatch)),
    changeLinkText: (id, text) => (actions.changeLinkText(id, text, dispatch)),
    changeWidgetName: (id, newName) => (actions.changeWidgetName(id, newName, dispatch))
});

const stateToPropsMapper = (state) => ({
    preview: state.preview
});

const Link = ({widget, changeLinkUrl, changeLinkText, changeWidgetName}) => {
    let inputElem, linkElem, textElem;
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="url" className="form-control" id="formGroupExampleInput"
                               placeholder="Link goes here" onChange={() => {
                            changeLinkUrl(widget.id, linkElem.value)
                        }} ref={node => linkElem = node}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="linkName"
                               placeholder="Link text" onChange={() => {
                            changeLinkText(widget.id, textElem.value)
                        }} ref={node => textElem = node}/>
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
                        <h4>Preview</h4>
                        {widget.href}
                    </div>
                </div>
            </div>
        </div>
    )
};
const LinkContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Link);
export default LinkContainer