// Container
const container = document.getElementById('container');
// Es el elemento <a>
const recuperaButton = document.getElementById('recupera');
// Botones que sirven para cambiar entre login, register y recupera contrasenya
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signInRecuperaButton = document.getElementById('signInRecupera');
// Formularios
const formRegister = document.getElementById('formRegister');
const formRecupera = document.getElementById("formRecupera");
const formLogin = document.getElementById("formLogin");
// Overlay (Texto que sale encima del color azul)
const overlaySignIn = document.getElementById('overlay-signin');
const overlayRecupera = document.getElementById('overlay-recupera');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");

	// Ahora comprobamos el overlay de signIn si esta display:none
	const styles2 = window.getComputedStyle(overlaySignIn);
	if (styles2.getPropertyValue("display") == "none")
		overlaySignIn.style.display = "";

	// Ahora ocultamos el overlayRecupera
	overlayRecupera.style.display = "none";

	// Comprobamos si el formulario de registro esta ocultado, si lo esta lo desocultamos
	if (window.getComputedStyle(formRegister).getPropertyValue("display") == "none")
		formRegister.style.display = "";

	// Ahora ocultamos el formulario recupera contrasenya
	formRecupera.style.display = "none";
});

signInButton.addEventListener('click', () => {
	if (container.classList.contains("right-panel-active"))
		container.classList.remove("right-panel-active");
	else
		container.classList.add("right-panel-active");

	// Comprobamos si el formulario de login esta ocultado, si lo esta lo desocultamos
	if (window.getComputedStyle(formLogin).getPropertyValue("display") == "none")
		formLogin.style.display = "";
});

signInRecuperaButton.addEventListener('click', () => {
	if (container.classList.contains("right-panel-active"))
		container.classList.remove("right-panel-active");
	else
		container.classList.add("right-panel-active");
});

recuperaButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");

	// Ocultamos el overylay de sign in
	overlaySignIn.style.display = "none";

	// Comprobamos si el overylay recupera esta ocultado, si lo esta lo desocultamos
	if (window.getComputedStyle(overlaySignIn).getPropertyValue("display") == "none")
		overlayRecupera.style.display = "";

	// Comprobamos si el formulario de recupera contrasenya esta ocultado, si lo esta lo desocultamos
	if (window.getComputedStyle(formRecupera).getPropertyValue("display") == "none")
		formRecupera.style.display = "";
});