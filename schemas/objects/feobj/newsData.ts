import { defineField, defineType } from 'sanity';

export const newsData = defineType({
    name: 'newsData',
    title: 'News',
    type: 'object',
    fields: [
        defineField({
            name: 'nav',
            title: 'Navigation',
            type: 'array',
            of: [
                {type: 'string'}
            ]
        }),
        defineField({
            name: 'posts',
            title: 'Posts',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'newsPost'}
                    ]
                }
            ]
        })
    ],
    options: {
        collapsed: true
    }
})