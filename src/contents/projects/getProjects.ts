import { getCollection } from 'astro:content';

const getProjects = async () => {
    const projectCollection = await getCollection('projects');
    const projects = projectCollection
        .toSorted((p1, p2) => p1.data.order - p2.data.order)
        .map((p) => p.data);
    return projects;
};

export default getProjects;
