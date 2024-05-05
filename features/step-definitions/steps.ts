import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^I go to (\w+) home screen$/, async (page) => {
    await browser.url(`https://${page}.com/uniandes/`);
    await browser.maximizeWindow();

    const btnClose = $('div > div.modal-header > button');
    try {await btnClose.waitForExist();} catch (error) {}
    if (await btnClose.isDisplayed()) {
        await btnClose.click();
    }
});

When(/^I open the login screen$/, async () => {
    await $('button.loginButton').click();
});

When(/^I fill with (.*) and (.*)$/, async (username, password) => {
    await $('input[name="email"]').setValue(username);
    await $('input[name="password"]').setValue(password);
});

When(/^I fill with (.*), (.*), (.*), (.*), (.*)$/, async (name, lastname, email, password, confirmpassword) => {
    try {await $('input[name="firstname"]').waitForExist({ timeout: 20000 });} catch (error) {}
    await $('input[name="firstname"]').setValue(name);
    await $('input[name="lastname"]').setValue(lastname);
    await $('input[name="email"]').setValue(email);
    await $('input[name="password"]').setValue(password);
    await $('input[name="password2"]').setValue(confirmpassword);
});

When(/^I try to login$/, async () => {
    await $('button[type="submit"]').click();
});

When(/^I click on register$/, async () => {
    await $('div > p > a').click();
});

When(/^I click on terms (.*)$/, async (terms) => {
    if (terms.trim() !== "") {
        await $('input[name=accept]').click();
    }
});

When(/^I try to register$/, async () => {
    await $('div > form > button').click();
});

Then(/^I expect to see (.*)$/, async (message) => {
    const alertDiv = $('div.notice.alert.alert-danger');
    try {await alertDiv.waitForExist()} catch (error) {}
    if (await alertDiv.isExisting()) {
        await expect(alertDiv).toHaveTextContaining(message);
    } else {
        await expect(message.trim()).toBe("");
    }
});

Then(/^I expect to validate the register status (.*)$/, async (status) => {
    status = status.toLowerCase();
    const alertDiv = $('span.glyphicon.glyphicon-remove.form-control-feedback');
    const noticeDiv = $('div.notice.alert.alert-danger');
    const dangerDiv = $('div.swal2-icon.swal2-error.swal2-icon-show');
    const successDiv = $('div.swal2-icon.swal2-success.swal2-icon-show');
    
    try {await alertDiv.waitForExist();} catch (error) {}
    try {await noticeDiv.waitForExist();} catch (error) {}

    if (status === 'fail') {
        if (!alertDiv.isExisting() || !noticeDiv.isExisting()) {
            throw new Error("Error not present.");
        }
    } else if (status === 'failUser'.toLowerCase()) {
        await dangerDiv.waitForExist()
    } else if (status === 'pass') {
        await successDiv.waitForExist()
    } else {
        throw new Error(`The status '${status}' is invalid.`);
    }
});

