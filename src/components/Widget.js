import React from 'react'
import {connect} from 'react-redux'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import * as actions from '../actions/action'
import HeadingContainer from '../components/Heading'
import ImageContainer from '../components/Image'
import ParagraphContainer from '../components/Paragraph'
import LinkContainer from '../components/Link'
import ListContainer from '../components/List'


const dispatchToPropsMapper = dispatch => ({
    changeWidget: (id, selectElement) => (actions.changeWidget(id, selectElement, dispatch)),
    deleteWidget: (id) => (actions.deleteWidget(id, dispatch)),
    moveUp: (id, widget) => (actions.moveUp(id, widget, dispatch)),
    moveDown: (id, widget) => (actions.moveDown(id, widget, dispatch))
});
const stateToPropsMapper = (state, prevProps) => ({
    widget: prevProps.widget,
    preview: state.preview
});
const Widget = ({widget, preview, changeWidget, deleteWidget, moveUp, moveDown, dispatch}) => {
    let selectElement;
    return (
        <li className="list-group-item border-1 border-secondary" key={widget.id} id={widget.id}>
            <div className="container widget-container">
                <div className="row">
                    <div className="col-md-12 text-dark pt-2">
                        <div className="row flex-row pb-1">
                            <div className="col-md-6 d-inline-flex">
                                <h4 className="my-auto" hidden={preview}>{widget.widgetType + " "}Widget</h4>
                            </div>
                            <div className="col-md-6">
                                <div className="d-inline-flex pr-2 float-right">
                                    <button hidden={preview} onClick={() => {
                                        deleteWidget(widget.id)
                                    }} className="btn btn-danger"><i className="fa fa-times"></i></button>
                                </div>
                                <div className="d-inline-flex pr-2 float-right my-auto" style={{height: 37 + 'px'}}>
                                    <select hidden={preview} onChange={() => {
                                        changeWidget(widget.id, selectElement)
                                    }}
                                            ref={node => selectElement = node} value={widget.widgetType}>
                                        <option>Heading</option>
                                        <option>List</option>
                                        <option>Paragraph</option>
                                        <option>Link</option>
                                        <option>Image</option>
                                    </select>
                                </div>
                                <div className="d-inline-flex pr-2 float-right">
                                    <button hidden={preview} onClick={() => {
                                        moveDown(widget.id, widget)
                                    }} className="btn btn-warning"><i
                                        className="fa fa-arrow-down"></i></button>
                                </div>
                                <div className="d-inline-flex pr-2 float-right">
                                    <button hidden={preview} onClick={() => {
                                        moveUp(widget.id, widget)
                                    }} className="btn btn-warning"><i
                                        className="fa fa-arrow-up"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {widget.widgetType === 'Heading' && <HeadingContainer widget={widget} preview={preview}/>}
                    {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget} preview={preview}/>}
                    {widget.widgetType === 'Image' && <ImageContainer widget={widget} preview={preview}/>}
                    {widget.widgetType === 'Link' && <LinkContainer widget={widget} preview={preview}/>}
                    {widget.widgetType === 'List' && <ListContainer widget={widget} preview={preview}/>}
                </div>
            </div>
        </li>
    );
};
export const WidgetContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Widget);