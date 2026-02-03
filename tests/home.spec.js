import { test } from '@playwright/test';
import { openPage } from '../steps/navigation.steps';
import {
    verifyHeroSection,
    verifyFeaturedProperties,
    verifyBlogPreview,
    verifyFAQSection
} from '../steps/home.steps';

test('Home page should display main sections', async ({ page }) => {
    await openPage(page, '/');
    await verifyHeroSection(page);
    await verifyFeaturedProperties(page);
    await verifyBlogPreview(page);
    await verifyFAQSection(page);
});
