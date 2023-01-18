import { defineField, defineType, validateBasePaths } from 'sanity';
import { ImagesIcon } from '@sanity/icons'

export const mediaLibrary = defineType({
    name: 'media',
    title: 'Media Library',
    type: 'document',
    icon: ImagesIcon,
    fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
        }),
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required().max(250),
          description: 'This is used for SEO and accessibility',
        }),
    ],
    preview: {
        select: {
            title: 'alt',
            url: 'image.asset.url',
            media: 'image', //adding this makes the image show up in standard preview components
        },
    },
})

