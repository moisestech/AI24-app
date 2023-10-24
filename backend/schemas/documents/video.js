import {PlayIcon} from '@sanity/icons'
import {PAGE_FIELDS_REGULAR} from '../../constants'

const EXTRA_FIELDS = []
const FIELDS = EXTRA_FIELDS.concat(PAGE_FIELDS_REGULAR)

export default {
    name: "video",
    title: "Video",
    type: "document",
    icon: PlayIcon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the Video',
            validation: Rule => Rule.required()
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'The Subtitle of the Video'
        },
        {
            title: 'Video file',
            name: 'file',
            type: 'mux.video',
        },
    ]
}
