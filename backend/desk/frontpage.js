
export const frontpage = (S) => 
S.listItem()
    .title('Frontpage')
    .child(
        S.document()
        .schemaType('frontpage')
        .documentId('frontpage')
    )