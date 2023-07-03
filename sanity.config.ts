import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myStructure } from './deskStructure'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import { getDefaultDocumentNode } from './structure'
import { codeInput } from '@sanity/code-input'
import { createImprovedAction } from './actions/ImprovedAction'

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
      defaultDocumentNode: getDefaultDocumentNode
    }), 
    visionTool(),
    codeInput()
  ],

  document: {
    actions: (prev) =>
      prev.map((originalAction) => (originalAction.action === 'publish' ? createImprovedAction(originalAction) : originalAction)),
  },

  studio: {
    components: {
      navbar: StudioNavbar
    }
  },

  schema: {
    types: schemaTypes,
  },

  theme: myTheme
})
