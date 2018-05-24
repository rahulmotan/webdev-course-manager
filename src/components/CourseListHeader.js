import React from 'react'

export default class CourseListHeader
    extends React.Component {
    render() {
        return (
            <div className="row flex-row justify-content-between bg-light">
                <div className="col-md-1"></div>
                <div className="col-md-4 py-2 text-black-50 text-left pl-2"><span><strong>Title</strong></span></div>
                <div className="col-md-2 py-2 text-black-50 pl-2 text-center"><span><strong>Owned By</strong></span>
                </div>
                <div className="col-md-2 py-2 text-black-50 text-center"><span><strong>Last Modified</strong></span>
                </div>
                <div className="col-md-1 py-2 text-black-50"><span className="float-left px-2"><i
                    className="fa fa-th fa-2x mr-4"></i></span></div>
                <div className="col-md-1 py-2 text-black-50"><span><i
                    className="fa fa-sort-alpha-asc fa-2x mr-2"></i></span></div>
                <div className="col-md-1"></div>
            </div>
        );
    }
}