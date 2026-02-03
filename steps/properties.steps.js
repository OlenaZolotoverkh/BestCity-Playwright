import { expect } from '@playwright/test';

export async function verifyPropertiesList(page) {
    const cards = page.locator('button', { hasText: 'Invest Now' });
    await expect(cards.first()).toBeVisible();
}

export async function openFirstProperty(page) {
    const firstPropertyLink = page.locator('a[href^="/properties/"]').first();
    await expect(firstPropertyLink).toBeVisible({ timeout: 5000 });
    await firstPropertyLink.click();
    await expect(page).toHaveURL(/\/properties\/\d+/);
}

export async function verifyPropertyDetails(page) {
    await expect(
        page.getByRole('heading', { name: 'Property Details' })
    ).toBeVisible({ timeout: 5000 });

    // Property description text
    await expect(
        page.locator('p').first()
    ).toBeVisible();

    // Features section
    await expect(
        page.getByRole('heading', { name: 'Features' })
    ).toBeVisible();

    // Token Information section
    await expect(
        page.getByRole('heading', { name: 'Token Information' })
    ).toBeVisible();

    // Financial Overview section
    await expect(
        page.getByRole('heading', { name: 'Financial Overview' })
    ).toBeVisible();

    // Schedule Consultation button
    await expect(
        page.getByRole('button', { name: /schedule consultation/i })
    ).toBeVisible();
}

export async function verifyInvestmentDetailsBlock(page) {
    // Investment Price label
    await expect(
        page.getByText('Investment Price')
    ).toBeVisible({ timeout: 5000 });

    // Price value (contains $)
    await expect(
        page.locator('span', { hasText: '$' }).first()
    ).toBeVisible();

    // ETH value
    await expect(
        page.getByText(/ETH/i)
    ).toBeVisible();

    // Annual ROI
    await expect(
        page.getByText('Annual ROI')
    ).toBeVisible();

    // Funding Progress
    await expect(
        page.getByText('Funding Progress')
    ).toBeVisible();

    // View 3D version button/link
    await expect(
        page.getByRole('link', { name: /view 3d/i })
    ).toBeVisible();

    // Connect Wallet to Invest button
    await expect(
        page.getByRole('button', { name: /connect wallet to invest/i })
    ).toBeVisible();
}

export async function verifyFinancialOverviewSection(page) {
    // Financial Overview section title
    await expect(
        page.getByRole('heading', { name: 'Financial Overview' })
    ).toBeVisible({ timeout: 5000 });

    // Rental Income block
    await expect(
        page.getByRole('heading', { name: 'Rental Income' })
    ).toBeVisible();

    await expect(
        page.getByText('Gross Rent')
    ).toBeVisible();

    await expect(
        page.getByText('Net Rent')
    ).toBeVisible();

    // Expenses block
    await expect(
        page.getByRole('heading', { name: 'Expenses' })
    ).toBeVisible();

    await expect(
        page.getByText('Management')
    ).toBeVisible();

    await expect(
        page.getByText('Maintenance')
    ).toBeVisible();

    await expect(
        page.getByText('Insurance')
    ).toBeVisible();
}

export async function verifyConnectWalletButton(page) {
    const connectWalletBtn = page.getByRole('button', {
        name: /connect wallet to invest/i,
    });

    await expect(connectWalletBtn).toBeVisible({ timeout: 5000 });
    await expect(connectWalletBtn).toBeEnabled();
}



export async function open3DViewButton(page) {
    const view3DLink = page.getByRole('link', { name: /view 3d version/i });
    await expect(view3DLink).toBeVisible();
    await view3DLink.click();
    await expect(page).toHaveURL('/property-3d');
}
