// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 현재 연도 업데이트
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2023', currentYear);
    }
    
    // 프로젝트 카드에 클릭 이벤트 추가
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
