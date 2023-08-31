interface FrameProps {
    children: React.ReactNode
}
export const Frame = ({ children }: FrameProps) => {
    return (
        <div className="border-2 rounded-lg border-gray-200 sm:px-48 sm:py-16 px-16 py-8">
            {children}
        </div>
    )
}