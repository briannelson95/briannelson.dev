import { defineField, defineType } from "sanity";
import {Stack, Card, Flex } from '@sanity/ui'
import { RocketIcon } from '@sanity/icons'

function MyPreviewComponent(props: any) {
    const {title, url} = props
  
    return (
      <Flex align="center" justify="center" height="fill">
        <Card border padding={3}>
          <Stack space={3} marginBottom={3}>
            <img src={url} alt={title} style={{width: '100%'}} />
          </Stack>
        </Card>
      </Flex>
    )
  }

export const projects = defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    icon: RocketIcon,
    fieldsets: [
        {
            name: 'title',
            title: 'Title'
        },
        {
            name: 'projectLinks',
            title: 'Project Links'
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            fieldset: 'title'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            fieldset: 'title'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 5
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            initialValue: false,
            fieldset: 'title'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'reference',
            to: {
                type: 'media',
                components: {
                    preview: MyPreviewComponent
                }
            },
        }),
        defineField({
            name: 'link',
            title: 'Link to Project',
            type: 'url',
            fieldset: 'projectLinks'
        }),
        defineField({
            name: 'github',
            title: 'GitHub Reop',
            type: 'url',
            fieldset: 'projectLinks'
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'categories'}
                    ]
                }
            ]
        }),
        defineField({
            name: 'stats',
            title: 'Statistics',
            type: 'array',
            of: [
                {
                    type: 'stats',
                }
            ]
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
})