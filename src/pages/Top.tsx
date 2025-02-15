import { useState } from "react";
import { Profile } from "../components/Profile";
import { Skills } from "../components/Skills";
import { Social } from "../components/Social";
import { Communities } from "../components/Communities";
import { Menu } from "../components/Menu";
import { Certifications } from "../components/Certifications";
import { Career } from "../components/Career";
import { Books } from "../components/Books";
import { Conference } from "../components/Conference";
import { Works } from "../components/Works";
import { SideJob } from "../components/SideJob";
import { Events } from "../components/Events";
import { Frame } from "../components/Frame";
import { GitHubContributionsGraph } from "../components/GitHubContributionsGraph";
import { PopularAllArticle } from "../components/PopularAllArticles";
import { HatenaBookmarks } from "../components/HatenaBookmarks";

const top = "Top";
const skills = "Skills";
const certifications = "Certifications";
const career = "Career";
const conference = "Conference";
const books = "Books";
const events = "Events";
const works = "Works";
const sideJob = "Side Job";
const hatenaBookmark = "Hatena Bookmarks";

const menuList = [
    top,
    hatenaBookmark,
    conference,
    career,
    skills,
    certifications,
    books,
    sideJob,
    works,
    events,
];

interface DynamicContentsProps {
    selectedFrame: string;
}
const DynamicContents = ({
    selectedFrame,
}: DynamicContentsProps): JSX.Element => {
    return (
        <>
            {selectedFrame === top && (
                <>
                    <Frame>
                        <Social></Social>
                    </Frame>
                    <Frame>
                        <GitHubContributionsGraph></GitHubContributionsGraph>
                    </Frame>
                    <Frame>
                        <PopularAllArticle></PopularAllArticle>
                    </Frame>
                    <Frame>
                        <Communities></Communities>
                    </Frame>
                </>
            )}
            {selectedFrame === skills && (
                <Frame>
                    <Skills></Skills>
                </Frame>
            )}
            {selectedFrame === certifications && (
                <Frame>
                    <Certifications></Certifications>
                </Frame>
            )}
            {selectedFrame === career && (
                <Frame>
                    <Career></Career>
                </Frame>
            )}
            {selectedFrame === conference && (
                <Frame>
                    <Conference></Conference>
                </Frame>
            )}
            {selectedFrame === books && (
                <Frame>
                    <Books></Books>
                </Frame>
            )}
            {selectedFrame === works && (
                <Frame>
                    <Works></Works>
                </Frame>
            )}
            {selectedFrame === sideJob && (
                <Frame>
                    <SideJob></SideJob>
                </Frame>
            )}
            {selectedFrame === events && (
                <Frame>
                    <Events></Events>
                </Frame>
            )}
            {selectedFrame === hatenaBookmark && (
                <Frame>
                    <HatenaBookmarks></HatenaBookmarks>
                </Frame>
            )}
        </>
    );
};

export const Top = () => {
    const [selectedFrame, setSelectedFrame] = useState(top);
    const onClickMenuHandler = (selectedMenu: string) => {
        setSelectedFrame(selectedMenu);
    };
    return (
        <>
            <div className="flex items-center justify-end mt-2 mr-4">
                <Menu
                    selectMenu={selectedFrame}
                    menuList={menuList}
                    onClickMenuHandler={onClickMenuHandler}
                ></Menu>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full mt-4 mb-8">
                <Frame>
                    <Profile></Profile>
                </Frame>
                <DynamicContents
                    selectedFrame={selectedFrame}
                ></DynamicContents>
            </div>
        </>
    );
};
