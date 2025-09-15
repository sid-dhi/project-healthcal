import React from "react";
import { Activity, Calculator } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  HealthCal
                </h1>
                <p className="text-xs text-gray-500">AI-Powered Calorie Calculator</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calculator className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">Smart Analytics</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pb-16">
        {children}
      </main>
    </div>
  );
}
