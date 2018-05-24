import React from 'react'
import LessonService from "../services/LessonService";
import LessonListItem from "../components/LessonListItem";

export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {title: '', id: ''},
            lessons: [{title: 'Mocked1'}, {title: 'Mocked2'}]
        };
        this.lessonService = LessonService.instance;
        this.createLesson = this.createLesson.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.setLesson = this.setLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        //this.renderLessonTabs = this.renderLessonTabs.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setLesson(title) {
        this.setState({lesson: {title: title}});
    }

    setLessons(lessons) {
        this.setState({lessons: lessons});
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService.findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {
                this.setLessons(lessons);
            });

    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setLesson(event.target.value);
    }

    createLesson() {
        this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            });
        this.setLesson("");
    }

    deleteLesson(lessonId) {
        this.lessonService.deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            })
    }

    renderLessonTabs() {
        let lessons = this.state.lessons.map(function (lesson) {
            return <LessonListItem lesson={lesson} key={lesson.id}
                                   delete={this.deleteLesson}/>
        }, this);
        return lessons;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg nav-pills mt-0 mb-0 navbar-light bg-dark pt-2">
                <div className="form-inline">
                    <div className="input-group">
                        <input type="text" onChange={this.titleChanged} value={this.state.lesson.title}
                               placeholder="lesson title"
                               className="form-control"/>
                        <div className="input-group-append">
                            <button onClick={this.createLesson}
                                    className="btn btn-primary btn-block bg-secondary border-0 py-2">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-pills nav-fill">
                    {this.renderLessonTabs()}
                </ul>
            </nav>
        );

    }
}