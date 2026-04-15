import { SlidersHorizontal } from "lucide-react";

export default function FilterBar() {
    return (
          <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
                        <SlidersHorizontal className="h-4 w-4" />
                        <span className="font-medium">Filters</span>span>
                </div>div>
                <select disabled className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 focus:outline-none">
                        <option>All States</option>option>
                        <option>Georgia</option>option>
                        <option>Florida</option>option>
                </select>select>
                <select disabled className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 focus:outline-none">
                        <option>All Cities</option>option>
                        <option>Atlanta</option>option>
                        <option>Fort Myers</option>option>
                </select>select>
                <span className="ml-auto text-xs text-gray-400">Filters coming soon</span>span>
          </div>div>
        );
}</div>
