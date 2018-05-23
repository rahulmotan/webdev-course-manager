import React from 'react'
import ModuleService from "../services/ModuleService";
import ModuleListItem from "../components/ModuleListItem";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleEditor from "./ModuleEditor";

export default class ModuleList
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {title: ''},
            courseId: '',
            module: {title: ''},
            modules: [
                {title: 'Module 1', id: 123},
                {title: 'Module 2', id: 234},
                {title: 'Module 3', id: 345},
                {title: 'Module 4', id: 456},
                {title: 'Module 5', id: 567},
                {title: 'Module 6', id: 678}
            ]
        };
        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setCourse = this.setCourse.bind(this);
        this.deleteModuleItem = this.deleteModuleItem.bind(this);
        this.moduleService = ModuleService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setCourse(this.props.course);
    }

    setCourse(course) {
        this.setState({course: course});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setCourse(newProps.course);
        this.findAllModulesForCourse(newProps.courseId);
    }

    findAllModulesForCourse(courseId) {
        this.moduleService.findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setState({modules: modules});
            });
    }

    createModule() {
        console.log("modules" + this.state.module);
        this.moduleService.createModule(
            this.props.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });

    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    deleteModuleItem(id) {
        console.log(id);
        this.moduleService.deleteModule(id)
            .then(function (response) {
                if (response.ok)
                    alert("Module Deleted");
            }).then(() => {
            this.findAllModulesForCourse(this.state.courseId);
        });
    }

    renderListOfModules() {
        let modules = this.state.modules.map(function (module) {
            return <ModuleListItem module={module} key={module.id} courseId={this.state.courseId}
                                   delete={this.deleteModuleItem}/>
        }, this);
        return modules;
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="row flex-row text-light bg-dark">
                        <div className="col-md-3 m-1">
                            <button className="btn btn-outline-secondary pb-2 border-0 position-relative"><i
                                className="fa fa-times fa-2x p-0 m-auto"></i></button>
                            <h6 className="d-md-inline-flex py-2 pl-1 m-auto position-relative">{this.state.course.title}</h6>
                        </div>
                    </div>
                    <div className="col-md-3 py-2 bg-dark">
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                    <div className="col-md-9"></div>
                    <div className="row">
                        <div className="col-md-4">
                            <input type="text" onChange={this.titleChanged}
                                   value={this.state.module.title}
                                   placeholder="title"
                                   className="form-control"/>
                            <button onClick={this.createModule}
                                    className="btn btn-primary btn-block bg-secondary border-0 py-2">
                                <i className="fa fa-plus"></i>
                            </button>
                            <br/>
                            <ul className="list-group">
                                {this.renderListOfModules()}
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}