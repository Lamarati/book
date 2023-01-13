
import createError from 'http-errors';

export function handleError(error) {
    console.error(error)
    
    if (!error?.isTrusted) {
        throw createError.InternalServerError(error.message)
    }
}