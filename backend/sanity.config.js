import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'
import { colorInput } from "@sanity/color-input"
import {media} from 'sanity-plugin-media'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
    name: 'default',
    title: 'AI24',
  
    projectId: 'eru6i5l8',
    dataset: 'production',

    plugins: [
        deskTool({
            structure: deskStructure
        }), 
        visionTool(),
        colorInput(),
        media(),
        vercelDeployTool(),
        muxInput({mp4_support: 'standard'})
    ],

    schema: {
        types: schemaTypes,
    },
    document: {
        newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
            return prev.filter((templateItem) => templateItem.templateId != 'frontpage')
        }
        return prev
        },
        actions: (prev, { schemaType }) => {
        if (schemaType === 'frontpage') {
            return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
        }
        return prev
        },
    },
})
