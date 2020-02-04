import Model, { attr } from "@ember-data/model";

export default class ProjectModel extends Model {
  @attr img1920x1080;
  @attr img426x574;
  @attr img426x574x01;
  @attr img426x574x02;
  @attr category;
  @attr title;
  @attr description;
  @attr location;
}
