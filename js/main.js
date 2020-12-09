(function ($) {
  const ytPlaylist = (function () {
    // constants get underscores and big letters
    const _$VIDEO = $('#yt-playlist-module .video-container iframe');
    const _$PLAYLIST = $('#yt-playlist-module .playlist-container ul');

    const resizePlaylist = () => {
      const $ytModule = $('#yt-playlist-module');
      const _height = _$VIDEO.height();

      // set the module's max-height to match the video iframe
      // (this eliminates annoying media queries)
      if ($(window).width() > 767) {
        $ytModule.css('max-height', `${_height + 4}px`);
      } else {
        $ytModule.removeAttr('style');
      }
    };

    const handleVideoChange = function () {
      const $clicked = $(this);
      const id = $clicked.data('id');

      // update the active playlist item
      _$PLAYLIST.find('.active').removeClass('active');
      $clicked.addClass('active');

      // updating iframe "src" changes current video
      _$VIDEO.attr('src', `https://www.youtube.com/embed/${id}`);
    };

    const addHandlers = function () {
      const $allItems = $(`#yt-playlist-module .playlist-item`);
      // activate first item in playlist
      $allItems.first().addClass('active');

      $allItems.each((_, item) => {
        // add click handlers to all items
        $(item).click(handleVideoChange);
      });

      $(window).on('resize', resizePlaylist);
    };

    const init = function () {
      // no import, so cram it on window...
      const ytData = window.YTData;
      // should always be available but fail silently if not
      if (!ytData || !Array.isArray(ytData)) return;

      // flip the array before map
      const items = ytData.reverse().map((item) => {
        return `<li class="playlist-item" data-id="${item.id}"><p>${item.title}</p></li>`;
      });

      _$PLAYLIST.append(items);

      // last video is first, how convenient
      const firstID = ytData[0].id;
      _$VIDEO.attr('src', `https://www.youtube.com/embed/${firstID}`);

      addHandlers();
      resizePlaylist();
    };

    return {
      init,
    };
  })();

  $(document).ready(() => {
    ytPlaylist.init();
  });
})(jQuery);
