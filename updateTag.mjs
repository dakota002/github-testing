import { readFile, writeFile } from 'fs/promises'


async function main() {
    if (process.argv.some(x => x == '--reset')) {
        console.log('Reset paths to main')
    } else {
        const version = JSON.parse(await readFile('package.json')).version
        console.log(`Updating to version:${version}`)
    }
}

await main()