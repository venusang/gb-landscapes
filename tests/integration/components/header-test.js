import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import headerComponent from "gb-landscapes/components/header/page-object";

module("Integration | Component | Header", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`<Header />`);
    assert.ok(headerComponent, "the footer is rendered");
  });
});
