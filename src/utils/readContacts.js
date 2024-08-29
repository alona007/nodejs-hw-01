import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
}

export default readContacts;
