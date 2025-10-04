import React from 'react'

function SectionTitle({title, subtitle}: {title?: string, subtitle?: string}) {
    return (
        <div className="text-center mb-16">
            <h2 className="relative inline-block z-0 text-4xl md:text-5xl font-bold text-foreground mb-2 uppercase font-primary tracking-wide pb-4 before:content-[''] before:absolute before:w-48 before:h-6 before:bg-yellow-400/70 before:bottom-2 before:left-0  before:-z-10">
                {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
    )
}

export default SectionTitle