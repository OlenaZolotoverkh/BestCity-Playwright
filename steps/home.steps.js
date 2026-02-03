import { expect } from '@playwright/test';

export async function verifyHeroSection(page) {
    const heroHeading = page.getByRole('heading', {
        name: /invest and trade in real estate/i,
    });
    await expect(heroHeading).toBeVisible({ timeout: 5000 });
}


export async function verifyFeaturedProperties(page) {
    // Section title
    await expect(
        page.getByRole('heading', {
            name: 'Featured Investment Opportunities',
        })
    ).toBeVisible({ timeout: 5000 });

    // Invest Now CTAs inside Featured section
    const investNowLinks = page.locator('a[href^="/properties/"]', {
        hasText: 'Invest Now',
    });

    await expect(investNowLinks).toHaveCount(3, { timeout: 5000 });
}

export async function verifyBlogPreview(page) {
    // Blog section title
    await expect(
        page.getByRole('heading', { name: 'Latest Insights' })
    ).toBeVisible({ timeout: 5000 });

    // Blog articles (preview shows 3)
    const blogLinks = page.locator('a[href^="/blog/"]');
    await expect(blogLinks).toHaveCount(3, { timeout: 5000 });

    // Optional: validate that each card has an H2 title
    const blogTitles = page.locator('a[href^="/blog/"] h2');
    await expect(blogTitles).toHaveCount(3, { timeout: 5000 });
}

export async function verifyFAQSection(page) {
    // FAQ section title
    await expect(
        page.getByRole('heading', { name: 'Frequently Asked Questions' })
    ).toBeVisible({ timeout: 5000 });

    // FAQ questions (buttons)
    const faqButtons = page.locator('section', {
        has: page.getByRole('heading', { name: 'Frequently Asked Questions' }),
    }).getByRole('button');

    // Expect at least one FAQ item (exact count can change)
    await expect(faqButtons.first()).toBeVisible();
}

