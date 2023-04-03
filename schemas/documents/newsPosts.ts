import MyPreviewComponent from '@/components/MyPreviewComponent';
import { defineField, defineType } from 'sanity';

export const newsPost = defineType({
    name: 'newsPost',
    title: 'News Posts',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
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
            name: 'image',
            type: 'reference',
            to: {
                type: 'media',
                components: {
                    preview: MyPreviewComponent
                }
            },
        }),
        defineField({
            name: 'previewText',
            title: 'Preview Text',
            type: 'text'
        }),
        defineField({
            name: 'category',
            type: 'string'
        })
    ],
})