import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';

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