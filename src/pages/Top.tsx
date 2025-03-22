import { Profile } from "../components/Profile";
import { Skills } from "../components/Skills";
import { Certifications } from "../components/Certifications";
import { Career } from "../components/Career";
import { Conference } from "../components/Conference";
import { SideJob } from "../components/SideJob";
import { Frame } from "../components/Frame";
import { GitHubContributionsGraph } from "../components/GitHubContributionsGraph";

export const Top = () => {
    return (
        <div className="grid grid-cols-1 gap-4 w-full mt-4 mb-8">
            <Frame>
                <Profile></Profile>
            </Frame>
            <Frame>
                <GitHubContributionsGraph></GitHubContributionsGraph>
            </Frame>
            <Frame>
                <Skills></Skills>
            </Frame>
            <Frame>
                <Certifications></Certifications>
            </Frame>
            <Frame>
                <Conference></Conference>
            </Frame>
            <Frame>
                <Career></Career>
            </Frame>
            <Frame>
                <SideJob></SideJob>
            </Frame>
        </div>
    );
};
