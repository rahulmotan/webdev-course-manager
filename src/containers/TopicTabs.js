import React from 'react'
import TopicService from "../services/TopicService";
import TopicListItem from "../components/TopicListItem";
import {Route} from 'react-router-dom'
import TopicEditor from "./TopicEditor";
import "../css/widget.style.template.css"


export default class TopicTabs
    extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {title: ''},
            topics: []
        };
        this.topicService = TopicService.instance;
        this.createTopic = this.createTopic.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopic = this.setTopic.bind(this);
        this.setTopics = this.setTopics.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);

    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.findAllTopicsForLesson(newProps.lessonId);
    }

    findAllTopicsForLesson(lessonId) {
        this.topicService.findAllTopicsForLesson(lessonId)
            .then((topics) => {
                this.setTopics(topics);
            });
    }

    createTopic() {
        this.topicService.createTopic(this.state.lessonId, this.state.topic)
            .then(() => {
                this.findAllTopicsForLesson(this.state.lessonId);
            });
        this.setTopic("");
    }

    deleteTopic(topicId) {
        this.topicService.deleteTopic(topicId)
            .then(() => {
                this.findAllTopicsForLesson(this.state.lessonId);
            });
    }

    setTopics(topics) {
        this.setState({topics: topics});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setTopic(title) {
        this.setState({topic: {title: title}})
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setTopic(event.target.value);
    }

    renderTopicTabs() {
        let topics = this.state.topics.map(function (topic) {
            return <TopicListItem topic={topic} key={topic.id} delete={this.deleteTopic} moduleId={this.state.moduleId}
                                  courseId={this.state.courseId} lessonId={this.state.lessonId}/>
        }, this);
        return topics;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div col-md-1></div>
                    <div col-md-6>
                        <div className="form">
                            <div className="input-group ml-3 my-3">
                                <input type="text" onChange={this.titleChanged} value={this.state.topic.title}
                                       placeholder="Add Topic"
                                       className="form-control"/>
                                <div className="input-group-append">
                                    <button onClick={this.createTopic}
                                            className="btn btn-primary btn-block bg-secondary border-0 py-2">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"></div>
                <div className="container">
                    <div className="row">
                            {this.renderTopicTabs()}
                    </div>
                </div>
                <Route path={`/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId`}
                       component={TopicEditor}/>
            </div>

        );
    }

}