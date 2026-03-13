import { expect, test, describe, vi } from 'vitest';
import { calculateBeds, isValidName } from './logic.js';

test('перевірка виклику логера (Mock)', () => {
    const logger = vi.fn();
    logger('test message');

    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('test message');
});

describe('Тестування логіки DormManager', () => {
    test('Має правильно розраховувати вільні місця', () => {
        expect(calculateBeds(50, 20)).toBe(30);
    });

    test('Має повертати 0, якщо кількість зайнятих місць більша за загальну', () => {
        expect(calculateBeds(10, 15)).toBe(0);
    });

    test('Має повертати 0 при від’ємних вхідних даних', () => {
        expect(calculateBeds(-5, 5)).toBe(0);
    });

    test('Має повертати true для нормального імені', () => {
        expect(isValidName('Олексій')).toBe(true);
    });

    test('Має повертати false для дуже короткого імені або пробілів', () => {
        expect(isValidName('О')).toBe(false);
        expect(isValidName('   ')).toBe(false);
    });
});
