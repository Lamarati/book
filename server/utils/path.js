import path from "path";
import { fileURLToPath } from "url";

export const getDirname = (importMeta) => path.dirname(fileURLToPath(importMeta.url));
