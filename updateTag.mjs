import { readFile, writeFile } from 'fs/promises'
import { version } from './package.json' assert {type: 'json'}
//import { version } from './package.json';

async function main() {
    if (process.argv.some(x => x == '--reset')) {
        await writeFile('misc/testJunk.txt', 'I have been reset')
        //console.log('Reset paths to main')
    } else {
        //const version = JSON.parse(await readFile('package.json')).version
        //console.log(`Updating to version:${version}`)
        await writeFile('misc/testJunk.txt', `I have been updated to version:${version}`)
        console.log(version)
        return version
    }
}

await main()