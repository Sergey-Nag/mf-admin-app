export function getValueByPath(obj, path) {
    return path
        .split(/\W/)
        .filter(Boolean)
        .reduce((res, key) => {
            const index = parseInt(key, 10);
            if (Number.isNaN(index)) {
                return (res || {})[key];
            }
            return (res || [])[index];
        }, obj);
}
