// Facade Class for Lazy Loading YouTube Playlists
    class YouTubeFacade {
        constructor() {
            this.apiLoaded = false;
            this.loadYouTubeAPI();
        }

        loadYouTubeAPI() {
            if (!this.apiLoaded) {
                const script = document.createElement('script');
                script.src = 'https://www.youtube.com/iframe_api';
                script.onload = () => {
                    this.apiLoaded = true;
                };
                document.body.appendChild(script);
            }
        }

        createPlaylistEmbed(containerId, playlistId, options = {}) {
            const container = document.getElementById(containerId);
            if (!container) {
                console.error(`Container with ID "${containerId}" not found.`);
                return;
            }

            // Remove the loader or placeholder
            container.innerHTML = '';

            // Create the iframe
            const iframe = document.createElement('iframe');
            iframe.width = options.width || '800';
            iframe.height = options.height || '450';
            iframe.src = `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=${options.autoplay || 0}`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;

            container.appendChild(iframe);
        }
    }

    // Initialize the Facade
    const youtubeFacade = new YouTubeFacade();

    // HTML Content
    const htmlContent = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh;">
            <p class="call-to-action" style="text-align: center;">
                💡 LIKE, COMMENT, and SUBSCRIBE for more helpful tutorials!
            </p>
            <a href="https://www.youtube.com/@MxEgyFRP" class="subscribe-link" style="margin-bottom: 20px; text-align: center;">
                📲 Subscribe to our channel for more tutorials | اشترك في القناة لمزيد من الدروس
            </a>
            <div id="playlist-1" data-playlist-id="PLF455eDxW-jD1Ko5O_FDc4NV5yNepMmer" style="margin-bottom: 20px; min-height: 450px; background: #f3f3f3; display: flex; align-items: center; justify-content: center;">
                <div class="loader"></div>
            </div>
            <div id="playlist-2" data-playlist-id="PLF455eDxW-jDgZ38GjcolMVZyXazV31H4" style="min-height: 450px; background: #f3f3f3; display: flex; align-items: center; justify-content: center;">
                <div class="loader"></div>
            </div>
        </div>
    `;

    // CSS for the loader (you can move this to your stylesheet)
    const style = document.createElement('style');
    style.textContent = `
        .loader {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Inject HTML Content
    document.addEventListener('DOMContentLoaded', function () {
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = htmlContent;

            // Lazy Loading Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const container = entry.target;
                        const playlistId = container.getAttribute('data-playlist-id');
                        const containerId = container.id;

                        // Create YouTube Playlist Embed
                        youtubeFacade.createPlaylistEmbed(containerId, playlistId);

                        // Stop observing after loading
                        observer.unobserve(container);
                    }
                });
            }, { threshold: 0.4 }); // Load when 50% visible

            // Observe all playlist containers
            document.querySelectorAll('[data-playlist-id]').forEach((element) => {
                observer.observe(element);
            });
        }
    });
