import { defineField, defineType } from "sanity";

export const frontend = defineType({
    name: 'frontend',
    title: 'Frontend Mentor',
    type: 'document',
    fieldsets: [
        {
            name: 'options',
            options: {
                collapsible: true,
                collapsed: false
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
            },
        }),
        defineField({
            name: 'qrCode',
            title: 'QR Code Component',
            type: 'qrCode',
            fieldset: 'options'
        }),
        defineField({
            name: 'resultsSummary',
            title: 'Results Summary',
            type: 'resultsSum',
            fieldset: 'options'
        })
    ],
})