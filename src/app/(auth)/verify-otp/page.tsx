import VerifyOTP from '@/components/auth/verifyOtp/VerifyOpt'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <VerifyOTP />
    </Suspense>
  )
}

export default page