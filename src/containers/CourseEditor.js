import React from 'react';
import CourseService from "../services/CourseService";


export default class CourseEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.setCourse = this.setCourse.bind(this);
        this.state = {
            course: {},
            courseId: ''
        };
        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectCourse(
            this.props.match.params.courseId
        );
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
        this.courseService.findCourseById(courseId)
            .then((course)=>{
                this.setState({course: course})
            })
    }

    setCourse(course) {
        this.setState({course: course});
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">{this.state.course.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-pills mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Build<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Theme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps</a>
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
