export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
        },
        {
            name: 'contact',
            type: 'contact'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image'
        },
        {
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            description: 'This is used for the tab favicon as well as the mobile menu'
        },
    ],
}