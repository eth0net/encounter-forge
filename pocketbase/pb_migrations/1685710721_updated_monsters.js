migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f3rt0iim",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqwkmxzy",
    "name": "challenge_rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu")

  // remove
  collection.schema.removeField("f3rt0iim")

  // remove
  collection.schema.removeField("tqwkmxzy")

  return dao.saveCollection(collection)
})
