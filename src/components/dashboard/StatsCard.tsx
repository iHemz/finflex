"use client";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function StatsCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
      <dt>
        <div className="absolute rounded-md bg-indigo-500 p-3">
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <p className="ml-16 truncate text-sm font-medium text-gray-500">
          {title}
        </p>
      </dt>
      <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p
          className={`ml-2 flex items-baseline text-sm font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUpIcon
              className="h-5 w-5 flex-shrink-0 self-center text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ArrowDownIcon
              className="h-5 w-5 flex-shrink-0 self-center text-red-500"
              aria-hidden="true"
            />
          )}
          <span className="sr-only">
            {isPositive ? "Increased by" : "Decreased by"}
          </span>
          {change}
        </p>
      </dd>
    </div>
  );
}
