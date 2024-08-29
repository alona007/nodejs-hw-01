import readContacts from '../utils/readContacts.js';

async function getAllContacts() {
  const contacts = await readContacts();
  console.log(contacts);
}

getAllContacts();
