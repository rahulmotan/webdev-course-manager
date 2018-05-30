import React from 'react'
import * as actions from "../actions/action"
import {connect} from 'react-redux'

const dispatchToPropsMapper = dispatch => ({
    changeImageUrl: (id, newLink) => (actions.changeImageUrl(id, newLink, dispatch)),
    changeWidgetName: (id, newName) => (actions.changeWidgetName(id, newName, dispatch))
});

const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const Image = ({widget, preview, changeWidgetName, changeImageUrl}) => {
    let inputElem, srcElem;
    return (
        <div className="col-md-12">
            <div hidden={preview}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="url" value={widget.src} className="form-control" id="imgUrl"
                                   placeholder="Image URL" onChange={() => {
                                changeImageUrl(widget.id, srcElem.value)
                            }}
                                   ref={node => srcElem = node}/>
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
                        <h4 hidden={preview}>Preview Image</h4>
                        <div className="col-md-2">
                            <img src={widget.src}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);
export default ImageContainer


