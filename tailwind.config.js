import daisyUi from "daisyui";

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme:   {
        extend: {
            // any customizations you need
        }
    },
    plugins: [
        [daisyUi]
    ],
    // Optionally specify themes in config if you want to keep config-based themes
    daisyui: {
        themes: ["light", "dark", "cupcake"],
        // base:   false,
    }
}