import * as pg from 'pg';
const { Client } = pg;

const connection = {
  host: import.meta.env.VITE_PGHOST,
  port: import.meta.env.VITE_PGPORT,
  database: import.meta.env.VITE_PGDATABASE,
  user: import.meta.env.VITE_PGUSER,
  password: import.meta.env.VITE_PGPASSWORD
};

const db = new Client(connection);

db.connect();

export default db;
