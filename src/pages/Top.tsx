
import { Icons } from '../components/Icons'
import { Profile } from '../components/Profile'
import { Skills } from '../components/Skills'
import { Community } from '../components/Community'
import { Certifications } from '../components/Certifications'
import { Career } from "../components/Career"
import { Frame } from '../components/Frame'

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
                <Certifications></Certifications>
            </Frame>
            <Frame>
                <Career></Career>
            </Frame>
        </div>
    )
} 