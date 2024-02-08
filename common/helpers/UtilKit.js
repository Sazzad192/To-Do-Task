import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// tailwindcss classNames management
export default function cn(...classnames) {
  return twMerge(clsx(classnames));
}


export function getTaskList() {
  const data = localStorage.getItem("taskList");
  if (data === "undefined" || data === null) {
    return [];
  } else {
    return JSON.parse(data);
  }
}


export function getTaskDetails(uid) {
  const taskList = JSON.parse(localStorage.getItem("taskList"));
  const taskDetails = taskList.find((obj) => obj.uid == uid);

  return taskDetails ? taskDetails : {};
}

export function deleteTask(uid) {
  let existingTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
  existingTaskList = existingTaskList.filter(task => task.uid != uid);

  localStorage.setItem("taskList", JSON.stringify(existingTaskList));
}

export function updateTask(updatedTask) {
  return new Promise((resolve, reject) => {
    let existingTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
    
    // Find the index of the task with the given uid
    const index = existingTaskList.findIndex(task => task.uid == updatedTask.uid);
    
    // If the task with the given uid exists, update it
    if (index !== -1) {
      existingTaskList[index] = updatedTask;
      localStorage.setItem("taskList", JSON.stringify(existingTaskList));
      resolve(true); // Indicates successful update
    } else {
      reject(new Error("Task not found")); // Indicates failure to find the task
    }
  });
}


export function getRandomUid() {
  // Generate a random number between 1 and 1000
  return Math.floor(Math.random() * 1000) + 1;
}
