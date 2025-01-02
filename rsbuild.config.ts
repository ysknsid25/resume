import { pluginReact } from "@rsbuild/plugin-react";

export default {
    plugins: [pluginReact()],
    html: {
        template: "./index.html",
    },
    source: {
        entry: {
            index: "./src/main.tsx",
        },
    },
};
