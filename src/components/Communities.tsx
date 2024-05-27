import kobets from '../assets/community/kobets.png'
import ServerSidekt from '../assets/community/ServerSidekt.png'

export const Communities = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">My Communities</h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-2">
                <div className="flex justify-center items-center">
                    <a href="https://kobets.connpass.com/" target="_blank" rel="noopener noreferrer">
                        <img className="inline-block h-36 w-56" src={kobets} alt="icon" />
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://serverside-kt.connpass.com/" target="_blank" rel="noopener noreferrer">
                        <img className="inline-block h-36 w-56" src={ServerSidekt} alt="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}