import Component from "@glimmer/component";

export default class HomepageComponent extends Component {
  constructor() {
    super(...arguments);
  }
  get slides() {
    let slidesArray = this.args.model.toArray();
    for (let i = slidesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = slidesArray[i];
      slidesArray[i] = slidesArray[j];
      slidesArray[j] = temp;
    }

    console.log("slidesArray", slidesArray);
    slidesArray.splice(4);
    return slidesArray;
  }
}
