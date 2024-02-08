"use client"
import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function TaskPage(){
    const router = useRouter();
    return(
        <div className="mx-auto p-4 w-full sm:px-6 lg:px-10 max-w-7xl min-h-screen">
            <section className="flex justify-between items-center">
            <PageTitle>Task List</PageTitle>
            <Button onClick={()=> router.push("/create")} className="gap-2">
                <PlusIcon className="w-5"/>
                Create
            </Button>
            </section>
        </div>
    )
}