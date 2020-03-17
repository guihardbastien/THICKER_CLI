import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
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
 * Multiple choice prompt:
 * choiceType examples : list, rawlist, checkbox...
 * @param choiceList
 * @param choiceType
 */
export function selectPrompt(choiceList: string[], choiceType: string, promptQuestion: string) {
    const questions = [
        {
            type: choiceType,
            name: 'choices',
            message: promptQuestion,
            choices: choiceList,
            default: ['Empty list my wee fella'],
        }
    ];
    return inquirer.prompt(questions);
}

/**
 * print something big in yellow
 * @param text
 */
export function printSomethingBig(text: string) {
    console.log(
        chalk.yellow(
            figlet.textSync(text, { horizontalLayout: 'full' })
        )
    );
}

/**
 * Text prompt
 * @param question
 */
export function textPrompt(question: string) {
    const questions = [
        {
            name: 'input',
            type: 'input',
            message: question,
            validate: (value: string) => {
                if (value.length) {
                    return true;
                }
                return question;
            },
        }
    ];
    return inquirer.prompt(questions);
}

/**
 * Updates a json file
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
 * Make directories
 */
export function mkdir(dirPaths: string[]) {
    dirPaths.forEach((dir) => {
        const made = mkdirp.sync(dir);
    });
}

/**
 * create and write files
 */
export function touchAndFill(filePath: string, content: string) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('File saved successfully!');
    });
}

/**
 * Updates a md file
 */
export function updateMd(path: string, obj: {[key:string]:any}) {
    console.log('TODO');
}