import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import menuSideBarComponent from "gb-landscapes/components/menu/side-bar/page-object";

module("Integration | Component | Menu | Side Bar", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`<Menu::SideBar />`);
    assert.ok(menuSideBarComponent, "the sidebar is rendered");
  });
});
