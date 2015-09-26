var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {title: 'Tuxemon', page_name: 'index'});
});

router.get('/about.html', function(req, res) {
  res.render('pages/about', {title: 'Tuxemon | About', page_name: 'about'});
});

router.get('/irc.html', function(req, res) {
  res.render('pages/irc', {title: 'Tuxemon | IRC', page_name: 'irc'});
});

router.get('/download.html', function(req, res) {
  res.render('pages/download', {title: 'Tuxemon | Download', page_name: 'download'});
});

router.get('/music.html', function(req, res) {
  res.render('pages/music', {title: 'Tuxemon | Music', page_name: 'music'});
});

router.get('/windows-install.html', function(req, res) {
  res.render('pages/windows-install', {title: 'Tuxemon | Windows Install', page_name: 'windows'});
});

router.get('/linux-install.html', function(req, res) {
  res.render('pages/linux-install', {title: 'Tuxemon | Linux Install', page_name: 'linux'});
});

router.get('/fedora-install.html', function(req, res) {
  res.render('pages/fedora-install', {title: 'Tuxemon | Fedora Install', page_name: 'linux'});
});


router.get('/mac-install.html', function(req, res) {
  res.render('pages/mac-install', {title: 'Tuxemon | Mac OS X Install', page_name: 'mac'});
});

router.get('/android-install.html', function(req, res) {
  res.render('pages/android-install', {title: 'Tuxemon | Android Install', page_name: 'android'});
});

router.get('/gcwzero-install.html', function(req, res) {
  res.render('pages/gcwzero-install', {title: 'Tuxemon | GCW Zero Install', page_name: 'gcw'});
});

module.exports = router;
