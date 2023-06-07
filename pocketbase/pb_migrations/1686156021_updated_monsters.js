migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  collection.listRule = "@request.auth.id = creator.id || is_public = true"
  collection.viewRule = "@request.auth.id = creator.id || is_public = true"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o4x64yeh",
    "name": "is_public",
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
    "name": "ispublic",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
