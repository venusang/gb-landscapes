import { clickable, property } from "ember-cli-page-object";

let sideBarComponent = ["data-test-menu-side-bar"];
let btnSelector = ["data-test-menu-side-bar-button"];
let contentSelector = ["data-test-menu-side-bar-content"];

export default {
  click: clickable(btnSelector),
  isOpen: property("open", sideBarComponent),
  sideBarComponent,
  btnSelector,
  contentSelector
};
