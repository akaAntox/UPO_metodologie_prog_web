"use strict";

var readlineSync = require('readline-sync');

function addTask(tasks) {
    var desc = readlineSync.question("Description: ");
    while (!desc)
        desc = readlineSync.question("Please, insert a description: ");
    var important = readlineSync.keyInYN("Is it important? ");
    var pvt = readlineSync.keyInYN("Is it private? ");

    var date = readlineSync.question("Deadline (YYYY-MM-DD): ").trim();
    var curr_date = new Date();
    var time = (curr_date.getHours() + (curr_date.getTimezoneOffset() / 60)) + ":" + (curr_date.getMinutes() + 1) + ":" + curr_date.getSeconds();
    date += " " + time + "z";

    var deadline = new Date(date);

    var newTask = { description: desc, isImportant: important, isPrivate: pvt, deadline: deadline };
    tasks.push(newTask);

    setTimeout(function (newTask) {
        console.log("Task " + newTask.desc + " elapsed");
        tasks.splice(tasks.indexOf(newTask), 1);
    }, deadline.getTime() - curr_date.getTime(), newTask);
    console.log(deadline.getTime() - curr_date.getTime());

    console.log("Task inserted!");
}

function removeTaskByDesc(tasks) {
    var desc = readlineSync.question("Description: ");

    for (var task of tasks)
        if (task.description === desc)
            tasks.splice(tasks.indexOf(task), 1);

    console.log("Task removed!");
}

function removeTaskByDeadline(tasks) {
    var removeDate = new Date(readlineSync.question("Deadline (YYYY-MM-DD): ") + " 23:59:59z");

    for (var task of tasks) {
        var date = new Date(task.deadline);
        if (date.getFullYear() === removeDate.getFullYear() &&
            date.getMonth() === removeDate.getMonth() &&
            date.getDay() === removeDate.getDay())
            tasks.splice(tasks.indexOf(task), 1);
    }

    console.log("Tasks removed!");
}

function showTasks(tasks) {
    console.log("Tasks: ");
    tasks.sort((a, b) => a.description.localeCompare(b.description))
    console.log(tasks);
}

var tasks = [];
var options = ["Insert task", "Remove task by description", "Remove task by deadline", "Show tasks"];
var choice;

while (choice = readlineSync.keyInSelect(options, "Choice") + 1) {

    console.log(options[choice - 1]);
    switch (choice) {
        case 1:
            addTask(tasks);
            break;
        case 2:
            removeTaskByDesc(tasks);
            break;
        case 3:
            removeTaskByDeadline(tasks);
            break;
        case 4:
            showTasks(tasks);
            break;
    }
}