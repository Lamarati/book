import createHttpError from "http-errors";
import parentDebug from "debug";

const debug = parentDebug("book:cors");

export function getCorsPublicOptions(config) {
    return {
        origin(origin, callback) {
            const { whitelisted } = config.options.cors;
            debug("Checking origin %s", origin);

            if (config.options.nodeEnv === "development") {
                debug("Whitelisting in development.");
                return callback(null, true);
            }

            if (Array.isArray(whitelisted) && whitelisted.includes(origin)) {
                debug("Domain is whitelisted.");
                return callback(null, true);
            }

            debug("Domain blocked by CORS");
            callback(new createHttpError.BadRequest());
        },
    };
}
