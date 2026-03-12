export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6 md:px-12 bg-white rounded-3xl shadow-sm border border-black/5 p-8 md:p-16">
                <div className="prose prose-stone prose-headings:font-serif prose-headings:text-foreground prose-p:text-foreground/70 prose-a:text-primary max-w-none">
                    {children}
                </div>
            </div>
        </div>
    )
}
