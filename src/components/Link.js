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

const Link = ({widget, preview, changeLinkUrl, changeLinkText, changeWidgetName}) => {
    let inputElem, linkElem, textElem;
    return (
        <div className="col-md-12">
            <div hidden={preview}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="url" className="form-control" id="formGroupExampleInput"
                                   placeholder="Link goes here" value={widget.href} onChange={() => {
                                changeLinkUrl(widget.id, linkElem.value)
                            }} ref={node => linkElem = node}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" id="linkName"
                                   placeholder="Link text" value={widget.text} onChange={() => {
                                changeLinkText(widget.id, textElem.value)
                            }} ref={node => textElem = node}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" id="widgetName"
                                   placeholder="Widget name" value={widget.name} onChange={() => {
                                changeWidgetName(widget.id, inputElem.value)
                            }} ref={node => inputElem = node}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <h4 hidden={preview}>Preview</h4>
                        <a href={widget.href}>{widget.text}</a>
                    </div>
                </div>
            </div>
        </div>
    )
};
const LinkContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Link);
export default LinkContainer