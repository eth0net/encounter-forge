migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqwkmxzy",
    "name": "cr",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 30
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqwkmxzy",
    "name": "challenge_rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 30
    }
  }))

  return dao.saveCollection(collection)
})
