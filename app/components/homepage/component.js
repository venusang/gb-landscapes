import Component from "@glimmer/component";

export default class HomepageComponent extends Component {
  constructor() {
    super(...arguments);
  }
  get slides() {
    let slidesArray = this.args.model.toArray();

    slidesArray.splice(4);
    return slidesArray;
  }
}
