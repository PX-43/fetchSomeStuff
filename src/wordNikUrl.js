const base = 'https://api.wordnik.com/v4/words.json';
const randomWord = '/randomWord';
const definitions = '/definitions?limit=200&includeRelated=false&useCanonical=false';
const key = 'api_key=20xajnzceg1hsa6tialzqrzajmel5zpodmmqhq9f7ti5fex22';

//https://api.wordnik.com/v4/word.json/apple/definitions?limit=200&includeRelated=false&useCanonical=false

export const randomWordUrl = `${base}${randomWord}?${key}`;
export const getWordDefinitionUrl = word => `${base}/${word}${definitions}&${key}`;

