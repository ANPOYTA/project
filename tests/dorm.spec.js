import { test, expect } from '@playwright/test';

test('Verifying student addition', async ({ page }) => {
    // Заходимо на сайт
    await page.goto('http://localhost:5173');

    // Готуємося до того, що з'явиться вікно введення імені
    // Цей код спрацює АВТОМАТИЧНО, як тільки вискочить prompt
    page.on('dialog', async (dialog) => {
        console.log('Dialog has appeared:', dialog.message());
        await dialog.accept('Oleksiy test'); // Вводимо ім'я
    });

    // Чекаємо, поки кнопка з'явиться на екрані (про всяк випадок)
    const button = page.locator('#addStudentBtn');
    await expect(button).toBeVisible();

    // Натискаємо на кнопку
    await button.click();

    // Даємо Playwright 2 секунди, щоб ми встигли побачити результат оком
    await page.waitForTimeout(2000);

    // Перевіряємо, чи з'явився текст у message-area
    const message = page.locator('#message-area');
    await expect(message).toContainText(
        'Student Oleksiy test successfully added!'
    );
});
