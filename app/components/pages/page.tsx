import PageContent from './PageContent'

async function getPageData() {
  // Replace this with your actual data fetching logic
  // This could be:
  // - Fetching from an API
  // - Reading from a file
  // - Querying a database
  // - etc.
  return {
    modules: []
  }
}

export default async function Page() {
  const pageData = await getPageData()

  return <PageContent modules={pageData.modules} />
}