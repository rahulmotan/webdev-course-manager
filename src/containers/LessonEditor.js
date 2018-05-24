import React from 'react'
import TopicTabs from "./TopicTabs";

export default class LessonEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: ''
        };
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
    }

    componentDidMount() {
        this.setModuleId(this.props.match.params.moduleId);
        this.setCourseId(this.props.match.params.courseId);
        this.setLessonId(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <TopicTabs lessonId={this.state.lessonId} courseId={this.state.courseId}
                       moduleId={this.state.moduleId}/>
        );
    }
}