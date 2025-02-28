import {application} from '@ijstech/components';
let moduleDir = application.currentModuleDir;

function fullPath(path: string): string{
    return `${moduleDir}/${path}`
}
export default {
    fullPath
}