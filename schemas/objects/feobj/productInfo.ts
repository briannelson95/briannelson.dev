import MyPreviewComponent from '@/components/MyPreviewComponent';
import { defineField, defineType } from 'sanity';

export const productInfo = defineType({
    name: 'productInfo',
    title: 'Product Info',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'mobileImage',
            type: 'reference',
            to: {
                type: 'media',
                components: {
                    preview: MyPreviewComponent
                }
            },
        }),
        defineField({
            name: 'deskImage',
            type: 'reference',
            to: {
                type: 'media',
                components: {
                    preview: MyPreviewComponent
                }
            },
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'object',
            fields: [
                defineField({
                    name: 'ogPrice',
                    title: 'Original Price',
                    type: 'number'
                }),
                defineField({
                    name: 'newPrice',
                    title: 'New Price',
                    type: 'number'
                }),
            ]
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string'
            // I would make this a reference if there was more products
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text'
        })
    ],
    options: {
        collapsed: true
    }
})