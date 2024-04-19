import { createClient } from '@sanity/client'

export default createClient({
    projectId: 'ytmy4kup',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07',
})

//sk10xPSHHHbCxpVhgIpdoJYyOoPE9gU1xB50KUaOwsyq5DvDkJPCer6gEFFUjvDcQvSBhHRZCItBipmzcIEvT4pqwABhwAFEFAU3D4m71y13Cfs9YkLqbFAPp5J9BX2qesxi8nEIgumKGTyLtTWDQ7f0cgCh3bbD6Y1NK7bdMWNxpQtLn3Db

export const writeClient = createClient({
    projectId: "ytmy4kup",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "sk10xPSHHHbCxpVhgIpdoJYyOoPE9gU1xB50KUaOwsyq5DvDkJPCer6gEFFUjvDcQvSBhHRZCItBipmzcIEvT4pqwABhwAFEFAU3D4m71y13Cfs9YkLqbFAPp5J9BX2qesxi8nEIgumKGTyLtTWDQ7f0cgCh3bbD6Y1NK7bdMWNxpQtLn3Db"
  })