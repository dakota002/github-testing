import { execSync } from 'child_process';
import { readFile, writeFile } from 'fs/promises'

const tag = process.env.npm_config_tag
console.log("Run code updates")
await writeFile("misc/testJunk.txt", `This file is updated to version ${tag}`)

const mssg = 'Update version ' + tag
const newBranchName = `Update-${tag}`
console.log(`Checking out branch:${newBranchName} and pushing`)
//execSync(`echo \"${mssg}\"`, { stdio: [0, 1, 2] })
execSync(`git checkout -b ${newBranchName} && git add . && git commit -m \"${mssg}\" && git push --set-upstream origin ${newBranchName}`, { stdio: [0, 1, 2] });