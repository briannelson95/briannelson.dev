import { defineField, defineType } from 'sanity';

export const resultsSum = defineType({
    name: 'resultsSum',
    title: 'Results Summary',
    type: 'object',
    fields: [
        defineField({
            name: 'allResults',
            title: 'Results',
            type: 'object',
            fields: [
                defineField({
                    name: 'resultArr',
                    type: 'array',
                    of: [
                        {
                            type: 'scores'
                        }
                    ]
                })
            ]
        }),
        defineField({
            name: 'reaction',
            title: 'Reaction',
            type: 'number',
            validation: Rule => Rule.max(100)
        }),
        defineField({
            name: 'memory',
            title: 'Memory',
            type: 'number',
            validation: Rule => Rule.max(100)
        }),
        defineField({
            name: 'verbal',
            title: 'Verbal',
            type: 'number',
            validation: Rule => Rule.max(100)
        }),
        defineField({
            name: 'visual',
            title: 'Visual',
            type: 'number',
            validation: Rule => Rule.max(100)
        }),
    ],
    options: {
        collapsed: true
    }
})