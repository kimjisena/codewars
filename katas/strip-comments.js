/**
 * Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
 * Any whitespace at the end of the line should also be stripped out.
 * 
 * Example:
 * 
 * Given an input string of:
 * 
 * apples, pears # and bananas
 * grapes
 * bananas !apples
 * 
 * The output expected would be:
 * 
 * apples, pears
 * grapes
 * bananas
 * 
 * The code would be called like so:
 * var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
 */

function solution(input, markers) {
    let lines = input.split('\n');
    let stripped = [];
    let regexps = markers.map((marker) => {
        return new RegExp(`${marker === '$' ? '\\' + marker : marker}[^]*$`, 'g');
    });

    for (let line of lines) {
        for (re of regexps) {
            line = re.test(line) ? line.replace(re, '').trim() : line;
        }
        stripped.push(line);
    }
    return stripped.join('\n');
}