import React from 'react';

interface SkeletonCardProps {
  count?: number;
}

export default function SkeletonCard({ count = 3 }: SkeletonCardProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-xl border border-[#D7B18E]/30 overflow-hidden flex flex-col h-full animate-pulse shadow-sm"
        >
          {/* Shimmering Aspect Image */}
          <div className="relative aspect-4/3 bg-[#FAF5F0]/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F0]/30 via-[#D7B18E]/25 to-[#FAF5F0]/30 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            {/* Soft floating box placeholder */}
            <div className="absolute bottom-3 left-3 bg-[#D7B18E]/30 h-5 w-24 rounded"></div>
          </div>

          {/* Metadata details skeleton */}
          <div className="p-5 flex-1 flex flex-col justify-between space-y-4 font-sans">
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-4">
                {/* Title */}
                <div className="h-5 bg-[#D7B18E]/30 rounded w-2/3"></div>
                {/* Price */}
                <div className="h-5 bg-[#D7B18E]/35 rounded w-12"></div>
              </div>

              {/* Description body lines */}
              <div className="space-y-2">
                <div className="h-3 bg-[#FAF5F0]/80 rounded w-full"></div>
                <div className="h-3 bg-[#FAF5F0]/80 rounded w-5/6"></div>
                <div className="h-3 bg-[#FAF5F0]/80 rounded w-4/5"></div>
              </div>

              {/* Specs tags placeholder */}
              <div className="flex gap-2 pt-2">
                <div className="h-5 bg-[#FAF5F0]/60 rounded-full w-16 border border-[#D7B18E]/20"></div>
                <div className="h-5 bg-[#FAF5F0]/60 rounded-full w-20 border border-[#D7B18E]/20"></div>
              </div>
            </div>

            {/* Bottom bar skeleton */}
            <div className="pt-4 mt-4 border-t border-[#D7B18E]/20 flex items-center justify-between">
              <div className="h-3 bg-[#FAF5F0]/65 rounded w-16"></div>
              <div className="h-3 bg-[#FAF5F0]/65 rounded w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
