import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import footerComponent from "gb-landscapes/components/footer/page-object";

module("Integration | Component | Footer", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`<Footer />`);
    assert.ok(footerComponent, "the footer is rendered");
  });
});
