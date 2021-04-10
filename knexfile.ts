import env from './src/util/env'
import Logger from './src/util/logger'

module.exports = {
  client: 'mysql2',
  debug: env.dbDebug || false,
  connection: {
    host: env.dbHost,
    port: env.dbPort,
    user: env.dbUser,
    password: env.dbPassword,
    database: env.dbSchema,
    schema: env.dbSchema,
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    dateStrings: true,
  },
  pool: {
    min: env.dbPoolMin,
    max: env.dbPoolMax,
    afterCreate: function _(connection: any, done: Function) {
      connection.query('SET time_zone = "UTC";', function er(err: Error) {
        if (err) {
          Logger.warn(err, 'failed to initialize mysql database connection')
        } else {
          Logger.debug('mysql database connected')
        }
        done(err, connection)
      })
    },
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations',
    extension: 'ts',
  },
  timezone: 'UTC',
}
