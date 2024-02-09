"use client";
import { getTaskList } from "@/common/helpers/UtilKit";
import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import TaskCard from "./components/TaskCard";
import { useEffect, useState } from "react";

export default function TaskPage() {
  const router = useRouter();
const [taskList,setTaskList]=useState(null)

useEffect(()=>{

  setTaskList(getTaskList())

},[])


  return (
    <div className="mx-auto p-4 w-full sm:px-6 lg:px-10 max-w-7xl min-h-screen">
      <section className="flex justify-between items-center">
        <PageTitle>Task List</PageTitle>
        <Button onClick={() => router.push("/create")} className="gap-2">
          <PlusIcon className="w-5" />
          Create
        </Button>
      </section>

      <section className="space-y-3 pt-3">
        {taskList?.length ? (
          taskList.map((item, i) => <TaskCard key={i} data={item} />)
        ) : (
          <p className="text-center font-semibold"> No Task Added Yet</p>
        )}
      </section>
    </div>
  );
}
