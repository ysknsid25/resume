import twitter from '../assets/sns/twitter.png'
import amazon from '../assets/sns/amazon.png'
import bluesky from '../assets/sns/bluesky.png'
import connpass from '../assets/sns/connpass.png'
import github from '../assets/sns/github.png'
import insta from '../assets/sns/insta.png'
import note from '../assets/sns/note.png'
import threads from '../assets/sns/threads.png'
import zenn from '../assets/sns/zenn.png'

export const Icons = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <a href="https://twitter.com/samurai_se" target="_blank" rel="noopener noreferrer">
                        <img className="inline-block h-5 w-5" src={twitter} alt="icon" />
                    </a>
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <a href="https://www.threads.net/@samurai_se99" target="_blank" rel="noopener noreferrer">
                        <img className="inline-block h-5 w-5" src={threads} alt="icon" />
                    </a>
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <a href="https://www.amazon.co.jp/hz/wishlist/ls/3FRHPBCKN1Z1L?ref_=wl_share" target="_blank" rel="noopener noreferrer">
                        <img className="inline-block h-5 w-5" src={amazon} alt="icon" />
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <a href="https://www.instagram.com/samurai_se99/" target="_blank" rel="noopener noreferrer">
                        <img className="inline-block h-5 w-5" src={insta} alt="icon" />
                    </a>
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <a href="https://github.com/ysknsid25" target="_blank" rel="noopener noreferrer">
                        <img className="inline-block h-5 w-5" src={github} alt="icon" />
                    </a>
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <div>
                        <a href="https://note.com/samurai_se/" target="_blank" rel="noopener noreferrer">
                            <img className="inline-block h-5 w-5" src={note} alt="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <div>
                        <a href="https://bsky.app/profile/blessingsoftware.bsky.social" target="_blank" rel="noopener noreferrer">
                            <img className="inline-block h-5 w-5" src={bluesky} alt="icon" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <div>
                        <a href="https://blessingsoftware.connpass.com/" target="_blank" rel="noopener noreferrer">
                            <img className="inline-block h-5 w-5" src={connpass} alt="icon" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-solid border-2 border-gray-200">
                    <div>
                        <a href="https://zenn.dev/yskn_sid25" target="_blank" rel="noopener noreferrer">
                            <img className="inline-block h-5 w-5" src={zenn} alt="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}