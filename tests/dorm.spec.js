import { test, expect } from '@playwright/test';

test('Verifying student addition', async ({ page }) => {
    await page.goto('http://localhost:5173');

    page.on('dialog', async (dialog) => {
        console.log('Dialog has appeared:', dialog.message());
        await dialog.accept('Oleksiy test'); 
    });

    const button = page.locator('#addStudentBtn');
    await expect(button).toBeVisible();

    await button.click();

    await page.waitForTimeout(2000);

    const message = page.locator('#message-area');
    await expect(message).toContainText(
        'Student Oleksiy test successfully added!'
    );
});
