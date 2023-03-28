import { defineField, defineType } from 'sanity';
import MyPreviewComponent from '../../../components/MyPreviewComponent'

export const qrCode = defineType({
    name: 'qrCode',
    title: 'QR Code',
    type: 'object',
    fields: [
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
            name: 'text',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    type: 'string',
                }),
                defineField({
                    name: 'subtitle',
                    type: 'string',
                }),
            ]
        })
    ],
    options: {
        collapsed: true
    }
})