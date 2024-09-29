import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const array = await readContacts();
        if (array.length > 0) {
            array.pop();
            await writeContacts(array);
        } else {
            console.log('No data');
        }
    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
