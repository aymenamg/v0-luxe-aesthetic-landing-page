import React, { ReactNode } from 'react';

interface MedicalTooltipProps {
    term: string;
    definition: string;
    children: ReactNode;
    className?: string;
}

export function MedicalTooltip({ term, definition, children, className = '' }: MedicalTooltipProps) {
    return (
        <span className={`group relative inline-block cursor-help ${className}`}>
            <span className="border-b-[1.5px] border-dashed border-foreground/40 pb-0.5 hover:border-accent transition-colors duration-300">
                {children}
            </span>
            {/* Tooltip Content */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none transform group-hover:-translate-y-1">
                <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-black/5 p-4 text-left">
                    <p className="font-serif text-sm font-bold text-foreground mb-1 block">{term}</p>
                    <p className="text-xs text-foreground/70 leading-relaxed">{definition}</p>
                    {/* Arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-black/5 rotate-45"></div>
                </div>
            </div>
        </span>
    );
}
