"use client"
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { object, string } from "yup";

import { addTaskToList } from "@/common/helpers/UtilKit";

import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import FormikErrorBox from "@/components/forms/FormikErrorBox";
import SelectField from "@/components/forms/SelectField";
import TextInputField from "@/components/forms/TextInputField";

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

const initialValues = {
  description: "",
  name: "",
  status: "",
  priority: "",
};

const yupSchema = object({
  name: string().required("Task name is required!"),
  status: string().required("Task status is required!"),
  priority: string().required("Task priority is required!"),
});

export default function TaskCreate() {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema: yupSchema,

    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      const handleSuccess = () => {
        router.push("/")
      };

      const handleFailure = (error) => {
        console.error(error);
      };

      const promise = addTaskToList(values)
        .then(handleSuccess)
        .catch(handleFailure);

      return toast.promise(promise, {
        loading: "Loading....",
        success: "Task Created Successfully",
        error: "Something wrong. Try again!",
      });
    },
  });

  const { values, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <div className="mx-auto p-4 w-full sm:px-6 lg:px-10 max-w-7xl min-h-screen space-y-4">
      <PageTitle>Create Task</PageTitle>
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
          <Button type="submit" variant="outline">
            Save
          </Button>
        </form>
      </section>
    </div>
  );
}
