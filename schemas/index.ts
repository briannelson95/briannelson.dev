import blogs from "./documents/blogs";
import { categories } from "./documents/categories";
import { frontend } from "./documents/frontend";
import { homepage } from "./documents/homepage";
import { mediaLibrary } from "./documents/mediaLibrary";
import metadata from "./documents/metadata";
import navigation from "./documents/navigation";
import { newsPost } from "./documents/newsPosts";
import { pages } from "./documents/pages";
import { projects } from "./documents/projects";
import siteSettings from "./documents/siteSettings";
import { technologies } from "./documents/technologies";
import blockContent from "./objects/blockContent";
import contact from "./objects/contact";
import { cta } from "./objects/cta";
import { newsData } from "./objects/feobj/newsData";
import { productInfo } from "./objects/feobj/productInfo";
import { qrCode } from "./objects/feobj/qrCode";
import { resultsSum } from "./objects/feobj/resultsSumm";
import { scores } from "./objects/feobj/scores";
import { seo } from "./objects/seo";
import { stats } from "./objects/stats";

export const schemaTypes = [
    pages,
    siteSettings,
    homepage,
    frontend,
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
    cta,
    qrCode,
    resultsSum,
    scores,
    productInfo,
    newsData,
    newsPost,
    technologies
]
