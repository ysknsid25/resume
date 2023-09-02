
import { Icons } from '../components/Icons'
import { Profile } from '../components/Profile'
import { Skills } from '../components/Skills'
import { Community } from '../components/Community'
import { Menu } from '../components/Menu'
import { Certifications } from '../components/Certifications'
import { Career } from "../components/Career"
import { Articles } from '../components/Articles'
import { Conference } from '../components/Conference'
import { Works } from '../components/Works'
import { LT } from '../components/LT'
import { Frame } from '../components/Frame'

export const Top = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-end">
                    <Menu></Menu>
                </div>
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
                <Frame>
                    <LT></LT>
                </Frame>
                <Frame>
                    <Articles></Articles>
                </Frame>
                <Frame>
                    <Conference></Conference>
                </Frame>
                <Frame>
                    <Works></Works>
                </Frame>
            </div>
        </>
    )
} 