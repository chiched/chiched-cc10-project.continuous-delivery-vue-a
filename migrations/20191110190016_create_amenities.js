exports.up = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.specificType("amenities", "text ARRAY");
    table.specificType("services", "text ARRAY");
  });
};

exports.down = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.dropColumn("amenities");
    table.dropColumn("services");
  });
};
