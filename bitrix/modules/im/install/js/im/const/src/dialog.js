/**
 * Bitrix Messenger
 * Event names constants
 *
 * @package bitrix
 * @subpackage im
 * @copyright 2001-2019 Bitrix
 */

export const DialogType = Object.freeze({
	private: 'private',
	chat: 'chat',
	open: 'open',
	call: 'call',
	crm: 'crm',
});

export const DialogCrmType = Object.freeze({
	lead: 'lead',
	company: 'company',
	contact: 'contact',
	deal: 'deal',
	none: 'none',
});

export const DialogReferenceClassName = Object.freeze({
	listBody: 'bx-im-dialog-list',
	listItem: 'bx-im-dialog-list-item-reference',
	listItemName: 'bx-im-dialog-list-item-name-reference',
	listItemBody: 'bx-im-dialog-list-item-content-reference',
	listUnreadLoader: 'bx-im-dialog-list-unread-loader-reference',
});