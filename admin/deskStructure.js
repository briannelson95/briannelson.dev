import { ControlsIcon, HomeIcon, DocumentsIcon, CogIcon, CodeBlockIcon, MenuIcon, ImagesIcon } from '@sanity/icons'

export const myStructure = (S) => 
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title('Settings')
                .child(
                    S.list()
                        .title('Settings Documents')
                        .items([
                            S.listItem()
                                .title('General')
                                .child(
                                    S.document()
                                        .schemaType('siteSettings')
                                        .documentId('siteSettings')
                                )
                                .icon(CogIcon),
                            S.listItem()
                                .title('Metadata')
                                .child(
                                    S.document()
                                        .schemaType('metadata')
                                        .documentId('metadata')
                                    )
                                    .icon(CodeBlockIcon),
                            S.listItem()
                                .title('Main Navigation')
                                .child(
                                    S.document()
                                        .schemaType('navigation')
                                        .documentId('navigation')
                                    )
                                    .icon(MenuIcon),
                        ])
                )
                .icon(ControlsIcon),
            S.divider(),
            // S.listItem()
            //     .title('Media Libray')
            //     .child(
            //         S.document()
            //             .schemaType('media')
            //             .documentId('media')
            //         )
            //         .icon(ImagesIcon),        
            S.listItem()
                .title('Pages')
                .child(
                    S.list()
                        .title('All Pages')
                        .items([
                            S.listItem()
                                .title('Homepage')
                                .child(
                                    S.document()
                                        .schemaType('homepage')
                                        .documentId('homepage')
                                )
                                .icon(HomeIcon),
                            ...S.documentTypeListItems().filter(listItem => ['pages',].includes(listItem.getId())),
                        ])
                )
                .icon(DocumentsIcon),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) => !['siteSettings', 'metadata', 'navigation', 'pages', 'homepage', 'categories'].includes(listItem.getId())
            )
        ])