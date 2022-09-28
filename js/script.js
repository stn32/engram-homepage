// cookie
function cookieBox(){
    let cookiePopup = document.querySelector('.homepage__cookie');
    let cookieBtn = document.querySelector('.homepage__cookie_btn');
    
    function showCookie(){
        cookiePopup.classList.add('active');
    }
    function closeCookie(){
        cookiePopup.classList.remove('active');
    }
    setTimeout(showCookie, 4500);
    cookieBtn.addEventListener('click', closeCookie);

    // PopUp Cookie Session 
    function checkSessionKey() {
        if (sessionStorage.getItem('hide') === 'truee') {
            cookiePopup.classList.remove('active');
            cookiePopup.classList.add('none');
        } 
    }
    function addSessionKey() {
        sessionStorage.setItem('hide', 'truee');
        if (sessionStorage.getItem('hide') === 'truee') {
            cookiePopup.classList.remove('active');
            cookiePopup.classList.add('none');
        }
    }
    cookieBtn.addEventListener('click', addSessionKey);
    window.addEventListener('load', checkSessionKey);
}
cookieBox();


// exit popup
function quizPopupBox(){
    let testPopup = document.querySelector('.homepage_quiz');
    let testCloseBtn = document.querySelector('.homepage_quiz__close');
    let textMouseOver = document.querySelector('.home_new__left');
    
    function showQuizPopup(){
        testPopup.classList.add('active');
    }
    function closeQuizPopup(){
        testPopup.classList.remove('active');
    }
    setTimeout(showQuizPopup, 22500);
    textMouseOver.addEventListener('mouseover', showQuizPopup);
    testCloseBtn.addEventListener('click', closeQuizPopup);

    // PopUp Cookie Session 
    function checkSessionKey() {
        if (sessionStorage.getItem('hide-quiz') === 'true-quiz') {
            testPopup.classList.remove('active');
            testPopup.classList.add('none');
        } 
    }
    function addSessionKey() {
        sessionStorage.setItem('hide-quiz', 'true-quiz');
        if (sessionStorage.getItem('hide-quiz') === 'true-quiz') {
            testPopup.classList.remove('active');
            testPopup.classList.add('none');
        }
    }
    testCloseBtn.addEventListener('click', addSessionKey);
    window.addEventListener('load', checkSessionKey);
}
quizPopupBox();


// home page click
function homePageClick() {
    let clickBtn = document.querySelector('.home_new__click');
    let clickBtnSpan = document.querySelector('.home_new__click_span');

    function clickBtnActive(){
        clickBtn.classList.add('active');
    }
    function clickBtnNone(){
        clickBtn.classList.remove('active');
    }
    setTimeout(clickBtnActive, 2500);
    setTimeout(clickBtnNone, 9000);

    function clickBtnSpanActive(){
        clickBtnSpan.classList.add('active');
    }
    function clickBtnSpanNone(){
        clickBtnSpan.classList.remove('active');
    }
    setTimeout(clickBtnSpanActive, 3500);
    setTimeout(clickBtnSpanNone, 8500);
}
homePageClick();