import React from 'react';
import CourseService from "../services/CourseService";
import ModuleList from "./ModuleList";


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
            .then((course) => {
                this.setState({course: course})
            })
    }

    setCourse(course) {
        this.setState({course: course});
    }

    render() {
        return (
            <div className="container-fluid">
                <ModuleList courseId={this.state.courseId} course={this.state.course}/>
            </div>
        );
    }
}
