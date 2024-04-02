import client from "../client";

export async function fetchAllProducts() {
    const data = client.fetch('*[_type == "product"]')
    return data
}