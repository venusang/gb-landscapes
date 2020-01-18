import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    namespace = 'api/projects';

    buildURL(...args) {
        return `${super.buildURL(...args)}.json`;
    }
}
