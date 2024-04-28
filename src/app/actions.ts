'use server'

import { headers } from 'next/headers'

export async function getIP() {
  const forwardedFor = headers().get('x-forwarded-for ')
  const realIp = headers().get('x-real-ip')

  if (forwardedFor) {
    return forwardedFor.split(', ')[0].trim()
  }
  if (realIp) return realIp.trim()

  return '0.0.0.0'
}
