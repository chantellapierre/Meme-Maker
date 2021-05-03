let memeContainer = document.querySelector('#meme-container');
let memeImgInput = document.getElementById('img');
let topTextInput = document.getElementById('text-top');
let bottomTextInput = document.getElementById('text-bottom');
let generateBtn = document.getElementById('generateBtn');

function generateMeme() {
	let memeDiv = document.createElement('div');
	let img = document.createElement('img');
	let topTextOut = document.createElement('div');
	let bottomTextOut = document.createElement('div');
	let deleteBtn = document.createElement('button');
	deleteBtn.innerText = 'X';

	if (document.querySelector('#img-input').value) {
		img.src = document.querySelector('#img-input').value;
		document.getElementById('img-input').value = '';
	}

	if (document.querySelector('#text-top').value || document.querySelector('#text-bottom').value) {
		topTextOut.textContent = document.querySelector('#text-top').value;
		bottomTextOut.textContent = document.querySelector('#text-bottom').value;
		document.getElementById('img-input').value = '';
		document.getElementById('text-top').value = '';
		document.getElementById('text-bottom').value = '';

		//when user doesn't enter info
	} else {
		img.src =
			'https://static01.nyt.com/images/2019/05/19/world/17grumpycat-1/17grumpycat-1-videoSixteenByNine3000.jpg';
		topTextOut.textContent = 'You call this';
		bottomTextOut.textContent = 'a meme?';
	}
	// classes for element
	img.classList.add('meme-img');
	topTextOut.classList.add('toptextout');
	bottomTextOut.classList.add('bottomtextout');
	memeDiv.classList.add('meme-div');
	deleteBtn.classList.add('delete-btn');

	memeDiv.append(img);
	memeDiv.append(topTextOut);
	memeDiv.append(bottomTextOut);
	memeDiv.append(deleteBtn);
	memeContainer.append(memeDiv);

	// delete dank memes
	deleteBtn.addEventListener('click', function() {
		memeContainer.removeChild(memeDiv);
	});
}

generateBtn.addEventListener('click', function(e) {
	e.preventDefault();
	generateMeme();
});
