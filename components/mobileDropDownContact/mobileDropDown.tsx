// components/MobileDropdown.tsx
"use client"; // Declare this as a client component

import { useRouter } from "next/navigation";

interface MobileDropdownProps {
  activeTab: string;
  tabs: { id: string; label: string }[];
}

export default function MobileDropdown({ activeTab, tabs }: MobileDropdownProps) {
  const router = useRouter();

  const handleTabChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTab = event.target.value;
    router.push(`?tab=${selectedTab}`);
  };

  return (
    <div className="w-full mt-4 mb-6">
      <select
        className="w-full p-3 border border-gray-300 rounded-lg"
        value={activeTab}
        onChange={handleTabChange}
      >
        {tabs.map((tab) => (
          <option key={tab.id} value={tab.id}>
            {tab.label}
          </option>
        ))}
      </select>
    </div>
  );
}
