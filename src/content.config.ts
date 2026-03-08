import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';
import { job, language, project } from './types';

const jobs = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/contents/jobs' }),
    schema: job,
});

const languages = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/contents/languages' }),
    schema: language,
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/contents/projects' }),
    schema: project,
});

export const collections = {
    jobs,
    languages,
    projects,
};
