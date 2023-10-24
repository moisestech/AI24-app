

import {frontpage} from './desk/frontpage'

// If you add document types to desk structure manually, you can add them to this array to prevent duplicates in the root pane
const DOCUMENT_TYPES_IN_STRUCTURE = [
    'frontpage',
    'media.tag'
]

export default (S) =>
  S.list()
    .title('Starter Theme')
    .items([
        frontpage(S),
        S.divider(),
        ...S.documentTypeListItems().filter(item => !DOCUMENT_TYPES_IN_STRUCTURE.includes(item.getId()))
        ]
    )