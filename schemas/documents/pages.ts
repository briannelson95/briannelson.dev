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
        },
        {
            name: 'title',
            title: 'Page Title'
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            fieldset: 'title'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            fieldset: 'title'
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