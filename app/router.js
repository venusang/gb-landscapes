import EmberRouterScroll from "ember-router-scroll";
import config from "./config/environment";

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
  configTest = config;
}

Router.map(function() {
  this.route("homepage", { path: "/*path" });
  this.route("projects");
  this.route("project", { path: "/projects/:project_id" });
});
