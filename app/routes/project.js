import Route from "@ember/routing/route";

export default class ProjectRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/projects/${params.project_id}.json`);
    let { data } = await response.json();
    let { id, attributes } = data;
    return { id, ...attributes };
  }
}
