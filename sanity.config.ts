import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myStructure } from './deskStructure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: 'default',
  title: 'briannelson.dev',
  basePath: "/admin",

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: myStructure,
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
