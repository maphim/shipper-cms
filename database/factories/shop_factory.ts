import factory from '@adonisjs/lucid/factories'
import Shop from '#models/shop'

export const ShopFactory = factory
  .define(Shop, async ({ faker }) => {
    return {}
  })
  .build()