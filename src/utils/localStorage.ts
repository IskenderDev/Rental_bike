export const setItem = (key: string, value: unknown): void => {
  try {
    const serialized = JSON.stringify(value);
    window.localStorage.setItem(key, serialized);
  } catch (e) {
    console.error('Error setting localStorage item', e);
  }
};

export const getItem = <T>(key: string): T | null => {
  try {
    const item = window.localStorage.getItem(key);
    if (item === null) return null;
    return JSON.parse(item) as T;
  } catch (e) {
    console.error('Error getting localStorage item', e);
    return null;
  }
};

export const removeItem = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing localStorage item', e);
  }
};
