// Facade Class for YouTube Integration with Lazy Loading
class YouTubeFacade {
    constructor() {
        this.apiLoaded = false;
        this.initAPI();
    }

    initAPI() {
        if (!this.apiLoaded) {
            const script = document.createElement('script');
            script.src = 'https://www.youtube.com/iframe_api';
            script.onload = () => {
                this.apiLoaded = true;
                if (typeof onYouTubeIframeAPIReady === 'function') {
                    onYouTubeIframeAPIReady();
                }
            };
            document.body.appendChild(script);
        }
    }

    createPlaylist(playerId, playlistId, options = {}) {
        if (!this.apiLoaded) {
            console.error('YouTube API is not loaded yet.');
            return;
        }

        new YT.Player(playerId, {
            height: options.height || '450',
            width: options.width || '800',
            videoId: playlistId,
            playerVars: {
                listType: 'playlist',
                list: playlistId,
                autoplay: options.autoplay || 0,
                ...options.playerVars,
            },
        });
    }
}

// Facade Instance
const youtubeFacade = new YouTubeFacade();

// Define YouTube API Ready function
function onYouTubeIframeAPIReady() {
    youtubeFacade.createPlaylist('playlist-1', 'PLF455eDxW-jD1Ko5O_FDc4NV5yNepMmer');
    youtubeFacade.createPlaylist('playlist-2', 'PLF455eDxW-jDgZ38GjcolMVZyXazV31H4');
}

// IntersectionObserver to load the YouTube player only when in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const playerId = entry.target.id;
            const playlistId = entry.target.getAttribute('data-playlist-id');
            youtubeFacade.createPlaylist(playerId, playlistId);
            observer.unobserve(entry.target); // Stop observing once loaded
        }
    });
}, { threshold: 0.5 }); // Load when 50% of the element is visible

// HTML with data attributes for lazy loading
const htmlContent = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh;">
        <p class="call-to-action" style="text-align: center;">
            💡 LIKE, COMMENT, and SUBSCRIBE for more helpful tutorials!
        </p>
        <a href="https://www.youtube.com/@MxEgyFRP" class="subscribe-link" style="margin-bottom: 20px; text-align: center;">
            📲 Subscribe to our channel for more tutorials | اشترك في القناة لمزيد من الدروس
        </a>
        <div id="playlist-1" data-playlist-id="PLF455eDxW-jD1Ko5O_FDc4NV5yNepMmer" style="margin-bottom: 20px;"></div>
        <div id="playlist-2" data-playlist-id="PLF455eDxW-jDgZ38GjcolMVZyXazV31H4"></div>
    </div>
`;

// Inject HTML into the DOM
const container = document.getElementById('app');
if (container) {
    container.innerHTML = htmlContent;

}
