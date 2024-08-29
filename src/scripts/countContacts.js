import readContacts from '../utils/readContacts.js';

async function countContacts() {
  const contacts = await readContacts();
  console.log(`Total contacts: ${contacts.length}`);
}

countContacts();
