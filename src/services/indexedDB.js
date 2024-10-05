import { openDB } from 'idb'

const DB_NAME = 'tienhoangdevdb'

const getDB = async (storeName) => {
  const db = await openDB(DB_NAME, undefined, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, {
          keyPath: 'id',
          autoIncrement: true,
        })
      }
    },
  })

  if (!db.objectStoreNames.contains(storeName)) {
    db.close()
    const newVersion = db.version + 1
    return openDB(DB_NAME, newVersion, {
      upgrade(upgradedDb) {
        upgradedDb.createObjectStore(storeName, {
          keyPath: 'id',
          autoIncrement: true,
        })
      },
    })
  }

  return db
}

export const addData = async (storeName, data) => {
  const db = await getDB(storeName)
  await db.add(storeName, data)
}

export const getData = async (storeName, id) => {
  const db = await getDB(storeName)
  return await db.get(storeName, id)
}

export const getAllData = async (storeName) => {
  const db = await getDB(storeName)
  return await db.getAll(storeName)
}

export const updateData = async (storeName, data) => {
  const db = await getDB(storeName)
  await db.put(storeName, data)
}

export const deleteData = async (storeName, id) => {
  const db = await getDB(storeName)
  await db.delete(storeName, id)
}
