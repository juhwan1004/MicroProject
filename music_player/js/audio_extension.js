// Audio 객체의 stop 확장 
(function(global){
	'use strict';
	var fn,
			Audio,
			percent;

	Audio = global.HTMLAudioElement;
	fn = Audio.prototype;

	if (!Audio.prototype.stop) {
		Audio.prototype.stop = function() {
			this.pause();
			this.currentTime = 0;
		};
	}
	// version 3: 객체 형태 선언부
	if ( !fn.getProgress ) {
		fn.getProgress = function(prec) {
			var percent = this.currentTime / this.duration * 100;
			// toFixed 메서드를 통해 소수점 몇 이하 출력할 지 결정.
			return percent.toFixed(prec || 0);
		}
	}

	if ( !Audio.getReadableTime ) {
		Audio.getReadableTime = function (seconds){
				var min, sec;
				min = Math.floor( seconds / 60 );
				sec = Math.floor( seconds % 60 );
				min = min >= 10 ? min : '0'+min;
				sec = sec >= 10 ? sec : '0'+sec;
				return min+":"+sec;
			};
	}

}(window));