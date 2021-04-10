import { Knex, knex } from 'knex'

import knexfile = require('../../knexfile')

let db: Knex
export default function getDbConnection(): Knex {
  if (!db) {
    db = knex(knexfile)
  }

  return db
}
