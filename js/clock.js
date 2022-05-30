setInterval(setclock,1000)
				
				const hourHand = document.querySelector("[data-hours]");
				const secondsHand = document.querySelector("[data-second]");
				const minutesHand = document.querySelector("[data-minute]");
				
				function setclock() {
					const currentTime = new Date();
					const secondsRatio = currentTime.getSeconds()/60;
					const minutesRatio = (secondsRatio + currentTime.getMinutes())/60;
					const hourRatio = (minutesRatio + currentTime.getHours())/12;
					
					rotation(secondsHand, secondsRatio)
					rotation(minutesHand, minutesRatio)
					rotation(hourHand, hourRatio)
				}
				
				function rotation(element, rotateit) {
					element.style.setProperty('--rotate', rotateit * 360)
				}
				
				setclock()
				