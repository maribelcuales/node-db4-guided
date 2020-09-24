
exports.up = function(knex) {
  return knex.schema
  .createTable('suppliers', suppliers => {
    // suppliers.uuid('id').primary();
    suppliers.increments(); 

    suppliers.string('name', 255).notNullable(); 
  })

  .createTable('shippers', shippers => {
    shippers.increments(); 
  }) 

  .createTable('clients', clients => {})

  .createTable('products', products => {})

  .createTable('orders', orders => {
    orders.increments();

    orders
      .integer('client')
      .unsigned()
      .notNullable()
      .references('id')  // or .reference('clients.id) then remove .inTable()
      .inTable('clients')
      .onUpdate('CASCADE')  // RESTRICT, DO NOTHING, SET NULL, CASCADE 
      .onDelete('RESTRICT');
  })

  .createTable('order_shippres', orderShippers => {
    orderShippers.increments();

    orderShippers
      .integer('order')
      .unsigned()
      .notNullable()
      .references('id')  // or .reference('orders.id) then remove .inTable()
      .inTable('orders')
      .onUpdate('CASCADE')  // RESTRICT, DO NOTHING, SET NULL, CASCADE 
      .onDelete('RESTRICT');

    orderShippers
      .integer('shipper')
      .unsigned()
      .notNullable()
      .references('id')  // or .reference('shippers.id) then remove .inTable()
      .inTable('shippers') 
      .onUpdate('CASCADE')  // RESTRICT, DO NOTHING, SET NULL, CASCADE 
      .onDelete('RESTRICT');    
  })

  .createTable('order_products', orderProducts => {});
};

exports.down = function(knex) {
  
};

