interface FrameProps {
    children: React.ReactNode
}
export const Frame = ({ children }: FrameProps) => {
    return (
        <div className="border-2 rounded-lg border-gray-200 m-auto lg:w-3/5 md:w-4/5 w-5/6 lg:px-24 md:px-12 md:py-12 px-8 py-4">
            {children}
        </div>
    )
}