const MODULE_API_URL = 'https://summester-webdev.herokuapp.com/api/course/CID/module';
const MODULE_URL = 'https://summester-webdev.herokuapp.com/api/module';

let _singleton = Symbol();

export default class ModuleService {
    constructor(singletonToken) {
        if (singletonToken !== _singleton) {
            throw new Error('Singleton!!!');
        }
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    findAllModulesForCourse(courseId) {
        return fetch(MODULE_API_URL.replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })

    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        });
    }

    deleteModule(id) {
        return fetch(MODULE_URL + "/" + id, {
            method: 'DELETE'
        }).then(function (response){
            return response;
        });
    }

}