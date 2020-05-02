import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';

/**
 * It's basically pwd
 */
export function getCurrentDirBase() {
    return path.basename(process.cwd());
}

/**
 * Checking file existence
 * @param filePath
 */
export function directoryExits(filePath:string) {
    return fs.existsSync(filePath);
}

/**
 * Updates json file
 * @param path
 * @param obj
 */
export function updateJson(path:string, obj: {[key:string]:any}) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) throw err;
        const jsonFile = JSON.parse(data);
        Object.keys(obj).forEach((key, index) => {
            jsonFile[key] = obj[key];
        }, obj);
        fs.writeFile(path, JSON.stringify(jsonFile, null, '\t'), 'utf-8', (err) => {
            if (err) throw err;
            console.log('Done!');
        });
    });
}

/**
 * Make dir with path
 * @param dirPaths
 */
export function mkdir(dirPaths: string[]) {
    dirPaths.forEach((dir) => {
        const made = mkdirp.sync(dir);
    });
}

/**
 * Touch and fill
 * @param filePath
 * @param content
 */
export function touchAndFill(filePath: string, content: string) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('File saved successfully!');
    });
}