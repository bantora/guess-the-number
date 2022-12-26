'use strict';

let score = 20, selectedNumber, randomNumber = Math.floor(Math.random() * 20);

const handleAgain = () => {
	document.querySelector('.message').textContent = 'Start guessing...';
	randomNumber = Math.floor(Math.random() * 20)
	document.querySelector('.guess').value = null;
	score = 20;
	document.querySelector('.score').textContent = 20;
	document.querySelector('.number').textContent = '?'
}

const setMessage = (props, win) => {
	document.querySelector('.message').textContent = props
	!win ? score -= 1 : document.querySelector('.highscore').textContent = score

	document.querySelector('.score').textContent = score
	if (score <= 0) {
		document.querySelector('.message').textContent = 'You LOST!!!!!!'
		consolg.log(hit)
	}
}

const handleCheck = (props) => {
	if (!props) {
		setMessage('⚠️ No Number!!! ')
	} else if (randomNumber == props) {
		setMessage('🥳 Correct Guess!!', true)
		document.querySelector('.number').textContent = randomNumber
	} else if (randomNumber > props) {
		setMessage('📈 Higher')
	} else if (randomNumber < props) {
		setMessage('📉 Lower')
	} else {
		setMessage('🚫 Invalid Number')
	}
}

document.querySelector('.check').addEventListener(
	'click', () => {
		handleCheck(document.querySelector('.guess').value)
	}
)

document.querySelector('.again').addEventListener(
	'click', handleAgain
)

document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem'