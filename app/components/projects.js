import Component from "@glimmer/component";

export default class ProjectsComponent extends Component {
  get commercial() {
    return this.args.model.filter(project => project.category === "commercial");
  }

  get residential() {
    return this.args.model.filter(
      project => project.category === "residential"
    );
  }

  get publicWorks() {
    return this.args.model.filter(
      project => project.category === "public-works"
    );
  }
}
