function solution(my_string, overwrite_string, s) {
    let answer = my_string.substr(0, s) + overwrite_string;
    return answer;
}

let my_string = 'he11oworld';
let overwrite_string = 'lloworld';
let s = 2;

console.log(solution(my_string, overwrite_string, s));