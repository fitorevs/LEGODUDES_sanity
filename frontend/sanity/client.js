import { createClient } from '@sanity/client'

export default createClient({
    projectId: 'ytmy4kup',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07',
})

//skK9yr9KcybuwmlFTVqtd2MJyCGhghGpwhUt79r0DbQ9wk3sB36CsbrIojJkhwrXgBjyfAXqnjxMSOWxnCANYM49sOEV9MHUyyI2bpLe11NOtLuuNpdnqVCi3Xeozn7Bl0pKwJwQRJnlMXVr1e8oXjFa4abc3uyEvQ6AqHKpe1KzNp5mm55w

export const writeClient = createClient({
    projectId: "ytmy4kup",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skPBpqRkFiB4dJdpom3Nnrld2RKOerhheZfqI3U5geZc8oMYsB8wBBHPRn7Dx5eZNDkL6nvwqNy7KDupPL62scsT2dGTj9hSLVBNcIJG5Kv6g6bwsnf84PQlRpy6RHIZoDu4H3eEA6ejyFD8ozVqCuu8xT1z3e8WS5POtFwyA7OQbe4CszjB"
  })