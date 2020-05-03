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

  //add test to check if the menu is opened

  //add test to check if it calls loadMenuSideBar - add sinon from 'sinon'
  //let onToggle = sinon.spy()
  //this.onToggle = onToggle;
});
