// src/scripts/generateContacts.js
import { createFakeContact } from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

async function generateContacts(count = 5) {
  try {
    const contacts = await readContacts(); // Читання існуючих контактів
    const newContacts = Array.from({ length: count }, createFakeContact); // Генерація нових контактів
    contacts.push(...newContacts); // Додавання нових контактів до масиву
    await writeContacts(contacts); // Запис оновленого масиву контактів у файл
    console.log(`${count} contacts generated.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
}

generateContacts(); // Виклик функції
