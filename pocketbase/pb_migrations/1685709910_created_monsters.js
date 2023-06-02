migrate((db) => {
  const collection = new Collection({
    "id": "sjndcakp49tygyu",
    "created": "2023-06-02 12:45:10.946Z",
    "updated": "2023-06-02 12:45:10.946Z",
    "name": "monsters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dhjfniac",
        "name": "creator",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sjndcakp49tygyu");

  return dao.deleteCollection(collection);
})
