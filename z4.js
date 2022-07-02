let user1 = localStorage.getItem(`дані`);
if (user1.loged == true){
    document.getElementById(`nav_left`).innerHTML = `<li class="nav-item">
				<a class="nav-link" href="main.html">Головна</a>
			</li>`
}