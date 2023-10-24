
export const PAGE_REFERENCES = [
    {type: 'frontpage'},
    {type: 'page'},
]
export const MODULES = [
    {type: "moduleText"},
]

// Regular Page Structure
export const PAGE_FIELDS_REGULAR = [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The main headline on the top of the page',
        validation: Rule => Rule.required()
    },
    {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'A second headline, appears in the teaser module'
    },
    {
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        description: 'An optional custom short summary of the page that is fed to search engines.',
    },
    {
        name: 'teaserImage',
        title: 'Teaser Image',
        type: 'image',
        description: 'A smaller square image to be displayed in teaser modules'
    },
    {
        title: "Modules",
        name: "modules",
        type: "array",
        of: MODULES,
    },
    {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        validation: Rule => Rule.required(),
        options: {
            source: 'title',
            maxLength: 200,
            slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
        }
    }
]
