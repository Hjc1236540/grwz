const songs = [
    { title: '把回忆拼好给你', src: 'https://aqqmusic.tc.qq.com/M500000Ifbiv1pUwnW.mp3?guid=201176593&vkey=8D34698AAF6D1AAB681CB22B0DA972E3FFE41BCCB77C496C81D10F55756ED020AB9A94D8B42B901C564F1CFFC83046BEEB5EDF281E103646__v2b9abf46&uin=&fromtag=120042&src=M500002JnKxW332H0I.mp3' },
    { title: '远山少年', src: 'http://fsios.kugou.com/202602271943/7245ace3a091c494bd8dc35367799495/v3/070a5575eb5ac65acf120cfdc674b50c/yp/full/pi3_ct310000_s1942289472.mp3' },
    { title: '山高路远', src: 'https://m701.music.126.net/20260227191932/5879d6364b0c5168df678ac705db41bc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/76875706005/da55/fc5b/cf21/60ba88a66e0734a3097671dbff6cff40.mp3' },
    { title: '白头若是雪可替', src: 'https://aqqmusic.tc.qq.com/M500001JN4g62mMIC6.mp3?guid=1174922956&vkey=8E018FDD4A49C8F77469577828E4702F84E7A53A12C0B2BA394253B3F3663A036D02F9F68E6E30A33F30B53D6F43B915FA91EE5971EA3B0E__v2b9abf46&uin=&fromtag=120042&src=M500004EKh5V4PWG0K.mp3' },
    { title: '重生我在异乡为异客', src: 'https://aqqmusic.tc.qq.com/M5000007zx862wCyRm.mp3?guid=1829240524&vkey=05EB37879D5DDE44CE5232E1AAFB3FCBC02BAD449FA38387B38D5DAAE78971AA17D4468BB2A8FD5D9629A96498742FE471A156CEBC711803__v2b94c191&uin=&fromtag=120042&src=M500004gVP2x1ZawVs.mp3' },
    { title: '游山恋', src: 'http://fsios.kugou.com/202602272224/f5f08a40d0f8a4760a3a4ec896281bfc/v3/a4789ba8d51d6cdd83f474b30d970d55/yp/full/pi3_ct310000_s537190673.mp3' },
    { title: '知我', src: 'http://fsios.kugou.com/202602272235/44df1f36bd03ee00f4bfefb96c258de3/v3/98c39cfcba6ddbdef8474ffd8326f40f/yp/full/pi3_ct310000_s1766907773.mp3' },
    { title: '我在人间逍遥游', src: 'http://fsios.kugou.com/202602281056/b28a3e92fd5e4bf556c99913b8c9e17a/v3/a7f251a04baf32bfbd246ebd545a1f0c/yp/full/pi3_ct310000_s444028657.mp3' },
    { title: '雪山开出了格桑花', src: 'http://fsios.kugou.com/202602281057/1948e1925c8fe4fcb363d03e66064577/v3/569bf5f949ff403d08b9f934c3b51025/yp/full/pi3_ct310000_s4280359964.mp3' },
    { title: '月亮照山川', src: 'http://fsios.kugou.com/202602281107/cd46e7a03b953ede36bb8288c2877ea0/v3/9bbb2b020be26dd4c0e65d3d502bf115/yp/full/pi3_ct310000_s2840147546.mp3' }
];

let currentSongIndex = 0;
let isPlaying = false;
let audioPlayer = null;
let playIcon = null;
let pauseIcon = null;
let playIconMobile = null;
let pauseIconMobile = null;
let currentSongText = null;

function initMusicPlayer() {
    audioPlayer = document.getElementById('audio-player');
    playIcon = document.getElementById('play-icon');
    pauseIcon = document.getElementById('pause-icon');
    playIconMobile = document.getElementById('play-icon-mobile');
    pauseIconMobile = document.getElementById('pause-icon-mobile');
    currentSongText = document.getElementById('current-song');
    
    if (audioPlayer) {
        audioPlayer.addEventListener('ended', function() {
            nextSong();
        });
    }
    
    loadSong();
}

function toggleMusic() {
    if (!audioPlayer) return;
    
    if (songs[currentSongIndex].src === '') {
        alert('请先在 music.js 文件中添加音乐链接！');
        return;
    }

    if (isPlaying) {
        audioPlayer.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playIconMobile) playIconMobile.style.display = 'block';
        if (pauseIconMobile) pauseIconMobile.style.display = 'none';
        isPlaying = false;
    } else {
        audioPlayer.play();
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playIconMobile) playIconMobile.style.display = 'none';
        if (pauseIconMobile) pauseIconMobile.style.display = 'block';
        isPlaying = true;
    }
}

function nextSong() {
    if (!audioPlayer) return;
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    if (isPlaying) {
        audioPlayer.play();
    }
}

function prevSong() {
    if (!audioPlayer) return;
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    if (isPlaying) {
        audioPlayer.play();
    }
}

function loadSong() {
    if (!audioPlayer) return;
    audioPlayer.src = songs[currentSongIndex].src;
    if (currentSongText) {
        currentSongText.textContent = '正在播放：' + songs[currentSongIndex].title;
    }
}

document.addEventListener('DOMContentLoaded', initMusicPlayer);
