import { createClient } from '@sanity/client'

export default createClient({
    projectId: 'ytmy4kup',
    dataset: 'production',
    useCdm: true,
    apiVersion: '2022-03-07',
})