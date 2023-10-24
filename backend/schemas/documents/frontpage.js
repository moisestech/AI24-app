import {PAGE_FIELDS_REGULAR} from '../../constants'

const EXTRA_FIELDS = []
const FIELDS = EXTRA_FIELDS.concat(PAGE_FIELDS_REGULAR)

export default {
    name: "frontpage",
    title: "Frontpage",
    type: "document",
    fields: FIELDS
}