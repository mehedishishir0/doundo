import EmailVerify from '@/components/auth/email-verify/EmailVerify'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmailVerify />
    </Suspense>
  )
}

export default page