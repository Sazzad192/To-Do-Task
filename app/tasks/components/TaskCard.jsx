import Link from "next/link";

export default function TaskCard({ data }) {
  return (
    <Link
      href={`/tasks/${data.uid}`}
      className="flex justify-between items-center border rounded-md shadow-md p-4 cursor-pointer bg-white"
    >
      <p>
        Name <br />
        {data.name}
      </p>
      <p>
        Description <br />
        {data.description}
      </p>
      <p className="capitalize">
        Status <br />
        {data.status.toLowerCase()}
      </p>
      <p className="capitalize">
        Priority <br />
        {data.priority.toLowerCase()}
      </p>
    </Link>
  );
}
