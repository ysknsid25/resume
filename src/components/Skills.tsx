import clsx from "clsx";
import php from "../assets/program/php.png";
import docker from "../assets/program/docker.png";
import gcp from "../assets/program/gcp.png";
import java from "../assets/program/java.png";
import js from "../assets/program/js.png";
import kotlin from "../assets/program/kotlin.png";
import ktor from "../assets/program/ktor.png";
import laravel from "../assets/program/laravel.png";
import linux from "../assets/program/linux.png";
import mysql from "../assets/program/mysql.png";
import nextjs from "../assets/program/nextjs.png";
import oracle from "../assets/program/oracle.png";
import react from "../assets/program/react.png";
import spring from "../assets/program/spring.png";
import ts from "../assets/program/ts.png";
import nginx from "../assets/program/nginx.png";
import git from "../assets/program/git.png";
import github from "../assets/sns/github.png";
import aws from "../assets/program/aws.png";
import nest from "../assets/program/nest.png";

type Skill = {
    name: string;
    level: number;
    icon: string;
};

const skills: Skill[] = [
    { name: "PHP", level: 2, icon: php },
    { name: "Laravel", level: 2, icon: laravel },
    { name: "Java", level: 2, icon: java },
    { name: "Spring", level: 1, icon: spring },
    { name: "Kotlin", level: 2, icon: kotlin },
    { name: "Ktor", level: 2, icon: ktor },
    { name: "js", level: 2, icon: js },
    { name: "ts", level: 2, icon: ts },
    { name: "React", level: 2, icon: react },
    { name: "Next.js", level: 2, icon: nextjs },
    { name: "Nest.js", level: 2, icon: nest },
    { name: "MySQL", level: 2, icon: mysql },
    { name: "Oracle", level: 2, icon: oracle },
    { name: "Nginx", level: 2, icon: nginx },
    { name: "Docker", level: 2, icon: docker },
    { name: "Git", level: 2, icon: git },
    { name: "GitHub", level: 2, icon: github },
    { name: "Linux", level: 2, icon: linux },
    { name: "GCP", level: 2, icon: gcp },
    { name: "AWS", level: 1, icon: aws },
];

const getLevelCssClass = (level: number) => {
    switch (level) {
        case 1:
            return "border-l-gray-200 border-b-gray-200 border-r-gray-200";
        case 2:
            return "border-l-gray-200 border-b-gray-200";
        case 3:
            return "border-l-gray-200";
        default:
            return "";
    }
};

interface LevelItemProps {
    skill: Skill;
}
const LevelItem = ({ skill }: LevelItemProps): JSX.Element => {
    const levelCssClass = getLevelCssClass(skill.level);
    return (
        <div className="flex justify-center items-center md:h-32 md:w-32 h-24 w-24 rounded-xl bg-white border-solid border-2 border-gray-200">
            <div
                className={clsx(
                    "flex justify-center items-center transform rotate-45 border-solid border-8 rounded-full border-cyan-400 md:h-24 md:w-24 h-20 w-20",
                    levelCssClass
                )}
            >
                <img
                    className="inline-block md:h-12 md:w-12 h-10 w-10 transform -rotate-45"
                    src={skill.icon}
                    alt="icon"
                />
            </div>
        </div>
    );
};

export const Skills = (): JSX.Element => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Skills
                </h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="grid grid-cols-1 gap-4">
                            <LevelItem skill={skill} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
