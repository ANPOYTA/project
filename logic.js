export function calculateBeds(total, occupied) {
    if (total < 0 || occupied < 0) return 0;
    const res = total - occupied;
    return res > 0 ? res : 0;
}

export function isValidName(name) {
    const nameRegex = /^[а-яА-Яa-zA-ZіІїЇєЄґҐ\s]+$/;
    return (
        typeof name === 'string' &&
        name.trim().length >= 2 &&
        nameRegex.test(name)
    );
}
