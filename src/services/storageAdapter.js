const STORAGE_KEY = "tsago-daily-dose";

const safeStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch (error) {
    console.warn("Local storage is unavailable", error);
    return null;
  }
};

export const storageAdapter = {
  get(key = STORAGE_KEY) {
    const storage = safeStorage();
    if (!storage) return null;

    try {
      const value = storage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.warn("Unable to read from storage", error);
      return null;
    }
  },

  set(value, key = STORAGE_KEY) {
    const storage = safeStorage();
    if (!storage) return;

    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("Unable to write to storage", error);
    }
  },

  remove(key = STORAGE_KEY) {
    const storage = safeStorage();
    if (!storage) return;

    try {
      storage.removeItem(key);
    } catch (error) {
      console.warn("Unable to remove from storage", error);
    }
  },
};
