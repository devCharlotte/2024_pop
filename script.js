// 페이지가 로드되면 팝업 창을 띄우는 함수
window.onload = function() {
    showPopup();
};

function showPopup() {
    // 팝업 창 요소 생성
    let popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = '#fff';
    popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    popup.style.zIndex = '1000';
    popup.style.textAlign = 'center';

    // 팝업 창 내용 설정
    let message = document.createElement('p');
    message.textContent = '반가워!';
    popup.appendChild(message);

    // 첫 번째 버튼 생성 및 추가
    let button1 = document.createElement('button');
    button1.textContent = 'Hi~';
    button1.onclick = function() {
        alert('Hi~ ');
    };
    popup.appendChild(button1);

    // 두 번째 버튼 생성 및 추가
    let button2 = document.createElement('button');
    button2.textContent = 'Hello~';
    button2.onclick = function() {
        alert('Hello~ ');
    };
    popup.appendChild(button2);

    // 버튼 간격을 위한 간단한 스타일링
    button1.style.marginRight = '10px';

    // 팝업 창을 바디에 추가
    document.body.appendChild(popup);
}
