import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('projects', (t) => {
    t.binary('id').notNullable(),
      t.string('name').notNullable(),
      t.timestamp('due_date').notNullable(),
      t.timestamp('createdAt', { useTz: true })
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('projects')
}
