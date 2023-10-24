export default {
    name: "moduleText",
    title: "Module Text",
    type: "object",
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The main headline on the top of the page'
        },
        {
            name: "text",
            title: "Text",
            type: "array",
            of: [{
                type: "block",
            }]
        }
    ]
}