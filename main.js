// 导航栏吸顶效果
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 移动端菜单
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // 关闭移动端菜单
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// 作品集筛选
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 移除所有按钮的active类
        filterBtns.forEach(b => b.classList.remove('active'));
        // 添加当前按钮的active类
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            } else {
                item.style.opacity = '0.2';
                item.style.transform = 'scale(0.95)';
            }
        });
    });
});

// 技能雷达图
window.addEventListener('load', function() {
    const ctx = document.getElementById('skillChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'UI/UX'],
            datasets: [{
                label: '技能水平',
                data: [90, 85, 80, 75, 70, 65],
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 123, 255, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    });
});

// 图片懒加载
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.src;
                imageObserver.unobserve(image);
            }
        });
    });
    
    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
}

// 表单提交处理
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // 简单的表单验证
        if (!name || !email || !message) {
            alert('请填写所有必填字段');
            return;
        }
        
        // 模拟表单提交
        alert('消息已发送！我们会尽快与您联系。');
        contactForm.reset();
        
        // 实际项目中可以根据需要跳转到邮箱或其他联系方式
        // window.location.href = `mailto:email@example.com?subject=来自${name}的消息&body=${message}`;
    });
}

// 滚动动画
const fadeElements = document.querySelectorAll('section');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// 微信图标点击显示微信号
const wechatIcon = document.getElementById('wechatIcon');
const wechatQR = document.getElementById('wechatQR');

if (wechatIcon && wechatQR) {
    wechatIcon.addEventListener('click', function(e) {
        e.preventDefault();
        if (wechatQR.style.display === 'block') {
            wechatQR.style.display = 'none';
        } else {
            wechatQR.style.display = 'block';
        }
    });

    // 点击其他地方关闭
    document.addEventListener('click', function(e) {
        if (!wechatIcon.contains(e.target) && !wechatQR.contains(e.target)) {
            wechatQR.style.display = 'none';
        }
    });
}