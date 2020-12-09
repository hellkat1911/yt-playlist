# YouTube Playlist

A responsive module for showcasing multiple YouTube videos in a compact way.

![YouTube Playlist](https://hk-misc.s3.amazonaws.com/yt-playlist-screen.png?raw=true "YouTube Playlist")

### Setup:

1. Copy the HTML, CSS, and scripts into the appropriate places in your project

1. Update ```main.js```, which is an array of objects (each one representing a YouTube video)

1. To get the ID, go to the URL of your YouTube video and copy everything after ```watch?v=```

1. The title is whatever you'd like to show up in the playlist label for that video

1. The playlist scrolls if there's too many items for its height


### Example:

```js
window.YTData = [
  {
    id: "aBcDeF_G",
    title: "My awesome video 1",
  },
  {
    id: "hIjKl_M",
    title: "My awesome video 2",
  },
];
```

### Notes:

- You don't have to attach your data to the ```window``` object. This is just a demo, and I did this for convenience. It can be treated as a normal ```import``` if your project is using Webpack, etc.

- Yes, I know I am firing a callback on the ```resize``` event with no throttling/debounce. Again, this is a demo. I assume you will take all due performance considerations into account for your project.

<hr />

author: [hellkat1911](https://github.com/hellkat1911)
