exports.up = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.string("state");
    table.string("city");
    table.string("address");
    table.stringitg("zip");
  });
};

exports.down = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.dropColumn("state");
    table.dropColumn("city");
    table.dropColumn("address");
    table.dropColumn("zip");
  });
};
