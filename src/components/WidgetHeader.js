import React from 'react'
import '../css/widget.style.template.css'

export const WidgetHeader = () => (
    <div className="container pt-5 bg-light">
        <div className="row flex-row-reverse pr-2 pb-3">
            <div className="d-flex float-right my-auto">
                <label className="switch m-auto">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="d-flex float-right my-auto pr-2">
                <h5>Preview</h5>
            </div>
            <div className="d-flex pr-2">
                <button className="btn btn-success m-auto" type="button" name="save">
                    <i className="fa fa-save pr-1"></i>Save
                </button>
            </div>
        </div>
    </div>
)