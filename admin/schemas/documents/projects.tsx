import { defineField, defineType } from "sanity";
import {Stack, Text, Card, } from '@sanity/ui'

function MyPreviewComponent(props: any) {
    const {description, title, image, ...restProps} = props
    return (
        <Card border padding={3}>
            <Stack space={3} marginBottom={3}>
                <img src={image} />
                <Text size={1} weight="bold">
                {title?.toUpperCase()}
                </Text>
                {description && (
                <Text size={1} style={{color: 'green'}}>
                    {description}
                </Text>
                )}
            </Stack>
            {props.renderDefault(restProps)}
        </Card>
    )
}

export const projects = defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
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
        })
    ]
})