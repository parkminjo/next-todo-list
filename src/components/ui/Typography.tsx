import clsx from "clsx";
import { JSX, ReactNode } from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "p";
  children: ReactNode;
  className?: string;
};

export const Typography = ({
  variant = "p",
  children,
  className,
}: TypographyProps) => {
  const baseStyles = "text-gray-900";

  const variants = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-base",
  };

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </Component>
  );
};
