import type { FC } from 'react'
import React from 'react'
import UploadForm from '../components/ui/Create/UploadForm'
import UploadPage from '../components/ui/Create/UploadPage'

const CreatePage: FC = () => {
  return (
    <UploadPage>
      <UploadForm />
    </UploadPage>
  )
}

export default CreatePage