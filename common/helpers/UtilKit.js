import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// tailwindcss classNames management
export default function cn(...classnames) {
    return twMerge(clsx(classnames));
  }

  export function addTaskToList (newTask) {
    return new Promise((resolve, reject) => {
      try {
        // Retrieve existing task list from local storage
        const existingTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
  
        // Add the new task to the task list
        existingTaskList.push(newTask);
  
        // Store the updated task list back to local storage
        localStorage.setItem("taskList", JSON.stringify(existingTaskList));
  
        resolve(); // Resolve the promise indicating success
      } catch (error) {
        reject(error); // Reject the promise if any error occurs
      }
    });
  };