import {AppConstants as Constants} from "../constants/AppConstants";

const LESSON_API_URL = Constants.uri.lesson.REMOTE_LESSON_API_URL;
const LESSON_API_FIND_ALL_URL = Constants.uri.lesson.REMOTE_LESSON_API_FIND_ALL_URL;

let _singleton = Symbol();

export default class LessonService {
    constructor(singletonToken) {
        if (singletonToken !== _singleton) {
            throw new Error("Singleton!!!");
        }
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(LESSON_API_FIND_ALL_URL.replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_FIND_ALL_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        });
    }

    deleteLesson(id) {
        return fetch(LESSON_API_URL + "/" + id, {
            method: 'DELETE'
        }).then(function (response) {
            return response;
        });
    }

    findLessonById(lessonId) {
        return fetch(LESSON_API_URL + "/" + lessonId)
            .then(function (response) {
                return response.json();
            })
    }
}