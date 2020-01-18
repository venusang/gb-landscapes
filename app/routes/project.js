import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ProjectRoute extends Route {
  @service store;
  async model(params) {
    // let response = await fetch(`/api/projects/${params.project_id}.json`);
    // let { data } = await response.json();
    // let { id, attributes } = data;
    // return { id, ...attributes };
    return this.store.find("project", params.project_id);
  }
}
