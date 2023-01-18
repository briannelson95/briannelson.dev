import {ComposeIcon} from '@sanity/icons'

export default {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    icon: ComposeIcon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96, 
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Enter a short snippit of the blog'
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: [
                {
                    hotspot: true
                }
            ]
        },
        {
            name: 'Categories',
            title: 'categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'categories'}}]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }

    ],
    
}