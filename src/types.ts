import { z } from 'zod';

export const shortLanguage = z.object({
    name: z.string(),
    icon: z.string(),
});
export type ShortLanguage = z.infer<typeof shortLanguage>;

export const module = z.object({
    name: z.string(),
    icon: z.string(),
});
export type Module = z.infer<typeof module>;

export const cover = z.object({
    png: z.string(),
    webp: z.string(),
});
export type Cover = z.infer<typeof cover>;

export const client = z.object({
    name: z.string(),
    url: z.string(),
});
export type Client = z.infer<typeof client>;

export const job = z.object({
    name: z.string(),
    url: z.string(),
    years: z.string(),
    position: z.string(),
    languages: z.array(shortLanguage),
});
export type Job = z.infer<typeof job>;

export const language = z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    level: z.string(),
    order: z.number(),
    modules: z.array(module),
});
export type Language = z.infer<typeof language>;

export const project = z.object({
    name: z.string(),
    cover: cover,
    url: z.string(),
    client: client,
    details: z.array(z.string()),
    order: z.number(),
    languages: z.array(shortLanguage),
});
export type Project = z.infer<typeof project>;

export type WithContent<T> = T & { description: string };
