import React from 'react'

export default class ModuleEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleId: '',
            courseId: '',
            lesson: '',
            lessons: []
        };
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
    }

    componentDidMount() {
        this.setModuleId(this.props.moduleId);
        this.setCourseId(this.props.courseId);
        this.findAllLessonsForModule(this.props.module.id);
    }

    setModuleId() {

    }

    findAllLessonsForModule() {

    }

    componentWillRecieveProps(newProps) {

    }

    render() {
        return (
            <h1>Module Editor</h1>
        );
    }
}