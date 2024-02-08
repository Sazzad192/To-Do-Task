"use client";
import { useRouter } from "next/navigation";
import {
  deleteTask,
  getTaskDetails,
  updateTask,
} from "@/common/helpers/UtilKit";
import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import { useFormik } from "formik";
import TextInputField from "@/components/forms/TextInputField";
import SelectField from "@/components/forms/SelectField";
import FormikErrorBox from "@/components/forms/FormikErrorBox";
import toast from "react-hot-toast";

const taskStatus = [
  { label: "Select Task Status", value: "" },
  { label: "Completed", value: "COMPLETED" },
  { label: "InCompleted", value: "INCOMPLETED" },
];
const taskPriority = [
  { label: "Select Task Priority", value: "" },
  { label: "High", value: "HIGH" },
  { label: "Medium", value: "MEDIUM" },
  { label: "Low", value: "lOW" },
];

export default function TaskDetails({ params }) {
  const router = useRouter();
  const { uid } = params;
  const taskDetails = getTaskDetails(uid);

  const formik = useFormik({
    initialValues: taskDetails,

    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      const handleSuccess = () => {};

      const handleFailure = (error) => {
        console.error(error);
      };

      const promise = updateTask(values)
        .then(handleSuccess)
        .catch(handleFailure);

      return toast.promise(promise, {
        loading: "Loading....",
        success: "Updated Successfully",
        error: "Something wrong. Try again!",
      });
    },
  });

  const { values, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <div className="mx-auto p-4 w-full sm:px-6 lg:px-10 max-w-7xl min-h-screen">
      <section id="header" className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <PageTitle>Task - #{uid} </PageTitle>
        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" onClick={handleSubmit}>
            Update
          </Button>
          <Button
            onClick={() => {
              deleteTask(uid), router.push("/tasks");
            }}
            variant="danger"
          >
            Delete
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <TextInputField
              label="Name"
              placeholder="Enter Task Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              labelClassName="text-gray-700 text-base font-bold"
            />
            <FormikErrorBox formik={formik} field="name" />
          </div>

          <TextInputField
            label="Description"
            placeholder="Enter Task Description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            labelClassName="text-gray-700 text-base font-bold"
          />
          <FormikErrorBox formik={formik} field="description" />

          <div className="flex md:flex-row flex-col gap-2 items-center">
            <div className="w-full">
              <SelectField
                label="Select Status"
                options={taskStatus}
                name="status"
                value={values.status}
                onChange={handleChange}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="status" />
            </div>

            <div className="w-full">
              <SelectField
                label="Select Priority"
                options={taskPriority}
                name="priority"
                value={values.priority}
                onChange={handleChange}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="priority" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
