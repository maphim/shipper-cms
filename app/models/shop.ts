import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Shop extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public name!: string

  @belongsTo(() => User, {
    foreignKey: 'ownerId',
  })
  public owner!: relations.BelongsTo<typeof User>

  @column()
  public address: string | undefined

  @column()
  public phone: string | undefined

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}