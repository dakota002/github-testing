import { readFile, writeFile } from 'fs/promises'



const version = JSON.parse(await readFile('package.json')).version

console.log(`Updating to version:${version}`)