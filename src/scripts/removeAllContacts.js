import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        let array = await readContacts();
        array = [];
        await writeContacts(array);
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();
