interface FrameProps {
    children: React.ReactNode
}
export const Frame = ({ children }: FrameProps) => {
    return (
        <div className="border-2 rounded-lg border-gray-200 md:px-32 md:py-12 px-16 py-4">
            {children}
        </div>
    )
}