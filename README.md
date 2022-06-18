# Tiktok-Sound-Downloader
 
 [Link to NPM](https://www.npmjs.com/package/tiktok-sound-downloader)
 > Inhouse
```js (async () => {
  const TiktokSoundDownloader = require('../index.js');
  const Tiktok = new TiktokSoundDownloader();
  await Tiktok.download(
    'https://www.tiktok.com/t/ZTdKBSH8C/',
    __dirname + '/test.mp3'
  );
})();
```
> NPM
```js (async () => {
  const TiktokSoundDownloader = require('tiktok-sound-downloader');
  const Tiktok = new TiktokSoundDownloader();
  await Tiktok.download(
    'https://www.tiktok.com/t/ZTdKBSH8C/',
    __dirname + '/test.mp3'
  );
})();```
