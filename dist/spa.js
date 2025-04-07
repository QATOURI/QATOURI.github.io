"use strict";
// SPA 클래스 정의
class SPA {
    constructor() {
        this.sections = [];
        this.navLinks = [];
        this.currentSection = 'home';
        this.init();
    }
    // 초기화 함수
    init() {
        // 페이지 섹션 요소 가져오기
        const sectionElements = document.querySelectorAll('.page-section');
        sectionElements.forEach(element => {
            this.sections.push({
                id: element.id,
                element: element
            });
        });
        // 네비게이션 링크 요소 가져오기
        this.navLinks = Array.from(document.querySelectorAll('.spa-nav a, .spa-link'));
        // 네비게이션 링크에 이벤트 리스너 추가
        this.navLinks.forEach(link => {
            link.addEventListener('click', this.handleNavClick.bind(this));
        });
        // URL 해시 변경 이벤트 리스너 추가
        window.addEventListener('hashchange', this.handleHashChange.bind(this));
        // 초기 페이지 설정
        this.setInitialPage();
    }
    // 네비게이션 링크 클릭 처리
    handleNavClick(event) {
        event.preventDefault();
        const link = event.currentTarget;
        const sectionId = link.getAttribute('data-section');
        if (sectionId) {
            this.navigateToSection(sectionId);
        }
    }
    // 해시 변경 처리
    handleHashChange() {
        this.setInitialPage();
    }
    // 초기 페이지 설정
    setInitialPage() {
        let hash = window.location.hash.substring(1);
        // 해시가 없거나 유효하지 않은 경우 기본값 설정
        if (!hash || !this.sections.some(section => section.id === hash)) {
            hash = 'home';
        }
        this.navigateToSection(hash);
    }
    // 특정 섹션으로 이동
    navigateToSection(sectionId) {
        // 현재 섹션 업데이트
        this.currentSection = sectionId;
        // 모든 네비게이션 링크에서 active 클래스 제거
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // 해당 섹션의 네비게이션 링크에 active 클래스 추가
        const activeNavLinks = this.navLinks.filter(link => link.getAttribute('data-section') === sectionId);
        activeNavLinks.forEach(link => {
            link.classList.add('active');
        });
        // 모든 섹션 숨기기
        this.sections.forEach(section => {
            section.element.classList.remove('active');
        });
        // 선택한 섹션만 표시
        const activeSection = this.sections.find(section => section.id === sectionId);
        if (activeSection) {
            activeSection.element.classList.add('active');
        }
        // URL 해시 업데이트
        window.location.hash = sectionId;
        // 페이지 상단으로 스크롤
        window.scrollTo(0, 0);
    }
}
// 페이지 로드 시 SPA 초기화
document.addEventListener('DOMContentLoaded', () => {
    // SPA 초기화
    new SPA();
});
//# sourceMappingURL=spa.js.map