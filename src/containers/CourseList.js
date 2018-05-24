import React, {Component} from 'react'
import CourseService from "../services/CourseService";
import CourseRow from "../components/CourseRow";
import CourseListHeader from "../components/CourseListHeader";

export default class CourseList
    extends Component {
    constructor() {
        super();
        this.state = {
            course: {title: "", created: '', modified: ''},
            courses: []
        };
        this.courseService = CourseService.instance;
        this.deleteCourse = this.deleteCourse.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
    }

    deleteCourse(id) {
        console.log("delete" + id);
        this.courseService.deleteCourse(id).then(function (response) {
                if (response.ok) {
                    alert("Course deleted!");
                }
            }
        ).then(() => {
            this.findAllCourses();
        });
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
            })
    }

    renderCourseRows() {
        let courses = null;
        if (this.state) {
            console.log(this.state);
            courses = this.state.courses.map(function (course) {
                return <CourseRow key={course.id} course={course} deleteCourse={this.deleteCourse}/>
            }, this)
        }
        return (courses);
    }


    titleChanged(event) {
        console.log(event.target.value);
        let date = new Date().toISOString();
        let created = date.split('T')[0];
        this.setState({course: {title: event.target.value, created: created, modified: created}});
    }

    createCourse(event) {
        this.courseService.createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <span className="navbar-brand">Course Manager</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mr-5 pr-5" id="navbarSupportedContent">
                            <label htmlFor="Add Course" className="ml-5"></label>
                            <input className="form-control form-control-lg mr-2" type="text"
                                   placeholder="Create Course"
                                   aria-label="Create course" onChange={this.titleChanged}
                                   value={this.state.course.title}/>
                            <span onClick={this.createCourse}><i className="fa fa-plus-circle fa-3x"
                                                                 style={{
                                                                     "color": "red",
                                                                     "border-radius": "50px",
                                                                     "background": "white"
                                                                 }}></i></span>
                        </div>
                    </nav>
                    <CourseListHeader/>
                </header>
                <div className="container p-0" style={{"background": "white", "padding-bottom": "30%"}}>
                    <table className="table table-hover table-responsive-md p-0">
                        <tbody>
                        {this.renderCourseRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
