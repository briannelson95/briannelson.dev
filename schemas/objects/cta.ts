import { defineField, defineType } from 'sanity';

export const cta = defineType({
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.max(30).error('Keep this short')
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'reference',
            to: [
                {type: 'pages'},
                {type: 'projects'}
            ],
            description: 'Keep your CTA to an internal page for SEO best practices'
        })
    ],
})