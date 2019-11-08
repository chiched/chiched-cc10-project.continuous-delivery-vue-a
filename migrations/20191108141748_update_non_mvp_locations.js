exports.up = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.string("fax");
    table.string("parking");
    table.string("def");
    table.string("type");
    table.string("highway");
    table.string("exit");
  });
};

exports.down = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.dropColumn("fax");
    table.dropColumn("parking");
    table.dropColumn("def");
    table.dropColumn("type");
    table.dropColumn("highway");
    table.dropColumn("exit");
  });
};
