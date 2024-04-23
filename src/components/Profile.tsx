import icon from '../assets/icon.png'
export const Profile = () => {
    return (
        <div className="mb-4">
            <div className="px-16 py-4">
                <img className="m-auto h-20 w-20 rounded-full ring-2 ring-white" src={icon} alt="icon" />
            </div>
            <div>
                <h1 className="text-center text-3xl font-extrabold text-gray-600">Kanon</h1>
                <p className="mt-2 text-center text-xs text-gray-400">blessing software</p>
                <p className="mt-4 text-center text-sm text-gray-600">俺の敵はだいたい俺です</p>
            </div>
        </div>
    )
}