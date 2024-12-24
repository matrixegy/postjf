<!-- YouTube API Integration (for Playlist Embedding) -->
<script>
    // Load the YouTube API script
    function loadYouTubeAPI() {
        var script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);
    }

    function onYouTubeIframeAPIReady() {
        // Playlist 1
        new YT.Player('playlist-1', {
            height: '450',
            width: '800',
            videoId: 'PLF455eDxW-jD1Ko5O_FDc4NV5yNepMmer', // Playlist ID 1
            playerVars: {
                listType: 'playlist',
                list: 'PLF455eDxW-jD1Ko5O_FDc4NV5yNepMmer',
                autoplay: 0
            }
        });

        // Playlist 2
        new YT.Player('playlist-2', {
            height: '450',
            width: '800',
            videoId: 'PLF455eDxW-jDgZ38GjcolMVZyXazV31H4', // Playlist ID 2
            playerVars: {
                listType: 'playlist',
                list: 'PLF455eDxW-jDgZ38GjcolMVZyXazV31H4',
                autoplay: 0
            }
        });
    }

    loadYouTubeAPI();
</script>