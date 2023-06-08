import { execSync } from 'child_process';

const tag = process.env.npm_config_tag
console.log("Run code updates")

const mssg = 'Update version ' + tag
const newBranchName = `Update-${tag}`
console.log(`Checking out branch:${newBranchName} and pushing`)
//execSync(`echo \"${mssg}\"`, { stdio: [0, 1, 2] })
execSync(`git checkout -b ${newBranchName} && git add . && git commit -m \"'${mssg}'\" && git push`, { stdio: [0, 1, 2] });