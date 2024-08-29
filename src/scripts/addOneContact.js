// src/scripts/addOneContact.js
import { createFakeContact } from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

async function addOneContact() {
  try {
    const contacts = await readContacts(); // Читання існуючих контактів
    const newContact = createFakeContact(); // Генерація одного контакту
    contacts.push(newContact); // Додавання нового контакту до масиву
    await writeContacts(contacts); // Запис оновленого масиву контактів у файл
    console.log('One contact added.');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
}

addOneContact(); // Виклик функції
