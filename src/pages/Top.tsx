import { useState } from 'react'
import { Profile } from '../components/Profile'
import { Skills } from '../components/Skills'
import { Social } from '../components/Social'
import { Menu } from '../components/Menu'
import { Certifications } from '../components/Certifications'
import { Career } from "../components/Career"
import { Articles } from '../components/Articles'
import { Conference } from '../components/Conference'
import { Works } from '../components/Works'
import { LT } from '../components/LT'
import { SideJob } from '../components/SideJob'
import { DevRel } from '../components/DevRel'
import { Frame } from '../components/Frame'
import { Otakatu } from '../components/Otakatu'

const social = "Social"
const skills = "Skills"
const certifications = "Certifications"
const career = "Career"
const lt = "LT"
const articles = "Articles"
const conference = "Conference"
const devrel = "DevRel"
const works = "Works"
const sideJob = "Side Job"
const otakatu = "Otakatu"

const menuList = [
    social,
    skills,
    career,
    certifications,
    lt,
    conference,
    devrel,
    articles,
    works,
    sideJob,
    otakatu,
]

interface DynamicContentsProps {
    selectedFrame: string
}
const DynamicContents = ({ selectedFrame }: DynamicContentsProps): JSX.Element => {
    return (
        <>
            {selectedFrame === social && <Frame>
                <Social></Social>
            </Frame>}
            {
                selectedFrame === skills && <Frame>
                    <Skills></Skills>
                </Frame>
            }
            {
                selectedFrame === certifications &&
                <Frame>
                    <Certifications></Certifications>
                </Frame>
            }
            {
                selectedFrame === career &&
                <Frame>
                    <Career></Career>
                </Frame>
            }
            {
                selectedFrame === lt &&
                <Frame>
                    <LT></LT>
                </Frame>
            }
            {
                selectedFrame === articles &&
                <Frame>
                    <Articles></Articles>
                </Frame>
            }
            {
                selectedFrame === conference &&
                <Frame>
                    <Conference></Conference>
                </Frame>
            }
            {
                selectedFrame === works &&
                <Frame>
                    <Works></Works>
                </Frame>
            }
            {
                selectedFrame === sideJob &&
                <Frame>
                    <SideJob></SideJob>
                </Frame>
            }
            {
                selectedFrame === devrel &&
                <Frame>
                    <DevRel></DevRel>
                </Frame>
            }
            {
                selectedFrame === otakatu &&
                <Frame>
                    <Otakatu></Otakatu>
                </Frame>
            }
        </>
    )
}

export const Top = () => {
    const [selectedFrame, setSelectedFrame] = useState(social)
    const onClickMenuHandler = (selectedMenu: string) => {
        setSelectedFrame(selectedMenu)
    }
    return (
        <>
            <div className="flex items-center justify-end mt-2 mr-4">
                <Menu selectMenu={selectedFrame} menuList={menuList} onClickMenuHandler={onClickMenuHandler}></Menu>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full mt-4 mb-8">
                <Frame>
                    <Profile></Profile>
                </Frame>
                <DynamicContents selectedFrame={selectedFrame}></DynamicContents>
            </div>
        </>
    )
} 