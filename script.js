// อัปเดตปีในส่วน footer อัตโนมัติ
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll เมื่อกดลิงก์เมนู
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade-in animation เมื่อ scroll ถึง section
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(section);
});

// แสดง console log เพื่อยืนยันว่า script โหลดแล้ว
console.log('Portfolio ของคุณโหลดสำเร็จแล้ว! 🎉');
