exports.up = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.string("state");
    table.string("city");
    table.string("address");
    table.string("zip");
    table.string("tell");
  });
};

exports.down = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.dropColumn("state");
    table.dropColumn("city");
    table.dropColumn("address");
    table.dropColumn("zip");
    table.dropColumn("tell");
  });
};
