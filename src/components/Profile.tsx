import icon from "../assets/icon.png";
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

export const Profile = () => {
    return (
        <div className="mb-4">
            <div className="px-16 py-4">
                <img
                    className="m-auto h-20 w-20 rounded-full ring-2 ring-white"
                    src={icon}
                    alt="icon"
                />
            </div>
            <div>
                <h1 className="text-center text-3xl font-extrabold text-gray-600">
                    Kanon
                </h1>
                <p className="mt-2 text-center text-xs text-gray-400">
                    blessing software
                </p>
                <p className="mt-4 text-center text-sm text-gray-600">
                    完全在宅 programmer
                </p>
            </div>
            <div className="flex items-center justify-center mt-8">
                {snsList.map((sns, index) => (
                    <div key={index} className="mx-4">
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
                ))}
            </div>
        </div>
    );
};
