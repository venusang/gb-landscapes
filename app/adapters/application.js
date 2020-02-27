import JSONAPIAdapter from "@ember-data/adapter/json-api";
// @ember-data/serializer/json-api
export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = "api";
  //
  // buildURL(...args) {
  //   return `${super.buildURL(...args)}.json`;
  // }
}
