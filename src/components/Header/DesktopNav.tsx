import Link from "next/link";
import HoverDropdown from "../HoverDropdown";

export default function DesktopNav() {
  return (
    <nav className="hidden xl:flex gap-5">
        
      <HoverDropdown
        label="Rooms & Suites"
        items={[
          { label: "Room & Packages", href: "#" },
          { label: "Specialty Suites", href: "#" },
          { label: "Vintage Themed Suites", href: "#" },
          { label: "Specialty Rooms", href: "#" },
          { label: "Standard Rooms", href: "#" },
          
        ]}
      />

      <HoverDropdown
        label="Wedding"
        items={[
          { label: "Wedding Packages", href: "#" },
          { label: "Catering Packages", href: "#" },
          { label: "Specialty Weddings", href: "#" },
        ]}
      />

      <HoverDropdown
        label="Meetings & Events "
        items={[
            { label: "The Grand Ballroom", href: "#" },
            { label: "The Main Ballroom", href: "#" },
            { label: "The Conference Center", href: "#" },
            { label: "The OceanView", href: "#" },
            { label: "South Hampton", href: "#" },
            { label: "Art Gallery", href: "#" },
        ]}
      />
      
      <HoverDropdown
        label="Claridge Events & Promotions"
        items={[
            { label: "Promotions", href: "#" },
            { label: "Events", href: "#" },
        ]}
      />

      <HoverDropdown
        label="Dining & Bars"
        items={[
            { label: "Twenties Restaurant", href: "#" },
            { label: "VÜE Rooftop Bar", href: "#" },
            { label: "Leavander's 22", href: "#" },
            { label: "Meet The Chef", href: "#" },
        ]}
      />

      <HoverDropdown
        label="Amenities"
        items={[
            { label: "In Room Dining", href: "#" },
            { label: "Arcade", href: "#" },
            { label: "The Pool", href: "#" },
            { label: "Fitness Center", href: "#" },
            { label: "Wi-Fi Info", href: "#" },
        ]}
      />

      <HoverDropdown
        label="More"
        items={[
            { label: "History", href: "#" },
            { label: "Photo Gallery", href: "#" },
            { label: "Careers", href: "#" },
            { label: "In The Media", href: "#" },
            { label: "F.A.Q.", href: "#" },
            { label: "Loyalty Program", href: "#" },
            { label: "10% 4U Program", href: "#" },
        ]}
      />

    </nav>
  );
}
