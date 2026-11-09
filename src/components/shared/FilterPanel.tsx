"use client";

import { Search, Filter, Grid, List, X, Briefcase } from "lucide-react";
import { useState } from "react";

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (ind: string) => void;
  selectedTechnology: string;
  setSelectedTechnology: (tech: string) => void;
  sortBy: "newest" | "oldest" | "title";
  setSortBy: (sort: "newest" | "oldest" | "title") => void; 
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  allIndustries: string[];
  allTechnologies: string[];
}

const FilterPanel = ({
  searchTerm,
  setSearchTerm,
  selectedIndustry,
  setSelectedIndustry,
  selectedTechnology,
  setSelectedTechnology,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  allIndustries,
  allTechnologies
}: FilterPanelProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block bg-cardBg rounded-2xl p-5 border border-darkGrey shadow-md">
        <div className="grid grid-cols-5 gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightGrey/60 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-mutedGrey border border-darkGrey rounded-lg text-lightGrey placeholder-lightGrey/60 focus:outline-none focus:border-classicGold transition-colors duration-300 text-sm"
            />
          </div>

          {/* Industry Filter */}
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightGrey/60 w-4 h-4 pointer-events-none" />
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-mutedGrey border border-darkGrey rounded-lg text-lightGrey focus:outline-none focus:border-classicGold transition-colors duration-300 text-sm"
            >
              <option value="all">All Industries</option>
              {allIndustries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Technology Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightGrey/60 w-4 h-4 pointer-events-none" />
            <select
              value={selectedTechnology}
              onChange={(e) => setSelectedTechnology(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-mutedGrey border border-darkGrey rounded-lg text-lightGrey focus:outline-none focus:border-classicGold transition-colors duration-300 text-sm"
            >
              <option value="all">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "oldest" | "title")}
            className="w-full px-4 py-2 bg-mutedGrey border border-darkGrey rounded-lg text-lightGrey focus:outline-none focus:border-classicGold transition-colors duration-300 text-sm"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title">Alphabetical</option>
          </select>

          {/* View Mode */}
          <div className="flex rounded-lg border border-darkGrey overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              aria-label="Grid View"
              className={`flex-1 flex items-center justify-center py-2 px-3 transition-colors duration-300 ${
                viewMode === "grid" ? "bg-classicGold text-mutedGrey" : "bg-mutedGrey text-lightGrey hover:bg-darkGrey"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              aria-label="List View"
              className={`flex-1 flex items-center justify-center py-2 px-3 transition-colors duration-300 ${
                viewMode === "list" ? "bg-classicGold text-mutedGrey" : "bg-mutedGrey text-lightGrey hover:bg-darkGrey"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        {/* Search and Filter Toggle */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightGrey/60 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-cardBg border border-darkGrey rounded-lg text-lightGrey placeholder-lightGrey/60 focus:outline-none focus:border-classicGold transition-colors duration-300 text-sm"
            />
          </div>
          
          <button
            onClick={() => setIsFilterOpen(true)}
            aria-label="Open filter modal"
            className="px-4 py-3 bg-cardBg border border-darkGrey rounded-lg text-lightGrey hover:border-classicGold transition-colors duration-300"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-4">
          <div className="flex rounded-lg border border-darkGrey overflow-hidden bg-cardBg">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center justify-center py-2 px-6 transition-colors duration-300 text-sm ${
                viewMode === "grid" ? "bg-classicGold text-mutedGrey font-medium" : "bg-transparent text-lightGrey hover:bg-darkGrey"
              }`}
            >
              <Grid className="w-4 h-4 mr-2" />
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center justify-center py-2 px-6 transition-colors duration-300 text-sm ${
                viewMode === "list" ? "bg-classicGold text-mutedGrey font-medium" : "bg-transparent text-lightGrey hover:bg-darkGrey"
              }`}
            >
              <List className="w-4 h-4 mr-2" />
              List
            </button>
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
            <div className="bg-cardBg w-full rounded-t-2xl p-6 border-t border-darkGrey animate-slide-in-up">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-lightGrey">Filters & Sort</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-darkGrey rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-lightGrey" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-lightGrey mb-2">Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-mutedGrey border border-darkGrey rounded-lg text-lightGrey focus:outline-none focus:border-classicGold transition-colors duration-300 text-sm"
                  >
                    <option value="all">All Industries</option>
                    {allIndustries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-lightGrey mb-2">Technology</label>
                  <select
                    value={selectedTechnology}
                    onChange={(e) => setSelectedTechnology(e.target.value)}
                    className="w-full px-4 py-3 bg-mutedGrey border border-darkGrey rounded-lg text-lightGrey focus:outline-none focus:border-classicGold transition-colors duration-300 text-sm"
                  >
                    <option value="all">All Technologies</option>
                    {allTechnologies.map(tech => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-lightGrey mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "newest" | "oldest" | "title")}
                    className="w-full px-4 py-3 bg-mutedGrey border border-darkGrey rounded-lg text-lightGrey focus:outline-none focus:border-classicGold transition-colors duration-300 text-sm"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">Alphabetical</option>
                  </select>
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full mt-6 py-3 bg-classicGold text-mutedGrey rounded-lg font-medium hover:bg-classicGold/90 transition-colors duration-300 cursor-pointer"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterPanel;
