import { defineField, defineType } from 'sanity';

export const categories = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
    ],
})