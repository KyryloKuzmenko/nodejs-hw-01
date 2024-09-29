import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fetchData = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(fetchData);
  } catch (error) {
    console.error(error);
  }
};
