import { defineField, defineType } from "sanity";

export const pages = defineType({
    name: 'pages',
    title: 'Pages',
    type: 'document',
    fieldsets: [
        {
            name: 'seo',
            title: 'Metadata & SEO',
            description: 'Use these fields to override the default metadata',
            options: {
                collapsible: true,
                collapsed: true,
            }
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }),
        defineField({
            name: 'seo',
            type: 'seo',
            fieldset: 'seo'
        })
    ],
})