
import cn from "@/common/helpers/UtilKit";
import { cva } from "class-variance-authority";

const DEFAULT_BUTTON_STYLES =
  "h-fit inline-flex items-center rounded-md focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const PRIMARY_BUTTON_STYLES =
  "bg-primary-600 text-primary-50 hover:bg-primary-700 active:bg-primary-400 focus:bg-primary-400 px-4 py-[10px] ";

const OUTLINE_BUTTON_STYLES =
  "py-2 px-4 border bg-white border-primary-600 rounded-md font-bold text-base text-primary-600 hover:text-white hover:bg-primary-600 flex items-center justify-center";
const TAB_BUTTON_STYLES =
  "py-2 px-4 border border-gray-200  rounded-lg font-bold text-base focus:bg-primary-600 focus:text-white flex items-center justify-center bg-white ";
const DANGER_BUTTON_STYLES =
  "py-2 px-4 border border-red-200 text-white rounded-lg font-bold text-base focus:bg-red-600 hover:bg-red-600 focus:text-white flex items-center justify-center bg-red-500 ";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: PRIMARY_BUTTON_STYLES,
      outline: OUTLINE_BUTTON_STYLES,
      tab: TAB_BUTTON_STYLES,
      danger: DANGER_BUTTON_STYLES,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function Button({
  children,
  variant,
  size,
  className,
  ...props
}) {
  const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant }), className);

  return (
    <button className={BUTTON_STYLES} {...props}>
      {children}
    </button>
  );
}