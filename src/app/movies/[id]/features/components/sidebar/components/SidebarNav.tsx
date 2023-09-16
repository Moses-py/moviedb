import SidebarLink, { LinkProps } from "./SidebarLink";

let links: LinkProps[] = [
  { content: "Home", icon: "Home", selected: false },
  { content: "Movies", icon: "Movie", selected: true },
  { content: "TV Series", icon: "Show", selected: false },
  { content: "Upcoming", icon: "Calendar", selected: false },
];
export default function SidebarNav() {
  return (
    <ul className="flex flex-col gap-[24px] w-full">
      {links.map((link, index) => {
        return (
          <SidebarLink
            key={index}
            icon={link.icon}
            selected={link.selected}
            content={link.content}
          />
        );
      })}
    </ul>
  );
}
