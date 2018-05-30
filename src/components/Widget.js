import React from 'react'
import {connect} from 'react-redux'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import * as actions from '../actions/action'

const Heading = ({widget}) => {
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="headingText"
                               placeholder={widget.text}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <select className="form-control" aria-selected={"Heading " + widget.size}>
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                        <option>Heading 3</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="widgetName"
                               placeholder="Widget name"/>
                    </div>
                </div>
            </div>
            <div>
                Widget Text : {widget.text}
                Widget Size : {widget.size}
                Widget Name : {widget.name}
                Widget Order : {widget.orderNumber}
            </div>
        </div>
    )
};

const Paragraph = () => {
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="pText"
                               placeholder="Paragraph text"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="widgetName"
                               placeholder="Widget name"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <h4>Preview text</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Image = () => {
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="url" className="form-control" id="imgUrl"
                               placeholder="Image URL"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="widgetName"
                               placeholder="Widget name"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <h4>Preview Image</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};
const Link = () => {
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="url" className="form-control" id="formGroupExampleInput"
                               placeholder="Link goes here"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="linkName"
                               placeholder="Link text"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="widgetName"
                               placeholder="Widget name"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <h4>Preview</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};
const List = () => {
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <textarea className="form-control" id="headingText"
                                  placeholder="Enter one list item per line">
                        </textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <select className="form-control">
                        <option>Ordered</option>
                        <option>Unordered</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="widgetName"
                               placeholder="Widget name"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
const dispatchToPropsMapper = dispatch => ({
    changeWidget: (id, selectElement) => (actions.changeWidget(id, selectElement, dispatch)),
    deleteWidget: (id) => (actions.deleteWidget(id, dispatch))
});
const stateToPropsMapper = (state, prevProps) => ({
    widget: prevProps.widget
});
const Widget = ({widget, changeWidget, deleteWidget, dispatch}) => {
    let selectElement;
    return (
        <li className="list-group-item border-1 border-secondary" key={widget.id} id={widget.id}>
            <div className="container widget-container">
                <div className="row">
                    <div className="col-md-12 text-dark pt-2">
                        <div className="row flex-row pb-1">
                            <div className="col-md-6 d-inline-flex">
                                <h4 className="my-auto">{widget.widgetType + " "}Widget</h4>
                            </div>
                            <div className="col-md-6">
                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={() => {
                                        deleteWidget(widget.id)
                                    }}
                                            className="btn btn-danger"><i className="fa fa-times"></i></button>
                                </div>
                                <div className="d-inline-flex pr-2 float-right my-auto" style={{height: 37 + 'px'}}>
                                    <select onChange={() => {
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
                                    <button className="btn btn-warning"><i className="fa fa-arrow-down"></i></button>
                                </div>
                                <div className="d-inline-flex pr-2 float-right">
                                    <button className="btn btn-warning"><i className="fa fa-arrow-up"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {widget.widgetType === 'Heading' && <Heading widget={widget}/>}
                    {widget.widgetType === 'Paragraph' && <Paragraph widget={widget}/>}
                    {widget.widgetType === 'Image' && <Image widget={widget}/>}
                    {widget.widgetType === 'Link' && <Link widget={widget}/>}
                    {widget.widgetType === 'List' && <List widget={widget}/>}
                </div>
            </div>
        </li>
    );
};
export const WidgetContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Widget);