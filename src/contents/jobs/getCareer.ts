import { getCollection } from 'astro:content';

const getCareer = async () => {
    const careerCollection = await getCollection('jobs');
    const careers = careerCollection
        .toSorted((c1, c2) => (c1.data.years < c2.data.years ? -1 : 1))
        .map((c) => ({ ...c.data, description: c.rendered!.html }));
    return careers;
};

export default getCareer;
