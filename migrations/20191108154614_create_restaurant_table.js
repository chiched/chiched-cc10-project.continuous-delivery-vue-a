exports.up = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.specificType("restaurants", "text ARRAY");
  });
};

exports.down = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.dropColumn("restaurants");
  });
};
