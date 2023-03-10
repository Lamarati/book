import _ from "lodash";

export const config = {};

const staticOptions = {
    cors: {
        whitelisted: [],
        foo: "test",
    },
};

export function mergeOptions() {
    const whitelisted = (process.env.CORS_WHITELISTED_DOMAINS || "").split(",");
    const nodeEnv = process.env.NODE_ENV || "production";

    const envOptions = {
        cors: {
            whitelisted,
        },
        nodeEnv,
    };

    const options = {};

    _.merge(options, staticOptions, envOptions);

    Object.defineProperty(config, "options", {
        writable: false,
        value: options,
        enumerable: true,
    });
}

export const getConfig = () => config;
