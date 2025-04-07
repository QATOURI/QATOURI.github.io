"use strict";
// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', function () {
    console.log('웹사이트가 로드되었습니다!');
    // 현재 연도 업데이트
    updateCurrentYear();
    // 프로젝트 필터링 기능 추가
    setupProjectFilters();
    // 연락처 양식 처리
    setupContactForm();
});
// 프로젝트 데이터 예제
const projects = [
    {
        id: 1,
        title: '프로젝트 1',
        description: '프로젝트 설명이 여기에 들어갑니다.'
    },
    {
        id: 2,
        title: '프로젝트 2',
        description: '프로젝트 설명이 여기에 들어갑니다.'
    }
];
// 프로젝트 데이터를 동적으로 표시하는 함수
function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid)
        return;
    // 기존 내용 지우기
    projectGrid.innerHTML = '';
    // 프로젝트 추가
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}">` : ''}
            ${project.link ? `<a href="${project.link}" target="_blank">자세히 보기</a>` : ''}
        `;
        projectGrid.appendChild(projectCard);
    });
}
// 현재 연도 업데이트 함수
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#current-year');
    yearElements.forEach((element) => {
        element.textContent = currentYear.toString();
    });
}
// 프로젝트 필터링 기능 설정
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    if (filterButtons.length === 0 || projectCards.length === 0)
        return;
    filterButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // 활성화된 버튼 스타일 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // 필터 값 가져오기
            const filterValue = button.getAttribute('data-filter') || 'all';
            // 프로젝트 필터링
            projectCards.forEach((card) => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                }
                else {
                    const category = card.getAttribute('data-category') || '';
                    card.style.display = category === filterValue ? 'block' : 'none';
                }
            });
        });
    });
}
// 연락처 양식 처리
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm)
        return;
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // 양식 데이터 가져오기
        const formData = new FormData(contactForm);
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value.toString();
        });
        // 실제로는 서버로 데이터를 보내야 하지만, 예제로 콘솔에 출력
        console.log('양식 제출 데이터:', formValues);
        // 양식 제출 후 성공 메시지 표시 (실제로는 서버 응답에 따라 처리)
        alert('메시지가 성공적으로 전송되었습니다!');
        // 양식 초기화
        contactForm.reset();
    });
}
//# sourceMappingURL=main.js.map