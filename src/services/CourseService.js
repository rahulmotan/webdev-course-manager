let _singleton = Symbol();
const COURSE_API_URL = 'https://summester-webdev.herokuapp.com/api/course';

class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken) {
            throw new Error('cannot instantiate directly.');
        }
    }

    static get instance() {
        if (!this[_singleton]) {
            this[_singleton] = new CourseService(_singleton);
        }
        return this[_singleton];
    }

    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log("error in response: " + response);
                }
            });
    }

    createCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }

    deleteCourse(id) {
        return fetch(COURSE_API_URL + "/" + id, {
            method: 'DELETE'
        }).then(function (response) {
            return response;
        })
    }

    findCourseById(id) {
        return fetch(COURSE_API_URL + "/" + id)
            .then(function (response) {
                return response.json();
            })
    }

    updateCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(function (response) {
            return response.json();
        })
    }

    getSorted() {
        return fetch(COURSE_API_URL + "/sorted")
            .then(function (response) {
                return response.json();
            })
    }
}

export default CourseService;