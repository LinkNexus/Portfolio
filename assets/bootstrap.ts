import { startStimulusApp, registerControllers } from "vite-plugin-symfony/stimulus/helpers"
import { registerReactControllerComponents, type ReactModule } from "vite-plugin-symfony/stimulus/helpers/react"

// register your React components before startStimulusApp
registerReactControllerComponents(
    import.meta.glob<ReactModule>("./react/controllers/**/*.ts(x)?"),
);

const app = startStimulusApp();
registerControllers(
    app,
    import.meta.glob<StimulusControllerInfosImport>(
        "./controllers/*_controller.ts",
        {
            query: "?stimulus",
            eager: true,
        },
    ),
);