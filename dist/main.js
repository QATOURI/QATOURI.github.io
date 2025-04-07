"use strict";
// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', function () {
    console.log('웹사이트가 로드되었습니다!');
    // 현재 연도 업데이트
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2023', currentYear.toString());
    }
    // 프로젝트 카드에 클릭 이벤트 추가
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
        card.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
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
// 페이지 로드 시 프로젝트 렌더링
document.addEventListener('DOMContentLoaded', renderProjects);
//# sourceMappingURL=main.js.map