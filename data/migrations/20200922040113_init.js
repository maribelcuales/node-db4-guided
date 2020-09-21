
exports.up = function(knex) {
  return knex.schema.createTable('suppliers', suppliers => {
    // suppliers.uuid('id').primary();
    suppliers.increments(); 

    suppliers.string('name', 255).notNullable(); 
  })

  .createTable('shippers', shippers => {
    shippers.increments(); 
  })

  .createTable('clients', clients => {})

  .createTable('products', products => {})

  .createTable('orders', orders => {})

  .createTable('order_shippres', orderShippers => {})

  .createTable('order_products', orderProducts => {})
};

exports.down = function(knex) {
  
};
