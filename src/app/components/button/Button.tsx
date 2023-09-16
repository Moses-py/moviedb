import Image from "next/image";

type ButtonProps = {
  children: React.ReactNode;
  icon?: string;
  fullWidth?: boolean;
  theme: "deep" | "light";
  className?: string;
  color: "white" | "black";
  onClick?: () => void;
};
export default function Button({
  children,
  icon,
  fullWidth,
  theme,
  className,
  color,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`w-fit ${fullWidth ? "w-full" : "w-fit"} ${
        theme === "deep" ? "bg-primary" : "bg-primary/20 ring-1 ring-primary"
      } text-${color} py-[6px] px-[16px] rounded-[10px] flex gap-[8px] items-center justify-center leading-[24px] text-[16px] md:text-[18px] font-[600] ${className}`}
      onClick={onClick}
    >
      {icon && (
        <>
          <Image
            src={`/${icon}.png`}
            alt="play icon"
            width={20}
            height={20}
            className="w-auto"
          />
        </>
      )}
      {children}
    </button>
  );
}
