
const OAUTH2_CLIENT_ID = '120623149106-e1vc0be0ho8htjfc4t445lkeme7cl15m.apps.googleusercontent.com';
const OAUTH2_SCOPES = [
    'https://www.googleapis.com/auth/youtube.readonly'
];
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
console.log("tag",tag.src);
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
window.onJSClientLoad = function() {
    console.log("onJSClientLoad");
    gapi.auth.init(function() {
        window.setTimeout(checkAuth, 1);
    });
};
function checkAuth() {
    gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
    }, handleAuthResult);
}
function handleAuthResult(authResult) {
    console.log("authResult",authResult);
    if (authResult) {

        // Authorization was successful. Hide authorization prompts and show
        // content that should be visible after authorization succeeds.
        $('.pre-auth').hide();
        $('.post-auth').show();

        loadAPIClientInterfaces();
    } else {
        // Authorization was unsuccessful. Show content related to prompting for
        // authorization and hide content that should be visible if authorization
        // succeeds.
        $('.post-auth').hide();
        $('.pre-auth').show();

        // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
        // client flow. The current function is called when that flow completes.
        $('#login-link').click(function() {
            console.log("fdfdg");
            gapi.auth.authorize({
                client_id: OAUTH2_CLIENT_ID,
                scope: OAUTH2_SCOPES,
                immediate: false
            }, handleAuthResult);
        });
    }
}
function loadAPIClientInterfaces() {

    gapi.client.load('youtube', 'v3', function() {
        handleAPILoaded();
    });
}
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}
class SearchYoutube extends React.Component{
    constructor() {
        super();
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(event){
        event.preventDefault();
        var component=this;
        var playlistId, nextPageToken,prevPageToken;
        var searchString = this.input.value;
        requestVideoPlaylist(searchString);
        function requestVideoPlaylist(playlistId, pageToken) {
            $('#video-container').html('');
            var requestOptions = {
                playlistId: playlistId,
                part: 'snippet',
                maxResults: 10
            };
            if (pageToken) {
                requestOptions.pageToken = pageToken;
            }
            var request = gapi.client.youtube.playlistItems.list(requestOptions);
            request.execute(function(response) {
                //nextPageToken = response.result.nextPageToken;
                //var nextVis = nextPageToken ? 'visible' : 'hidden';
                //$('#next-button').css('visibility', nextVis);
                //prevPageToken = response.result.prevPageToken
               // var prevVis = prevPageToken ? 'visible' : 'hidden';
                //$('#prev-button').css('visibility', prevVis);
                var playlistItems = response.result.items;
                console.log("playlistItems",playlistItems);
                if (playlistItems) {
                    $.each(playlistItems, function(index, item) {
                        displayResult(item.snippet);
                    });
                } else {
                    $('#video-container').html('Sorry you have no uploaded videos');
                }
            });
        }
        function displayResult(videoSnippet) {
            var title = videoSnippet.title;
            var videoId = videoSnippet.resourceId.videoId;
            $('#video-container').append('<p>' + title + ' - ' + videoId + '</p>');
        }
  }
    render() {
    return (
        <div className="commentBox1">
            <div id="buttons">
                <input id="query" type="text" ref={node => {this.input=node}} /><button id="search-button" onClick={this.handleSearch}>Search</button>
            </div>
            <div id="video-container"></div>
            <div id="search-container"></div>
        </div>

    );
}

}

export default SearchYoutube;
