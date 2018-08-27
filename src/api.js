const SERVICE_URL = 'http://api.datamuse.com/words?rel_syn=';
const MAX_SYNONYMS_NUM = 15;

export default async function fetchSynonyms(word) {
    const response = await fetch(SERVICE_URL + word);
    const json = await response.json();
    return json.slice(0, MAX_SYNONYMS_NUM).map(item => item.word);
};