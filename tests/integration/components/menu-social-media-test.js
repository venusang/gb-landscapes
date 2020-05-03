import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import socialMediaComponent from "gb-landscapes/components/menu/social-media/page-object";
module("Integration | Component | Menu | SocialMedia", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`<Menu::SocialMedia />`);
    assert.ok(socialMediaComponent, "renders the social media menu");
  });
});
