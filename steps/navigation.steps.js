import { expect } from '@playwright/test';

export async function openPage(page, path = '/') {
    await page.goto(path);
}

export async function clickHeaderLink(page, linkName) {
    const link = page.getByRole('link', { name: linkName });
    await expect(link).toBeVisible({ timeout: 5000 });
    await link.click();
}
