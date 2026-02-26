document.addEventListener('DOMContentLoaded', () => {
    const addStudentBtn = document.getElementById('addStudentBtn');

    addStudentBtn.addEventListener('click', () => {
        alert('Відкривається форма для поселення нового студента...');
        console.log('Клік по кнопці: Поселити студента');
    });
});