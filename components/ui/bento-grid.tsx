import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[22rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento glass-2 hover:glass-3 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border/70 dark:border-border/5 dark:border-t-border/15 bg-card p-6 transition duration-200 hover:shadow-xl dark:shadow-none after:content-[''] after:absolute after:-top-[64px] after:left-1/2 after:h-[64px] after:w-[80%] after:-translate-x-1/2 after:rounded-[50%] after:bg-[#1da84f]/20 after:blur-[36px] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
        className,
      )}
    >
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-card-foreground text-xl">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-muted-foreground">
          {description}
        </div>
      </div>
      {header}
    </div>
  );
}; 