import blogs from "./documents/blogs";
import { categories } from "./documents/categories";
import homepage from "./documents/homepage";
import { mediaLibrary } from "./documents/mediaLibrary";
import metadata from "./documents/metadata";
import navigation from "./documents/navigation";
import { pages } from "./documents/pages";
import { projects } from "./documents/projects";
import siteSettings from "./documents/siteSettings";
import blockContent from "./objects/blockContent";
import contact from "./objects/contact";
import { seo } from "./objects/seo";
import { stats } from "./objects/stats";

export const schemaTypes = [
    pages,
    siteSettings,
    homepage,
    contact,
    metadata,
    navigation,
    blogs,
    blockContent,
    seo,
    mediaLibrary,
    projects,
    categories,
    stats,
]
