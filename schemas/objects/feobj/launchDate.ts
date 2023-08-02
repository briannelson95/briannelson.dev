import { defineField, defineType } from 'sanity';

export const launchDate = defineType({
    name: 'launchDate',
    title: 'Launch Date',
    type: 'object',
    fields: [
        defineField({
            name: 'launchAt',
            title: 'Launch At',
            type: 'datetime'
        })
    ],
    options: {
        collapsed: true
    }
})