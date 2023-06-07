migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  collection.listRule = "@request.auth.id = creator.id || public = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  collection.listRule = null

  return dao.saveCollection(collection)
})
