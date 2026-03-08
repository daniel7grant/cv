import { getCollection } from 'astro:content';

const getLanguages = async () => {
    const languageCollection = await getCollection('languages');
    const languages = languageCollection
        .toSorted((l1, l2) => l1.data.order - l2.data.order)
        .map((l) => ({ ...l.data, description: l.rendered!.html }));
    return languages;
};

export default getLanguages;
