export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    fields: [
        {
            name: 'navigation',
            title: 'Navigation Menu',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'pages'},
                        {type: 'homepage'}
                    ]
                }
            ]
        },
    ],
}