
import { Icons } from '../components/Icons'
import { Profile } from '../components/Profile'
import { Skills } from '../components/Skills'
import { Frame } from '../components/Frame'

export const Top = () => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <Frame>
                <Profile></Profile>
                <Icons></Icons>
            </Frame>
            <Frame>
                <Skills></Skills>
            </Frame>
        </div>
    )
} 