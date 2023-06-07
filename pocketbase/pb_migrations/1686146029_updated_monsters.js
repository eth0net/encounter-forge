migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o4x64yeh",
    "name": "public",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  // remove
  collection.schema.removeField("o4x64yeh")

  return dao.saveCollection(collection)
})
