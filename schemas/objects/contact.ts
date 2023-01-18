export default {
    name: 'contact',
    title: 'Contact Info',
    type: 'object',
    fields: [
        {
            name: 'email',
            title: 'Main Email',
            type: 'string',
            validation: (Rule: any) =>
                Rule.regex(
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    {
                        name: 'Email',
                        invert: false
                    }
                )
        },
        {
            name: 'phone',
            title: 'Main Phone Number',
            type: 'string',
            validation: (Rule: any) =>
                Rule.regex(
                    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    {
                        name: 'Phone',
                        invert: false
                    }
                )
        },
        {
            name: 'socials',
            title: 'Socials',
            type: 'array',
            of: [
                {name: 'facebook', title: 'Facebook', type: 'url'},
                {name: 'twitter', title: 'Twitter', type: 'url'},
                {name: 'instagram', title: 'Instagram', type: 'url'},
            ]
        }
    ],
}