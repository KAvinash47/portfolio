/**
 * Centralized Asset Loader for the Portfolio
 * Preloads image sequences for animations and audio files for the chatbot
 */

export const assetCache = {
  heroIdle: [],
  heroMove: [],
  chatbotAvatar: [],
  audio: {},
  isLoaded: false,
  progress: 0,
  listeners: [],
};

const notifyListeners = () => {
  assetCache.listeners.forEach(cb => cb());
};

const IMAGE_SETS = [
  { key: 'heroIdle', folder: 'avatar', count: 30 },
  { key: 'heroMove', folder: 'avatar-move', count: 50 },
  { key: 'chatbotAvatar', folder: 'avatar-chat-bot', count: 50 },
];

const AUDIO_FILES = [
  'bot-open',
  'bot-close',
  'intro',
  'projects',
  'stack',
  'experience',
  'education',
  'contact',
  'clear',
  'fallback',
  // Project-specific audio (IDs from portfolio.js)
  'project-pdf-csv-pipeline',
  'project-collabnest',
  'project-ai-fir',
  'project-resume-roaster',
  'project-self-driving-car',
  'project-chat-app',
  'project-resqterra',
];

export const preloadAllAssets = (onProgress) => {
  if (assetCache.isLoaded) return Promise.resolve();

  const totalImages = IMAGE_SETS.reduce((sum, set) => sum + set.count, 0);
  const totalAudio = AUDIO_FILES.length;
  const totalItems = totalImages + totalAudio;
  let loadedItems = 0;

  const updateProgress = () => {
    loadedItems++;
    const progress = Math.min((loadedItems / totalItems) * 100, 100);
    assetCache.progress = progress;
    if (onProgress) onProgress(progress);
  };

  const loadImageSet = (set) => {
    return Array.from({ length: set.count }, (_, i) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `/assets/${set.folder}/${String(i + 1).padStart(2, '0')} - Edited.webp`;
        img.onload = () => {
          assetCache[set.key][i] = img;
          updateProgress();
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${img.src}`);
          updateProgress();
          resolve();
        };
      });
    });
  };

  const criticalImages = loadImageSet(IMAGE_SETS[0]); // Only wait for heroIdle
  const backgroundImages = IMAGE_SETS.slice(1).flatMap(loadImageSet);

  const audioPromises = AUDIO_FILES.map((id) => {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.src = `/assets/audio/chatbot/${id}.mp3`;
      
      audio.oncanplaythrough = () => {
        assetCache.audio[id] = audio;
        updateProgress();
        resolve();
        audio.oncanplaythrough = null;
      };

      audio.onerror = () => {
        updateProgress();
        resolve();
      };

      audio.load();
    });
  });

  // Background loading for non-critical assets
  Promise.all([...backgroundImages, ...audioPromises]).then(() => {
    console.log('[AssetLoader] All background assets finished loading.');
    assetCache.isLoaded = true;
    notifyListeners();
  });

  // Only block on the critical idle animation
  return Promise.all(criticalImages).then(() => {
    console.log('[AssetLoader] Critical assets loaded, ready to start.');
    // We don't set isLoaded=true here since we are still loading bg assets,
    // but we notify listeners so the Hero component can draw the first frame.
    notifyListeners();
    return assetCache;
  });
};
