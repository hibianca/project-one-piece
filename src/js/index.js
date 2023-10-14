const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		dismissButton();
		dismissCharacter();

		button.classList.add("selected");
		characters[index].classList.add("selected");
	});
});

function dismissCharacter() {
	const selectedCharacter = document.querySelector(".character.selected");
	selectedCharacter.classList.remove("selected");
}

function dismissButton() {
	const selectedButton = document.querySelector(".button.selected");
	selectedButton.classList.remove("selected");
}
