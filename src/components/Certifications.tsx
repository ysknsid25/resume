import lpic from '../assets/program/lpic.png'
import ipa from '../assets/program/ipa.png'
import gcp from '../assets/program/gcp.png'
import atcoder from '../assets/program/atcoder.png'
import java from '../assets/program/java.png'
import oracle from '../assets/program/oracle.png'

type Certification = {
    name: string,
    year: number,
    icon: string,
}

const certifications: Certification[] = [
    { name: "Google Proffesional Cloud Developer", year: 2022, icon: gcp },
    { name: "Lpic Lv.2", year: 2022, icon: lpic },
    { name: "AtCoder 茶", year: 2022, icon: atcoder },
    { name: "応用情報技術者", year: 2020, icon: ipa },
    { name: "Oracle Master Bronze", year: 2019, icon: oracle },
    { name: "Java SE8 Silver", year: 2018, icon: java },
]

export const Certifications = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Certifications</h1>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center gap-4">
                {certifications.map((certification, index) =>
                    <div key={index} className="py-2 pr-8 pl-8 md:pr-4 md:pl-12 lg:pl-20 flex justify-canter items-center rounded-xl bg-white border-solid border-2 border-gray-200">
                        <div className="grid grid-cols-1 justify-center items-center mr-4 gap-2">
                            <div className="flex items-center justify-center">
                                <img className="m-auto h-12 w-12" src={certification.icon} alt="icon" />
                            </div>
                            <div className="flex items-center justify-center text-xs text-gray-400">
                                {certification.year}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 justify-start items-center m-auto md:w-3/4 w-4/5">
                            <div className="text-sm text-gray-600 whitespace-normal md:w-4/5">
                                {certification.name}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}