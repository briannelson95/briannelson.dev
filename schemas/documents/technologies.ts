import MyPreviewComponent from "@/components/MyPreviewComponent";
import { defineField, defineType } from "sanity";

export const technologies = defineType({
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'reference',
            to: {
                type: 'media',
                components: {
                    preview: MyPreviewComponent
                }
            },
        }),
    ],
})