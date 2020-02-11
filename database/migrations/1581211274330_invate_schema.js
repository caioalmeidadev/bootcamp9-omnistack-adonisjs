'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvateSchema extends Schema {
  up () {
    this.create('invates', (table) => {
      table.increments()
      table.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('team_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('teams')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('email').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('invates')
  }
}

module.exports = InvateSchema
