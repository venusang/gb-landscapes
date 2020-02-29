import Model, { attr } from "@ember-data/model";

export default class ProjectModel extends Model {
  @attr homepageSliderImage;
  @attr imagesHorizontal;
  @attr imagesVertical;
  @attr thumbnailSmall;
  @attr thumbnailLarge;
  @attr category;
  @attr title;
  @attr description;
  @attr location;
}
