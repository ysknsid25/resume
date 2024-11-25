import clsx from "clsx";
import php from "../assets/program/php.png";
import gcp from "../assets/program/gcp.png";
import kotlin from "../assets/program/kotlin.png";
import ktor from "../assets/program/ktor.png";
import laravel from "../assets/program/laravel.png";
import linux from "../assets/program/linux.png";
import nextjs from "../assets/program/nextjs.png";
import react from "../assets/program/react.png";
import ts from "../assets/program/ts.png";
import nginx from "../assets/program/nginx.png";
import nest from "../assets/program/nest.png";
import python from "../assets/program/python.png";

type Skill = {
    name: string;
    level: number;
    icon: string;
};

const skills: Skill[] = [
    { name: "GCP", level: 3, icon: gcp },
    { name: "Python", level: 2, icon: python },
    { name: "ts", level: 3, icon: ts },
    { name: "React", level: 2, icon: react },
    { name: "Next.js", level: 2, icon: nextjs },
    { name: "Nest.js", level: 2, icon: nest },
    { name: "Kotlin", level: 2, icon: kotlin },
    { name: "Ktor", level: 2, icon: ktor },
    { name: "PHP", level: 3, icon: php },
    { name: "Laravel", level: 3, icon: laravel },
    { name: "Nginx", level: 2, icon: nginx },
    { name: "Linux", level: 2, icon: linux },
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
