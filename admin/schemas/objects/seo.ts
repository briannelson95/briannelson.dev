import { defineField, defineType } from "sanity";

export const seo = defineType({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Meta Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Meta Description',
            type: 'text'
        }),
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'image',
            title: 'Preview Image',
            type: 'image'
        })
    ]
})