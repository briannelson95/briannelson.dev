import { client } from "./sanity.client";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);

function urlFor(soure: any) {
    return builder.image(soure)
}

export default urlFor;