// Polyfill for capitalizate strings
String.prototype.capitalizate = function() {
  return this[0].toUpperCase() + this.slice(1).toLowerCase();
}