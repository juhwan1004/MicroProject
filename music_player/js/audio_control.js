	// // 오디오 객체 생성/속성 설정
	// // var audio = new Audio();
	// var audio = document.createElement('audio');
	// var audio_src = 'media/source/001.  Ed Sheeran - Shape Of You.mp3';
	// audio.setAttribute('src', audio_src);

	// // 오디오 대체수단 생성/속성 설정, HTML5 Audio, MP3는 IE9+ 지원
	// var alt_audio_link = document.createElement('a');
	// alt_audio_link.setAttribute('href', audio_src);
	// alt_audio_link.innerHTML = 'Ed Sheeran - Shape Of You';

	// // 오디오에 대체수단 삽입
	// audio.appendChild(alt_audio_link);

	// // 오디오 객체 확인
	// console.log(audio);

	// // 오디오 객체 재생 가능한 시점(oncanplay)이 되면 재생( .play() )
	// audio.oncanplay = function() {
	// 	this.play();
	// };

	// // 1초가 지나면 재생 중인 오디오를 일시정지( .pause() )하라.
	// window.setTimeout(function() {
	// 	// audio.pause();
	// 	// audio.stop(); // 미지원 API
	// },1000);

	// // 오류 감지 시, 오류 처리하는 헬퍼 함수
	// function validate(condition, error_msg) {
	// 	if ( condition ) { throw new Error(error_msg);  }
	// } 

	// // 오디오 객체인지 체크하는 함수
	// function isAudioObject(data) {
	// 	return data && data.constructor === HTMLAudioElement;
	// }

	// // 재생 중인 오디오 객체를 정지(stop)하는 함수
	// function stop(audio_type) {
	// 	validate ( !isAudioObject(audio_type), '오디오 객체가 전달되지 않았습니다.'); 
	// 	console.log('현재시간:', audio_type.currentTime);
	// 	audio_type.pause();
	// 	audio_type.currentTime = 0;
	// }
	// // 멈춘 오디오 객체를 시작(play)하는 함수
	// function play(audio_type) {
	// 	validate ( !isAudioObject(audio_type), '오디오 객체가 전달되지 않았습니다.'); 
	// 	audio_type.play();
	// }

//----------------------------------------------------------------------------------
// Audio - IIFE 패턴
(function(global) {

	var audio, 
			audio_src, 
			alt_audio_link, 
			current, 
			total, 
			percent,
			progress,
			time_current,
	 		time_total;

	audio = document.createElement('audio');
	audio_src = 'media/source/payday.mp3';
	audio.setAttribute('src', audio_src);

	alt_audio_link = document.createElement('a');
	alt_audio_link.setAttribute('href', audio_src);
	alt_audio_link.innerHTML = 'payday';

	audio.appendChild(alt_audio_link);

	window.setTimeout(function() {
	},1000);
	function validate(condition, error_msg) {
		if ( condition ) { throw new Error(error_msg);  }
	} 
	function isAudioObject(data) {
		return data && data.constructor === HTMLAudioElement;
	}
	function play(audio_type) {
		validate ( !isAudioObject(audio_type), '오디오 객체가 전달되지 않았습니다.'); 
		audio_type.play();
	}
/*
	// version 1: 처음 만든 형태 ㅋ
	// 재생시간이 업데이트 될 때마다 현재시간, 진행률을 보여주는 이벤트 ver1
	// audio.ontimeupdate = function() { // time이 업데이트 됐을 때
	// 	console.log('this.currentTime:',this.currentTime);

	// 	current = this.currentTime;
	// 	total = this.duration;
	// 	percent = Math.floor(current/total*100);

	// 	console.log('percent:', percent + '%');
	// };
	
	// version 2: 함수형태
	// 재생시간이 업데이트 될 때마다 현재시간, 진행률을 보여주는 이벤트
	// function statePercent(audio_type) {
	// 	validate(!isAudioObject(audio_type), '오디오 객체를 전달해야 합니다.');
	// 	if ( !statePercent.total ) { // 전체시간이 null이면
	// 		// 재생횟수에 상관없이 딱 한 번만 전체 시간을 statePercent.total에 넣어준다.
	// 		statePercent.total = audio_type.duration; 
	// 	}
	// 	return Math.floor( audio_type.currentTime / statePercent.total * 100) + '%';
	// }
	// // 메모이제이션 패턴
	// // 함수객체.속성
	// statePercent.total = null;

	// audio.ontimeupdate = function() { // time이 업데이트 됐을 때
	// 	current = statePercent(this); // 20%;
	// 	// console.log('current:', current);
	// 	progress = document.querySelector('.seekbar-progress');
	// 	progress.style.width = current;
	// };

	// version 2-1: 클로저 활용 패턴
	// var statePercent = (function() {
	// 	// 클로저 영역의 지역 변수
	// 	total = 0;
	// 	// 클로저 함수 반환
	// 	return function(audio_type) {
	// 		validate(!isAudioObject(audio_type), '오디오 객체를 전달해야 합니다.');
	// 		if ( !total ) {
	// 			total = audio_type.duration;
	// 		}
	// 		return Math.floor( audio_type.currentTime / total * 100 ) + '%';
	// 	};
	// }());

	// audio.ontimeupdate = function() {
	// 	current = statePercent(this); // 클로저 함수 패턴
	// 	progress = document.querySelector('.seekbar-progress');
	// 	progress.style.width = current;
	// };
*/

// 오디오 재생시간 표기 처리 함수
// mm:ss
function readableDuration(seconds){
	var min, sec;
	min = Math.floor( seconds / 60 );
	sec = Math.floor( seconds % 60 );
	min = min >= 10 ? min : '0'+min;
	sec = sec >= 10 ? sec : '0'+sec;
	return min+":"+sec;
} 

// 참조 갖고오기
progress     = document.querySelector('.seekbar-progress');
time_current = document.querySelector('.audio-time-current');
time_total   = document.querySelector('.audio-time-total');

// 재생 준비가 되었을 때 현재시간 출력해주는 이벤트 
audio.oncanplay = function() { // 전체 시간 한 번 할당
	time_total.innerHTML = readableDuration(this.duration);
};
audio.ontimeupdate = function() {
	console.log(this.getProgress(3));
	progress.style.width = this.getProgress()+'%';
	time_current.innerHTML = readableDuration(this.currentTime);
};

	// 외부에 공개
	global.audio = audio;
}(this));

// 오디오 컨트롤 제어
(function(global){
	'use strict';

	var btn_play, btn_stop, btn_pause;
	btn_play = document.querySelector('.play');
	btn_pause = document.querySelector('.pause');
	btn_stop = document.querySelector('.stop');	
	
	// 메서드 빌려쓰기 패턴 활용, 버튼이 클릭되는 순간 bind가 실행
	btn_play.onclick = audio.play.bind(audio);
	btn_pause.onclick = audio.pause.bind(audio);
	btn_stop.onclick = audio.stop.bind(audio);
}(window));
