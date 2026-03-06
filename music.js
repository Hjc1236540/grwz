const songs = [
    { title: '把回忆拼好给你', src: 'https://aqqmusic.tc.qq.com/M500000Ifbiv1pUwnW.mp3?guid=201176593&vkey=8D34698AAF6D1AAB681CB22B0DA972E3FFE41BCCB77C496C81D10F55756ED020AB9A94D8B42B901C564F1CFFC83046BEEB5EDF281E103646__v2b9abf46&uin=&fromtag=120042&src=M500002JnKxW332H0I.mp3' },
    { title: '远山少年', src: 'http://fsios.kugou.com/202602271943/7245ace3a091c494bd8dc35367799495/v3/070a5575eb5ac65acf120cfdc674b50c/yp/full/pi3_ct310000_s1942289472.mp3' },
    { title: '山高路远', src: 'https://aqqmusic.tc.qq.com/M500001u10P10PhDRC.mp3?guid=365678871&vkey=3E808F98A2CEC4A7876FEB7761B07A3D84D9B7BD3C0E00E5F516C6027AF09E4F57F7B6912217DF165AB7B464D7CEA16ADB89DAD17FB78A33__v21e2a1e59&uin=&fromtag=120042&src=M5000017s0cv0EUXRj.mp3' },
    { title: '白头若是雪可替', src: 'https://aqqmusic.tc.qq.com/M500001JN4g62mMIC6.mp3?guid=1174922956&vkey=8E018FDD4A49C8F77469577828E4702F84E7A53A12C0B2BA394253B3F3663A036D02F9F68E6E30A33F30B53D6F43B915FA91EE5971EA3B0E__v2b9abf46&uin=&fromtag=120042&src=M500004EKh5V4PWG0K.mp3' },
    { title: '重生我在异乡为异客', src: 'https://aqqmusic.tc.qq.com/M5000007zx862wCyRm.mp3?guid=1829240524&vkey=05EB37879D5DDE44CE5232E1AAFB3FCBC02BAD449FA38387B38D5DAAE78971AA17D4468BB2A8FD5D9629A96498742FE471A156CEBC711803__v2b94c191&uin=&fromtag=120042&src=M500004gVP2x1ZawVs.mp3' },
    { title: '游山恋', src: 'http://fsios.kugou.com/202602272224/f5f08a40d0f8a4760a3a4ec896281bfc/v3/a4789ba8d51d6cdd83f474b30d970d55/yp/full/pi3_ct310000_s537190673.mp3' },
    { title: '知我', src: 'http://fsios.kugou.com/202602272235/44df1f36bd03ee00f4bfefb96c258de3/v3/98c39cfcba6ddbdef8474ffd8326f40f/yp/full/pi3_ct310000_s1766907773.mp3' },
    { title: '我在人间逍遥游', src: 'http://fsios.kugou.com/202602281056/b28a3e92fd5e4bf556c99913b8c9e17a/v3/a7f251a04baf32bfbd246ebd545a1f0c/yp/full/pi3_ct310000_s444028657.mp3' },
    { title: '雪山开出了格桑花', src: 'http://fsios.kugou.com/202602281057/1948e1925c8fe4fcb363d03e66064577/v3/569bf5f949ff403d08b9f934c3b51025/yp/full/pi3_ct310000_s4280359964.mp3' },
    { title: '月亮照山川', src: 'http://fsios.kugou.com/202602281107/cd46e7a03b953ede36bb8288c2877ea0/v3/9bbb2b020be26dd4c0e65d3d502bf115/yp/full/pi3_ct310000_s2840147546.mp3' },
    { title: '桃花笑', src: 'https://aqqmusic.tc.qq.com/M500000nsRbX40jRMw.mp3?guid=123759963&vkey=7D3A7979200FD843EACA9533590CCF73D43B253B39179219C68D7AA67E7EB0E330DF6BFDF28FBDEC3EBFEEB9179DD860BB3CA27162A15B0F__v2b9abf46&uin=&fromtag=120042&src=M500001OwoYa1ebPSv.mp3' },
    { title: '像我这样的人', src: 'https://aqqmusic.tc.qq.com/M500002wRxXe0eLiiT.mp3?guid=242233267&vkey=7D8DCFEA067AA2A86B9FA1020519E9FB83A7DA7CB7E70FDFF8B0BA1FBBE5BCFA3DA93CA32A15B024C3FE5593A84ED796817057E0EFB8F5D1__v2b9abf42&uin=&fromtag=120042&src=M500003mU3v20Bny9T.mp3' },
    { title: '今晚不想睡', src: './music/music14wdm.mp3' },
    { title: '良人归', src: 'https://aqqmusic.tc.qq.com/M500003JGHsA3Pae0S.mp3?guid=1819623842&vkey=C1969810CE19C9B284FA80A2BA83FE8723FF2CC0279E15EAD468E551E3EE323900020F629C924F5846B8E46A5FA831FC3713F77E296DAECB__v2b9abf46&uin=&fromtag=120042&src=M5000014rSRG0gfzNa.mp3' },
    { title: '卡尔永远的神', src: 'https://aqqmusic.tc.qq.com/M500004Ywgu71P659A.mp3?guid=367313220&vkey=35F5E39C3B49B9719D95618D03BE6BBDD8884881666E780E9D7909B3E88BA99F2BFEE642992C945CA4771DEA0E3F8146461A3657F670C7D2__v2b9abf46&uin=&fromtag=120042&src=M500002Vhay20Dd3Vm.mp3' },
    { title: '半点心', src: 'https://aqqmusic.tc.qq.com/M500001iwxIP4O1cDs.mp3?guid=650799268&vkey=76CF389BA9731E53F64FB37F85EAB3428F719D7FA75EF0879CB15425D8B03331774992DDBCDE5036DFD411811DBDB0B8D405F6CE42F6464F__v2b9abf46&uin=&fromtag=120042&src=M500000re83G3zeP1I.mp3' },
    { title: '我要找到你', src: 'https://aqqmusic.tc.qq.com/M5000010Ue8u3GNc5o.mp3?guid=707770843&vkey=F8303E114CE06D69606965D3CFA2602768D562CCA271DB4B813DA3978F46CE623010F262CA1C54B79C7CBFC13BEFD4C4F4B0AB4E636955E3__v2b9abf46&uin=&fromtag=120042&src=M5000002GUpi1euEQk.mp3' },
    { title: '下完这场雨', src: 'https://aqqmusic.tc.qq.com/M500003VR3AC0poNRi.mp3?guid=1716602700&vkey=6FCEE1034A606928E0F33A1747E49C53C54793A4CE946F30B1040EE500BD247DC0F7AA8D3C7EE811BD26FD84480405A30DDF5B6FAF5D9C16__v2b9ab03c&uin=&fromtag=120042&src=M500001uVPmZ4WEpjF.mp3' },
    { title: '怎么说我不爱你', src: 'https://aqqmusic.tc.qq.com/M500004VSVzG0We1cD.mp3?guid=1761020647&vkey=9E93E9B0BB3D7314FB24DE7D5F4977FEB0534A1D61C4FED8EEF9CCBE8B895C84CA9369E4C7AF8697765BDA4A20D9277B5773043592A6CEE3__v2b9abf42&uin=&fromtag=120042&src=M500000sjT0f1UnEGz.mp3' },
    { title: '你说没烦恼', src: 'https://aqqmusic.tc.qq.com/M50000195PNt0fzG3e.mp3?guid=2141980762&vkey=FB0FA7F5695834607085362FF4C33785866A699AB8AA9B64DE9FC1BA88C391CE341C48595C021B23B11E5E80291A0988CF64A8045368F6AC__v2b9aaeb9&uin=&fromtag=120042&src=M500000MJ4ds3qzZWX.mp3' },
    { title: '人生走一遭', src: 'https://aqqmusic.tc.qq.com/M500002BbMcd0731mr.mp3?guid=389724115&vkey=0D9059A01B8DFAA7F76A18713B23F27C6423E521A3D5E86813141CA0DEF19D1F627E18B4E1DA01B262CA5405D9EED295EC6675A4D0443C04__v2b9ab03c&uin=&fromtag=120042&src=M500004KRxbc2GR0Ag.mp3' },
    { title: '别怕我伤心 广西神曲DJ', src: 'https://aqqmusic.tc.qq.com/M500004CNNsf09cfVC.mp3?guid=1568271838&vkey=E099FFC04D9BCAD8CEACE12F759B9942CFC80ED83B20733C8D1E3CAD3B721472F8740601149967B869F7D557C94504FDF084B96ACE39730B__v2b9aaeb9&uin=&fromtag=120042&src=M500003xEmCl2qH2gM.mp3' },
    { title: '自律才是修行', src: './music/music15zilv.mp3' },
    { title: '马上发大财', src: './music/music16msfc.mp3' },
    { title: '夜萤火虫', src: './music/music17yhc.mp3' },
    { title: '风之谷', src: './music/music18fzg.mp3' },
    { title: '一点点', src: './music/music19ydd.mp3' },
    { title: '多幸运', src: './music/music20dxy.mp3' }
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
