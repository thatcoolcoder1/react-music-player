// src/lib/idb.js or .ts
import { openDB } from 'idb';

const DB_NAME = 'music-player-db';
const STORE_NAME = 'songs';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const addSongToDB = async (file: File) => {
  const db = await initDB();
  const song = {
    title: file.name,
    blob: file,
  };
  await db.add(STORE_NAME, song);
};

export const getAllSongsFromDB = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};
export const deleteAllSongsFromDB = async() => {
  const db=await initDB();
  return db.clear(STORE_NAME)
}
