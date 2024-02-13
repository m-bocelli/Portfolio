export type Repo = {
    name: string;
    description: string;
    topics: string[];
    html_url: string;
    pushed_at: string;
    homepage: string;
};

export type _Date = {
    month: number;
    year: number;
};

export type NestedListItem = {
    title: string;
    desc: string[];
};

export type Link = {
    title: string;
    url: string;
};

export type Model = {
    name: string;
    desc: string;
    image_url: string;
    vertices: number;
};
