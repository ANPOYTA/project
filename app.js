import { calculateBeds, isValidName } from './logic.js';

const breakPipeline = "Я ламаю лінтер";

document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('env-status');
    if (statusElement) {
        statusElement.innerText = import.meta.env.VITE_APP_STATUS;
    }
    const addStudentBtn = document.getElementById('addStudentBtn');
    const messageArea = document.getElementById('message-area');
    const bedsHolder = document.getElementById('available-beds');

    addStudentBtn.addEventListener('click', () => {
        const studentName = prompt('Enter student name:');

        if (isValidName(studentName)) {
            const currentBeds = parseInt(bedsHolder.innerText);
            const newCount = calculateBeds(currentBeds, 1);

            bedsHolder.innerText = newCount;

            messageArea.innerText = `Student ${studentName} successfully added!`;
            messageArea.style.color = 'green';
        } else {
            messageArea.innerText = 'Error: Invalid name!';
            messageArea.style.color = 'red';
        }
    });
});
