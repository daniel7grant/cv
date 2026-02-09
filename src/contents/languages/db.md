---
id: db
name: Databases
icon: /icons/database.svg
level: advanced
order: 4
modules:
    - name: MySQL
      icon: /icons/mysql/mysql-original.svg
    - name: MariaDB
      icon: /vendor-icons/mariadb-seal.svg
    - name: PostgreSQL
      icon: /vendor-icons/postgres.svg
    - name: Redis
      icon: /icons/redis/redis-original.svg
---

In most of my jobs, I worked with relational databases, mostly MySQL/MariaDB (the most convenient coming from a PHP background) and PostgreSQL (great extensibility, e.g. PostGIS). I also have experience with NoSQL databases, mainly with Redis and ElasticSearch. For development I started with writing raw queries, but I worked with query builders (Knex) and ORMs as well (Hibernate, Eloquent, Sequelize, TypeORM).

I also have experience with operating MariaDB databases: not only bare-metal, but also on Docker and Kubernetes. In our dormitory I rewrote our bare-metal MariaDB into a replicated Docker container, complete with a highly available MaxScale load balancer and Prometheus monitoring.
