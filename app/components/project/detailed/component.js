import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { task } from "ember-concurrency";
export default class ProjectDetailedComponent extends Component {
  @service store;
  @tracked projectModel;
  @task(function*() {
    let projects = yield this.store.findAll("project");
    this.projectModel = projects;
  })
  projects;
}
