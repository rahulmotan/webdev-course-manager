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
            module: {title: '', id: ''},
            modules: []
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
        this.setState({module:{title:''}});
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    deleteModuleItem(id) {
        let selection = window.confirm("Are you sure you want to delete this?");
        if (selection) {
            this.moduleService.deleteModule(id)
                .then(function (response) {
                    if (response.ok)
                        alert("Module Deleted");
                }).then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
        } else {
            return;
        }
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
                <div className="row">
                    <div className="col-md-4 bg-dark pt-0 pb-2" style={{"min-height":"100vh"}}>
                        <div className="d-flex flex-row text-light">
                            <div className=" ml-0 p-2 my-auto">
                                <button className="btn btn-outline-secondary border-0 m-0"><i
                                    className="fa fa-times fa-2x p-0 m-auto"></i></button>
                            </div>
                            <div className="p-2 my-auto">
                                <h6 className="mt-2">{this.state.course.title}</h6>
                            </div>
                        </div>
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
                    <div className="col-md-8 px-0 mr-0">
                        <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}></Route>
                    </div>

                </div>
            </Router>
        )
    }
}