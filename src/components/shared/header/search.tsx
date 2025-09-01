"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

const categories = ["Men", "Women", "Kids", "Accessories"];

export default function Search() {
  return (
    <form
      action="/search"
      method="GET"
      className="flex w-full max-w-lg items-center gap-2"
    >
      {/* Category dropdown */}
      <Select name="category">
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category.toLowerCase()}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search input */}
      <Input
        placeholder="Search products..."
        name="q"
        type="search"
        className="flex-1"
      />

      {/* Search button */}
      <Button type="submit" size="icon" className="rounded-md">
        <SearchIcon className="h-5 w-5" />
      </Button>
    </form>
  );
}
