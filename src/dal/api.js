import fs from 'fs'

export function getAllProducts() {
    const data = JSON.parse(fs.readFileSync('../data/items.json'))
    return data
}