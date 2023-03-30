import {Stack, Card, Flex, Text } from '@sanity/ui'

export function SummaryPreview(props: any) {


    return ( 
      <Card padding={4} radius={2}>
        <Text align="center" size={[2, 2, 3]}>
          Text in a card with <a href="#">link</a>
        </Text>
      </Card>
    );
  }