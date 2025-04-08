import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <section
      className={twMerge(
        "h-full text-center lg:text-left dark:bg-gray-900 bg-blue-50 mx-auto w-full max-w-full md:max-w-screen-2xl px-4 md:px-12 lg:px-20",
        className
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
