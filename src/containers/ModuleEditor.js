import React from 'react'
import LessonTabs from "./LessonTabs";

export default class ModuleEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleId: '',
            courseId: '',
            modules: []
        }

        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
    }

    componentDidMount() {
        this.setModuleId(this.props.match.params.moduleId);
        this.setCourseId(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <div className="my-auto">
                <LessonTabs moduleId={this.state.moduleId} courseId={this.state.courseId}/>
            </div>
        );
    }
}