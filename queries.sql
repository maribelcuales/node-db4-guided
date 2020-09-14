orders
        .integer("client")
        .unsigned()
        .notNullable()
        .references("id") // or .references('clients.id') then remove .inTable()
        .inTable("clients")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT");

select * 
from orders as o
join customers as c on o.customer_id = c.customer_id
join employees as e on o.employee_id = e.employee_id
join shippers as s on o.ship_via = s.shipper_id
join order_details as od on o.order_id = od.order_id
join products as p on od.product_id = p.product_id;