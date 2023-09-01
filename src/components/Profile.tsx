import icon from '../assets/icon.png'
export const Profile = () => {
    return (
        <div className="mb-8">
            <div className="px-16 py-4">
                <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={icon} alt="icon" />
            </div>
            <div>
                <h1 className="text-center text-3xl font-extrabold text-gray-600">Kanon</h1>
                <p className="mt-2 text-center text-xs text-gray-400">Otaku Developer Advocate</p>
                <p className="mt-4 text-center text-sm text-gray-600">今日を昨日よりもいい一日にする</p>
            </div>
        </div>
    )
}