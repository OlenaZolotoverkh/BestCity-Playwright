import { test } from '@playwright/test';
import { openPage } from '../steps/navigation.steps';
import {
    verifyPropertiesList,
    openFirstProperty,
    verifyPropertyDetails,
    open3DViewButton,
    verifyInvestmentDetailsBlock,
    verifyFinancialOverviewSection,
    verifyConnectWalletButton
} from '../steps/properties.steps';

test('User can open property details from Properties page', async ({ page }) => {
    await openPage(page, '/properties');
    await verifyPropertiesList(page);
    await openFirstProperty(page);
    await verifyPropertyDetails(page);
    await verifyInvestmentDetailsBlock(page);
    await verifyFinancialOverviewSection(page);
    await verifyConnectWalletButton(page);
    await open3DViewButton(page);
});
