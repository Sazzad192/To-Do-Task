import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// tailwindcss classNames management
export default function cn(...classnames) {
    return twMerge(clsx(classnames));
  }

  export function addTaskToList (newTask) {
    return new Promise((resolve, reject) => {
      try {
        const existingTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
  
        existingTaskList.push(newTask);
  
        localStorage.setItem("taskList", JSON.stringify(existingTaskList));
  
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  export function getTaskList (){
    
    const taskList = JSON.parse(localStorage.getItem("taskList"))
    return taskList;
  }