import {Stack, Card, Flex } from '@sanity/ui'

export default function MyPreviewComponent(props: any) {
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