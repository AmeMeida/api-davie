import knex from 'knex';

export default knex({
  client: 'mysql2',
  connection: {
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'test',
    port: parseInt(process.env.DB_PORT || '3306'),
  },
});
