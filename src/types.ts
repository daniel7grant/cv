export interface Template {
    language: string;
    name: string;
    description: string;
    email: string;
    github: string;
    career: Career[];
    languages: Language[];
    projects: Project[];
}

export interface Career {
    name: string;
    description: string;
    url: string;
    years: string;
    position: string;
    languages: ShortLanguage[];
}

export interface Language {
    id: string;
    name: string;
    icon: string;
    level: string;
    description: string;
    modules: Module[];
}

export interface ShortLanguage {
    name: string;
    icon: string;
}

export interface Module {
    name: string;
    icon: string;
}

export interface Project {
    name: string;
    cover: Cover;
    url: string;
    client: Client;
    details: string[];
    languages: ShortLanguage[];
}

export interface Cover {
    png: string;
    webp: string;
}

export interface Client {
    name: string;
    url: string;
}
