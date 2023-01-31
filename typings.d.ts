import { Slug } from "sanity"


type Base = {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
}

interface Projects extends Base {
    body:? Block[];
    featured: boolean;
    image: any;
    slug: Slug;
    title: string;
    tags:? Category[];
    github:? string;
    link:? string;
    description:? string;
}

interface MyImage extends Base {
    alt: string;
    image: ImageRef;
}

interface ImageRef {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string
}

interface Category {
    // description: string;
    name: string;
}

interface Slug {
    _type: "slug";
    current: string;
}

