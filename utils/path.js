import path from 'path'
import { fileURLToPath } from 'url'

export const getDirname = () => path.dirname(fileURLToPath(import.meta.url))