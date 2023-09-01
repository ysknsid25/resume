
import { Icons } from '../components/Icons'
import { Profile } from '../components/Profile'
import { Skills } from '../components/Skills'
import { Community } from '../components/Community'
import { Frame } from '../components/Frame'
import lpic from '../assets/program/lpic.png'

export const Top = () => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <Frame>
                <Profile></Profile>
                <Icons></Icons>
            </Frame>
            <Frame>
                <Community></Community>
            </Frame>
            <Frame>
                <Skills></Skills>
            </Frame>
            <Frame>
                <div className="grid grid-cols-1 items-center justify-center gap-4">
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Certifications</h1>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center ">
                        <div className="flex h-16 justify-start items-center rounded-xl bg-white border-solid border-2 border-gray-200">
                            <div className="flex items-center justify-center mx-4">
                                <img className="inline-block h-12 w-12" src={lpic} alt="icon" />
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="grid justify-items-center text-sm text-gray-600 ">
                                    Lpic Lv.2
                                </div>
                                <div className="grid justify-items-center text-xs text-gray-400">
                                    2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Frame>
        </div>
    )
} 