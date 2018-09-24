let inputBox = document.getElementById('inputBox');
inputBox.addEventListener('keyup', (e) => {
	let tweetDiv = document.getElementsByClassName('tweets')[0];
	let value = e.target.value;
	fetch(`http://localhost:3000/twitter/${value}`).then((res) => res.json()).then((response) => {
		tweetDiv.innerHTML = '';
		response.statuses.map((status) => {
			console.log(status);
			let node = document.createElement('li');
			node.className = 'tweet';
			node.style.border = `15px solid #${status.user.profile_background_color}`;
			node.style.color = `#${status.user.profile_text_color}`;


			let textnode = document.createTextNode(status.text);



			let image = document.createElement('img');
			image.src = status.user.profile_image_url;
			image.className = 'image';


			let h3 = document.createElement('h3');
			let username = document.createTextNode(`@${status.user.screen_name}`);
			h3.appendChild(username);


			node.appendChild(image);
			node.appendChild(h3);
			node.appendChild(textnode);



			tweetDiv.appendChild(node);
		});
	});
});
