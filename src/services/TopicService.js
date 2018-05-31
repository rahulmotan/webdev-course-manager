import {AppConstants as Constants} from "../constants/AppConstants";

const TOPIC_API_URL = Constants.uri.topic.REMOTE_TOPIC_API_URL;
const TOPIC_URL = Constants.uri.topic.REMOTE_TOPIC_URL;

let _singleton = Symbol();

export default class TopicService {
    constructor(singletonToken) {
        if (singletonToken !== _singleton) {
            throw new Error('Singleton!!!');
        }
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    createTopic(lessonId, topic) {
        return fetch(TOPIC_API_URL.replace('LID', lessonId), {
            body: JSON.stringify(topic),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }

    findAllTopicsForLesson(lessonId) {
        return fetch(TOPIC_API_URL.replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteTopic(topicId) {
        return fetch(TOPIC_URL + "/" + topicId, {
            method: 'DELETE'
        }).then(function (response) {
            return response;
        })
    }
}