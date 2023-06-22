import { readFile, writeFile } from 'fs/promises'


async function main() {
    if (process.argv.some(x => x == '--reset')) {
        await writeFile('misc/testJunk.txt', 'I have been reset')
        //console.log('Reset paths to main')
    } else {
        const version = JSON.parse(await readFile('package.json')).version
        //console.log(`Updating to version:${version}`)
        await writeFile('misc/testJunk.txt', `I have been updated to version:${version}`)
        execSync(`git add . && git commit -m \"Update version\" && git push`, { stdio: [0, 1, 2] });
        console.log(version)
    }
}

await main()