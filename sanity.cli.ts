import {defineCliConfig} from 'sanity/cli'
import sanityClient from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default sanityClient({
  projectId,
  dataset,
  apiVersion: '2021-08-31'
})
