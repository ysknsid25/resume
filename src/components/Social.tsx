import twitter from "../assets/sns/twitter.png";
import amazon from "../assets/sns/amazon.png";
import github from "../assets/sns/github.png";
import speakerdeck from "../assets/sns/speakerdeck.png";
import hatena from "../assets/sns/hatena.png";

type SNS = {
    url: string;
    icon: string;
};

const snsList: SNS[] = [
    { url: "https://x.com/ysknsid25", icon: twitter },
    { url: "https://blog.inorinrinrin.com/", icon: hatena },
    { url: "https://speakerdeck.com/ysknsid25", icon: speakerdeck },
    { url: "https://github.com/ysknsid25", icon: github },
    {
        url: "https://www.amazon.jp/hz/wishlist/ls/969G9ER8XWFW?ref_=wl_share",
        icon: amazon,
    },
];

export const Social = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Socials
                </h1>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 items-center justify-center mb-8">
                {snsList.map((sns, index) => (
                    <div key={index} className="grid grid-cols-1 gap-4 m-auto">
                        <div className="flex justify-center items-center md:h-16 md:w-16 h-12 w-12 rounded-xl bg-white border-solid border-2 border-gray-200">
                            <a
                                href={sns.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="inline-block md:h-12 md:w-12 h-8 w-8"
                                    src={sns.icon}
                                    alt="icon"
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
