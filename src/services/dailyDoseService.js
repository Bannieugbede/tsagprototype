import { storageAdapter } from "./storageAdapter";
import { slugify } from "../utils/slugify";

const STORAGE_KEY = "tsago-daily-dose-items";
const AUTH_KEY = "tsago-daily-dose-auth";

const initialDevotions = [
  {
    id: "daily-dose-1",
    title: "Renew Your Mind",
    slug: "renew-your-mind",
    date: "08/07/26",
    bibleVerse:
      "Don’t copy the behavior and customs of this world, but let God transform you into a new person by changing the way you think. Then you will learn to know God’s will for you, which is good and pleasing and perfect.",
    scriptureReference: "Romans 12:2 NLT",
    devotionalMessage:
      "A refreshed life begins with a renewed mind. God's Word transforms the way we think, helping us see life from His perspective. As your mind is renewed, your decisions, attitudes, and actions begin to reflect Christ.",
    prayer:
      "Father, renew my mind through Your Word and help me think according to Your truth, in Jesus' name.",
    keyTakeaway: "A renewed mind leads to a transformed life.",
    author: "TSAGO Daily Dose",
    featuredImage: "",
    status: "published",
    createdAt: "2026-07-01T10:00:00.000Z",
    updatedAt: "2026-07-01T10:00:00.000Z",
  },
  {
    id: "daily-dose-2",
    title: "A Peaceful Heart",
    slug: "a-peaceful-heart",
    date: "2026-07-07",
    bibleVerse: "Be still, and know that I am God.",
    scriptureReference: "Psalm 46:10",
    devotionalMessage:
      "Stillness is a spiritual discipline that allows us to hear the voice of God clearly.",
    prayer: "Father, quiet my heart and remind me of Your presence today.",
    keyTakeaway: "Peace begins when we pause to remember who God is.",
    author: "TSAGO Team",
    featuredImage: "",
    status: "published",
    createdAt: "2026-07-02T10:00:00.000Z",
    updatedAt: "2026-07-02T10:00:00.000Z",
  },
];

const getStoredDevotions = () => {
  const stored = storageAdapter.get(STORAGE_KEY);
  if (Array.isArray(stored) && stored.length) {
    return stored;
  }

  storageAdapter.set(initialDevotions, STORAGE_KEY);
  return initialDevotions;
};

export const dailyDoseService = {
  getAll({ status = "all", search = "", sort = "date", page = 1, pageSize = 6 } = {}) {
    const items = getStoredDevotions();
    const filtered = items.filter((item) => {
      const matchesStatus = status === "all" || item.status === status;
      const term = search.toLowerCase();
      const matchesSearch =
        !term ||
        [item.title, item.bibleVerse, item.scriptureReference, item.author, item.prayer]
          .join(" ")
          .toLowerCase()
          .includes(term);

      return matchesStatus && matchesSearch;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sort === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      if (sort === "title") {
        return a.title.localeCompare(b.title);
      }
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });

    const start = (page - 1) * pageSize;
    return {
      items: sorted.slice(start, start + pageSize),
      total: sorted.length,
      page,
      pageSize,
    };
  },

  getById(id) {
    return getStoredDevotions().find((item) => item.id === id);
  },

  getBySlug(slug) {
    return getStoredDevotions().find((item) => item.slug === slug);
  },

  create(devotion) {
    const items = getStoredDevotions();
    const nextItem = {
      ...devotion,
      id: devotion.id || `daily-dose-${Date.now()}`,
      slug: devotion.slug || slugify(devotion.title),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    items.unshift(nextItem);
    storageAdapter.set(items, STORAGE_KEY);
    return nextItem;
  },

  update(id, updates) {
    const items = getStoredDevotions();
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return null;

    const updated = {
      ...items[index],
      ...updates,
      slug: updates.slug || slugify(updates.title || items[index].title),
      updatedAt: new Date().toISOString(),
    };

    items[index] = updated;
    storageAdapter.set(items, STORAGE_KEY);
    return updated;
  },

  remove(id) {
    const items = getStoredDevotions().filter((item) => item.id !== id);
    storageAdapter.set(items, STORAGE_KEY);
    return true;
  },

  duplicate(id) {
    const item = this.getById(id);
    if (!item) return null;

    const duplicate = {
      ...item,
      id: `daily-dose-${Date.now()}`,
      slug: `${slugify(item.title)}-${Date.now()}`,
      title: `${item.title} (Copy)`,
      status: "draft",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return this.create(duplicate);
  },

  getStats() {
    const items = getStoredDevotions();
    const published = items.filter((item) => item.status === "published");
    const drafts = items.filter((item) => item.status === "draft");
    const latest = [...published].sort((a, b) => new Date(b.date) - new Date(a.date))[0];

    return {
      total: items.length,
      publishedCount: published.length,
      draftCount: drafts.length,
      latest,
      lastUpdated: items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0]?.updatedAt || null,
    };
  },

  getAuthState() {
    return storageAdapter.get(AUTH_KEY);
  },

  setAuthState(auth) {
    storageAdapter.set(auth, AUTH_KEY);
  },

  clearAuthState() {
    storageAdapter.remove(AUTH_KEY);
  },
};
