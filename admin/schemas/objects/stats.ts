import { defineField, defineType } from 'sanity';

export const stats = defineType({
    name: 'stats',
    title: 'Statistics',
    type: 'object',
    fields: [
        defineField({
            name: 'number',
            title: 'Number',
            type: 'number'
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
    ],
    options: {
        columns: 2
    }
})