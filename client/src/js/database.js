import { openDB } from 'idb';

// creates and initializes database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// adds/updates content to database
export const putDb = async (content) => {
  try {
    console.log('Post to the database');

    //creates connect to dband chooses version to use
    const jateDb = await openDB('jate', 1);

    //creates new transaction annd sets data privileges
    const tx = jateDb.transaction('jate', 'readwrite');

    //opens object store
    const store = tx.objectStore('jate');

    // uses .put() method to update content
    const request = store.put({ id:1, jate: content });

    //confirmation request
    const result = await request;
    console.log('Data saved to the database', result);
  } catch (error) {
    console.error('putDb not implemented');
  }
}

export const getDb = async () => {
  try {
    console.log('GET from the database');

    const jateDb = await openDB('jate', 1);

    const tx = jateDb.transaction('jate', 'readonly');

    const store = tx.objectStore('jate');

    // gets contact with id
    const request = store.get(1);

    const result = await request;
    console.log('result.value', result);
    return result?.jate;
  } catch (error) {
    console.error('getDb not implemented');
  }
}

//starts db
initdb();
