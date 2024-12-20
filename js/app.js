function toggleScrollUpButton() {
    let TOP_OFFSET = 200;
	let scrollY = window.scrollY;
    if (scrollY > TOP_OFFSET) {
        document.getElementById('scrollUpArrow').classList.add('visible');
    }
    else {
        document.getElementById('scrollUpArrow').classList.remove('visible');
    }
}

function initMobileMenu() {
    document.getElementById('menuButton').onclick = () => {
		document.getElementById('menuButton').classList.toggle('active');
		document.getElementById('menuContainer').classList.toggle('active');
	}
}

window.addEventListener('scroll', () => {
	toggleScrollUpButton();
	initMobileMenu();
});

let overlay = document.getElementById('overlay');

let popup = document.getElementById('popupWindow');

let button_popup = document.getElementById('subscribePopupButton');

let button_popup_technical = document.getElementById('technicalPopupButton');

button_popup.onclick = showMobileWindow

button_popup_technical.onclick = showMobileWindowTechnical

function showMobileWindow(){
    overlay.classList.toggle('visible');
    popup.classList.toggle('visible');
}

let close_button = document.getElementById('closeButton');

close_button.onclick = closeMobileWindow

overlay.button_popup.onclick = closeMobileWindow

function closeMobileWindow(){
    overlay.classList.toggle('visible')
    popup.classList.toggle('visible')
}
close_button_technical.onclick = closeMobileWindowTechnical

overlay_technical.button_popup.onclick = closeMobileWindowTechnical

function showMobileWindowTechnical(){
    overlay_technical.classList.toggle('visible');
    popup_technical.classList.toggle('visible');
}

function closeMobileWindowTechnical(){
    overlay_technical.classList.toggle('visible')
    popup_technical.classList.toggle('visible')
}

