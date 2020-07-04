const toggleLike = (event) => {
	console.log(event.target);
};
let like1 = document.querySelector('.reaction_like_button_1');
like1.addEventListener('click', (event) => {
	if (event.target.style.color === 'blue') {
		event.target.style.color = `#666666`;
	} else {
		event.target.style.color = 'blue';
	}
});

let like2 = document.querySelector('.reaction_like_button_2');
like2.addEventListener('click', (event) => {
	if (event.target.style.color === 'blue') {
		event.target.style.color = `#666666`;
	} else {
		event.target.style.color = 'blue';
	}
});

let comment1 = document.querySelector('.reaction_comment_1');
comment1.addEventListener('click', () => {
	document.querySelector('.comment_box_1').style.display = 'flex';
});

let comment2 = document.querySelector('.reaction_comment_2');
comment2.addEventListener('click', () => {
	document.querySelector('.comment_box_2').style.display = 'flex';
});

let navs = document.querySelectorAll('.icon_navigations');
navs.forEach((nav) => {
	nav.addEventListener('click', (event) => {
		let z = document.querySelector('.icon_section_active');
		z.classList.remove('icon_section_active');
		z.classList.add('icon_section');
		let w = event.target.closest('.icon_section');
		w.classList.remove('.icon_section');
		w.classList.add('icon_section_active');
	});
});

let work = document.querySelector('.work_element');
let closeB, workB;
work.addEventListener('click', () => {
	workB = document.querySelector('.work_bar');
	workB.style.display = 'block';
	closeB = document.querySelector('.fa-times');
	closeB.addEventListener('click', () => {
		workB.style.display = 'none';
	});
});

function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

let sidebarOpener = document.querySelector('.mobile_only_logo');
sidebarOpener.addEventListener('click', () => {
	let sidebar = document.querySelector('.mobile_sidebar');
	sidebar.style.display = 'block';
	let closeSidebar = document.querySelector('.profile_and_close_icon');
	closeSidebar.addEventListener('click', () => {
		sidebar.style.display = 'none';
	});
});

let messageSidebarOpener = document.querySelector('.mobile_only_section');
messageSidebarOpener.addEventListener('click', () => {
	let sidebar = document.querySelector('.comments_sidebar');
	sidebar.style.display = 'block';
	let closeSidebar = document.querySelector('.back_arrow');
	closeSidebar.addEventListener('click', () => {
		sidebar.style.display = 'none';
	});
});
