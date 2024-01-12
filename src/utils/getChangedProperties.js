export function getChangedProperties(obj1, obj2) {
    const changedProperties = {};
    const allKeys = Object.keys({ ...obj1 });

    allKeys.forEach((key) => {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            const deep = getChangedProperties(obj1[key], obj2[key]);
            if (Object.keys(deep).length > 0) {
                changedProperties[key] = deep;
            }
        }

        if (obj1[key] !== obj2[key]) {
            changedProperties[key] = obj2[key];
        }
    });

    return changedProperties;
}
