# Node DB 4 Guided Project

Guided project for **Node DB 4** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] **import** and clone this repository.
- [ ] **CD into the folder** where you cloned **your version**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor uses Knex migrations and seeding to create a multi-table database schema.

## Requirements

Manage Students.

Manage Cohorts.

Manage Tracks (iOS, Web, DS).

Cohorts are assemble for a track. Can a cohort belong to more than one track = no.

Track <> Cohorts

Cohorts house a group of students.

Student can go through more than one cohort.

## Mantras

- every table must have a primary key.
- work o two or three tables at a time.
- one to many -> Foreign Key
- the FK goes on the `many` side.
- many to many -> third table.
- the (junction) many to many table can have other properties.

## Workflow

- identify entities (nouns) === resources -> tables.
- identify relationships -> Foreign Keys.
- identify properties (fields) -> columns.

## Relationships

- one to one. Not as common.
- one to many. This is it!
- many to many (fake!).

## Requirements for Store

A supplier provides several products.
A shipper could ship any of our orders.
An order can have more than one product.
A client can order many times from us.
A product can come from several suppliers.

```sql
-- tons of data about an order
select *
from orders as o
join customers as c on o.customer_id = c.customer_id
join employees as e on o.employee_id = e.employee_id
join shippers as s on o.ship_via = s.shipper_id
join order_details as od on o.order_id = od.order_id
join products as p on od.product_id = p.product_id;
```
