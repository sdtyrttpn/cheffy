"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [settingType, setSettingType] = useState("Account");

  function handleSettingType(type) {
    setSettingType(type);
  }

  const settings = [
    "Account",
    "Profile",
    "Appearance",
    "Notifications",
    "Privacy",
    "Security",
    "Language & Region",
    "Payment",
  ];

  return (
    <>
      <main className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ul className="flex flex-col justify-start gap-4 border border-gray-300 shadow-sm rounded-2xl p-4">
          {settings.map((setting) => (
            <li key={setting}>
              <button
                onClick={() => handleSettingType(setting)}
                className={`w-full ${settingType === setting ? "btn-primary" : "btn-secondary"}`}
              >
                {setting}
              </button>
            </li>
          ))}
        </ul>
        <div className="border border-gray-300 shadow-sm rounded-2xl p-4 col-span-2 flex justify-center items-center min-h-50">
          <h1 className="text-4xl font-bold uppercase text-center">{settingType} Settings</h1>
        </div>
      </main>
    </>
  );
}
