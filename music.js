const songs = [
    { title: '把回忆拼好给你', src: './music/music1bhyphgn.mp3' },
    { title: '远山少年', src: './music/music2yssn.mp3' },
    { title: '山高路远', src: './music/music3sgly.mp3' },
    { title: '白头若是雪可替', src: './music/music4btrsxkt.mp3' },
    { title: '重生我在异乡为异客', src: './music/music5csyxwyk.mp3' },
    { title: '游山恋', src: './music/music6ysl.mp3' },
    { title: '知我', src: './music/music7zw.mp3' },
    { title: '我在人间逍遥游', src: './music/music8xyy.mp3' },
    { title: '雪山开出了格桑花', src: './music/music9gsh.mp3' },
    { title: '月亮照山川', src: './music/music10zsc.mp3' },
    { title: '桃花笑', src: './music/music11thx.mp3' },
    { title: '红色高跟鞋', src: './music/music12hsggx.mp3' },
    { title: '今晚不想睡', src: './music/music14wdm.mp3' },
    { title: '良人归', src: './music/music21lrg.mp3' },
    { title: '卡尔永远的神', src: './music/music22ke.mp3' },
    { title: '半点心', src: './music/music23bdx.mp3' },
    { title: '我要找到你', src: './music/music24wyzdn.mp3' },
    { title: '下完这场雨', src: './music/music25xwzcy.mp3' },
    { title: '怎么说我不爱你', src: './music/music26zmswban.mp3' },
    { title: '月亮翻过小山坡', src: './music/music27ylfgxsp.mp3' },
    { title: '人生走一遭', src: './music/music28rszyz.mp3' },
    { title: '别怕我伤心 广西神曲DJ', src: './music/music29gxsq.mp3' },
    { title: '自律才是修行', src: './music/music15zilv.mp3' },
    { title: '马上发大财', src: './music/music16msfc.mp3' },
    { title: '夜萤火虫', src: './music/music17yhc.mp3' },
    { title: '风之谷', src: './music/music18fzg.mp3' },
    { title: '一点点', src: './music/music19ydd.mp3' },
    { title: '多幸运', src: './music/music20dxy.mp3' },
    { title: '吴哥窟', src: './music/music30wggk.mp3' }
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
