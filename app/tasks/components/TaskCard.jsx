import Link from "next/link";

export default function TaskCard({ data }) {
  const priorityStyles = {
    HIGH: "bg-[#DCFCE7] text-teal-700",
    MEDIUM: "bg-[#FEF9C3] text-orange-700",
    LOW: "bg-[#FED7D7] text-red-700",
  };

  return (
    <Link
      href={`/tasks/${data.uid}`}
      className="flex flex-col md:flex-row justify-between gap-2 items-start md:items-center border rounded-md shadow-md p-4 cursor-pointer bg-white"
    >
      <div className="flex flex-row md:flex-col gap-2 items-center md:items-start">
        <p>Name</p>
        <p className="text-gray-700 font-semibold">{data.name}</p>
      </div>
      <p>
        Description <br />
        {data.description}
      </p>
      <div className="flex flex-row md:flex-col gap-2 items-center md:items-start">
        <p>Status</p>
        <p className="capitalize rounded-sm text-gray-700 font-semibold">
        {data.status.toLowerCase()}
      </p>
      </div>
      <div className="flex flex-row md:flex-col gap-2 items-center md:items-start">
        <p>Priority</p>
        <p className={`capitalize ${priorityStyles[data.priority]} px-3 py-1 w-fit`}>
          {data.priority.toLowerCase()}
        </p>
      </div>
      
    </Link>
  );
}
