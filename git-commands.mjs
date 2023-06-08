import { execSync } from 'child_process';

const tag = process.env.npm_config_tag

const mssg = 'Update version ' + tag
execSync(`echo \"${mssg}\"`, { stdio: [0, 1, 2] })
//execSync('npm run build && git add . && git commit -m \"' + mssg + '\"', { stdio: [0, 1, 2] });