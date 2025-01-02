import { pluginReact } from "@rsbuild/plugin-react";

export default {
    plugins: [pluginReact()],
    source: {
        entry: {
            index: "./src/main.tsx",
        },
    },
};
