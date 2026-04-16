import { SlidersHorizontal } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
        <SlidersHorizontal className="h-4 w-4" />
        <span className="font-medium">Filters</span>
      </div>
      <select disabled className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 focus:outline-none">
        <option>All States</option>
        <option>Georgia</option>
        <option>Florida</option>
      </select>
      <select disabled className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 focus:outline-none">
        <option>All Cities</option>
        <option>Atlanta</option>
        <option>Fort Myers</option>
      </select>
      <span className="ml-auto text-xs text-gray-400">Filters coming soon</span>
    </div>
  );
}
