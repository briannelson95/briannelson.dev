import { defineField, defineType } from 'sanity';

export const scores = defineType({
    name: 'scores',
    title: 'Scores',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'score',
            title: 'Score',
            type: 'number',
            validation: Rule => Rule.max(100)
        })
    ],
    options: {
        columns: 2
    },
    preview: {
        select: {
            title: 'score',
            subtitle: 'title'
        }
    }
})