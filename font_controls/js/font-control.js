/* 공통 영역 */
// Text Area
var text_area = document.querySelector('.text');
// RESET button
var reset_btn = document.querySelector('.reset-btn');
reset_btn.onclick = function() {
	fontSize(16);
	letterSpacing(0);
	lineHeight(1.5);
}

/* 공통 영역 */

/* ----- FONT SIZE AREA ----- */
// font-size 참조 얻기
var font_inc_btn = document.querySelector('.increase-font-size-btn');
var font_dec_btn = document.querySelector('.decrease-font-size-btn');
var font_input_num = document.querySelector('#font-size-input');

var font_size_min = 10;
var font_size_max = 30;
var font_size = 16;

var default_font_size = document.querySelector('#font-size-input');
/* font-size Default */
default_font_size.setAttribute('value', font_size);


// Font Size 증가 
font_inc_btn.onclick = function() {
	isDisabled(font_dec_btn);
	font_size++;
	if ( font_size > font_size_max ) {
		this.setAttribute('disabled', true);
	} else {
		fontSize(font_size);
	}

}
// Font Size 감소
font_dec_btn.onclick = function() {
	isDisabled(font_inc_btn);
	font_size--;
	if ( font_size < font_size_min ) {
		this.setAttribute('disabled', true);
	} else {
		fontSize(font_size);
	}
}
/* ----- FONT SIZE AREA ----- */


/* ----- LETTER SPACING AREA ----- */
// letter space 참조 얻기
var letter_spacing_inc_btn = document.querySelector('.increase-letter-spacing-btn');
var letter_spacing_dec_btn = document.querySelector('.decrease-letter-spacing-btn');
var letter_spacing_input = document.querySelector('#letter-spacing-input');
// 변수 설정
var letter_spacing_min = -5;
var letter_spacing_max = 20;
var letter_spacing_value = 0;
// letter spacing default 
var default_letter_spacing = document.querySelector('#letter-spacing-input');
default_letter_spacing.setAttribute('value', letter_spacing_value);

// Letter Spacing 증가 
letter_spacing_inc_btn.onclick = function() {
	isDisabled(letter_spacing_dec_btn);
	letter_spacing_value++;
	if ( letter_spacing_value > letter_spacing_max ) {
		this.setAttribute('disabled', true);
	} else {
		letterSpacing(letter_spacing_value);
	}

}
// Letter Spacing 감소
letter_spacing_dec_btn.onclick = function() {
	isDisabled(letter_spacing_inc_btn);
	letter_spacing_value--;
	if ( letter_spacing_value < letter_spacing_min ) {
		this.setAttribute('disabled', true);
	} else {
		letterSpacing(letter_spacing_value);
	}
}
/* ----- LETTER SPACING AREA ----- */

/* ----- LINE HEIGHT AREA ----- */
// letter space 참조 얻기
var line_height_inc_btn = document.querySelector('.increase-line-height-btn');
var line_height_dec_btn = document.querySelector('.decrease-line-height-btn');
var line_height_input = document.querySelector('#line-height-input');
// 변수 설정
var line_height_min = 0;
var line_height_max = 5;
var line_height_value = 1.5;
// letter spacing default 
var default_line_height = document.querySelector('#line-height-input');
default_line_height.setAttribute('value', line_height_value);

// Letter Spacing 증가 
line_height_inc_btn.onclick = function() {
	isDisabled(line_height_dec_btn);
	line_height_value += 0.1;
	if ( line_height_value > line_height_max ) {
		this.setAttribute('disabled', true);
	} else {
		lineHeight(line_height_value);
	}

}
// Letter Spacing 감소
line_height_dec_btn.onclick = function() {
	isDisabled(line_height_inc_btn);
	line_height_value -= 0.1;
	if ( line_height_value < line_height_min ) {
		this.setAttribute('disabled', true);
	} else {
		lineHeight(line_height_value);
	}
}
/* ----- LINE HEIGHT AREA ----- */


/* Functions */ 
function fontSize(size) {
	font_input_num.setAttribute('value', size);		
	text_area.style.fontSize = size+'px';
}
function letterSpacing(number) {
	letter_spacing_input.setAttribute('value', number);		
	text_area.style.letterSpacing = number+'px';
}
function lineHeight(number) {
	line_height_input.setAttribute('value', number);		
	text_area.style.lineHeight = number;
}
function isDisabled(element_node) {
	var is_disabled = element_node.getAttribute('disabled');
	if ( is_disabled ) { 
		element_node.removeAttribute('disabled'); 
	}	
}
/* Functions */