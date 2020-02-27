export default function() {
  this.namespace = "/api";
  this.get("projects");
  this.get("projects/:id");
}
