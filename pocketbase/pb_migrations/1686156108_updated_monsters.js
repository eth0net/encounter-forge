migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  collection.listRule = "@request.auth.id = creator.id || shared = true"
  collection.viewRule = "@request.auth.id = creator.id || shared = true"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o4x64yeh",
    "name": "shared",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  collection.listRule = null
  collection.viewRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o4x64yeh",
    "name": "share",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
