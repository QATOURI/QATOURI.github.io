// DOM 요소
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const scrollProgress = document.querySelector('.scroll-progress');
const scrollTopBtn = document.querySelector('.scroll-top');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-links');
const fadeElements = document.querySelectorAll('.fade-in');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 현재 연도 업데이트
    updateCurrentYear();
    
    // 초기 애니메이션 요소 표시
    setTimeout(() => {
        window.scrollTo(0, 0);
        checkFadeElements();
    }, 100);
    
    // 모바일 메뉴 토글
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // 프로젝트 필터링 설정
    setupProjectFilters();
    
    // 연락처 양식 설정
    setupContactForm();
});

// 스크롤 이벤트
window.addEventListener('scroll', function() {
    // 스크롤 진행 표시
    updateScrollProgress();
    
    // 헤더 스타일 변경
    updateHeaderStyle();
    
    // 스크롤 탑 버튼 표시/숨김
    toggleScrollTopButton();
    
    // 현재 섹션 확인 및 네비게이션 활성화
    updateActiveNavLink();
    
    // 요소 애니메이션
    checkFadeElements();
});

// 현재 연도 업데이트
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    
    yearElements.forEach(element => {
        element.textContent = currentYear.toString();
    });
}

// 스크롤 진행 표시 업데이트
function updateScrollProgress() {
    if (!scrollProgress) return;
    
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

// 헤더 스타일 업데이트
function updateHeaderStyle() {
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
}

// 스크롤 탑 버튼 토글
function toggleScrollTopButton() {
    if (!scrollTopBtn) return;
    
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

// 스크롤 탑 버튼 클릭 이벤트
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 현재 섹션 확인 및 네비게이션 활성화
function updateActiveNavLink() {
    if (!navLinks.length || !sections.length) return;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === currentSection) {
            link.classList.add('active');
        }
    });
}

// 모바일 메뉴 토글
function toggleMobileMenu() {
    if (!navMenu) return;
    
    navMenu.classList.toggle('active');
    
    // 메뉴 아이콘 변경 (햄버거 <-> X)
    const isOpen = navMenu.classList.contains('active');
    mobileMenuBtn.innerHTML = isOpen ? '✕' : '☰';
}

// 네비게이션 링크 클릭 시 모바일 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768 && navMenu) {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '☰';
        }
    });
});

// 요소 애니메이션 체크
function checkFadeElements() {
    if (!fadeElements.length) return;
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// 프로젝트 필터링 설정
function setupProjectFilters() {
    if (!filterButtons.length || !projectCards.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 활성화된 버튼 스타일 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // 필터 값 가져오기
            const filterValue = button.getAttribute('data-filter');
            
            // 프로젝트 필터링
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.getAttribute('data-category');
                    card.style.display = category === filterValue ? 'block' : 'none';
                }
            });
        });
    });
}

// 연락처 양식 설정
function setupContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 양식 데이터 가져오기
        const formData = new FormData(contactForm);
        const formValues = {};
        
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        
        // 실제로는 서버로 데이터를 보내야 하지만, 예제로 콘솔에 출력
        console.log('양식 제출 데이터:', formValues);
        
        // 양식 제출 후 성공 메시지 표시 (실제로는 서버 응답에 따라 처리)
        alert('메시지가 성공적으로 전송되었습니다!');
        
        // 양식 초기화
        contactForm.reset();
    });
}
