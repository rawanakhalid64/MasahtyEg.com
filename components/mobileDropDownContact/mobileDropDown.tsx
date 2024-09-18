"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface MobileDropdownProps {
  activeTab: string;
  tabs: { id: string; label: string }[];
}

export default function CustomDropdown({ activeTab, tabs }: MobileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(activeTab);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelectTab = (tabId: string) => {
    setSelectedTab(tabId);
    setIsOpen(false);
    router.push(`?tab=${tabId}`);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a delay before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay before closing the dropdown
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#198754] focus:border-[#198754]"
      >
        {tabs.find(tab => tab.id === selectedTab)?.label || "Select an option"}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 dark:bg-black !list-none bg-white border border-gray-300 rounded-lg shadow-lg">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className="p-3 hover:bg-[#198754] hover:text-white cursor-pointer"
              onClick={() => handleSelectTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
