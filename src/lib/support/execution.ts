export function executeWithError<T>(block: () => T): T {
    try {
        return block();
    } catch (e) {
        console.error(e);
        throw e;
    }
}
