"use client"
import { useRouter } from "next/navigation";
import { deleteTask, getTaskDetails } from "@/common/helpers/UtilKit";
import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";

export default function TaskDetails({params}) {
    const router = useRouter();
    const { uid } = params;
    const taskDetails = getTaskDetails(uid);

  return (
    <div className="mx-auto p-4 w-full sm:px-6 lg:px-10 max-w-7xl min-h-screen">
      <section id="header" className="flex justify-between items-center">
        <PageTitle>Task - #{uid} </PageTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline">Update</Button>
          <Button onClick={()=> {deleteTask(uid), router.push("/tasks")}} variant="danger">Delete</Button>
        </div>
      </section>

      <section>

      </section>
    </div>
  );
}
