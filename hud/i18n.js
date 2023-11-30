var I18n = (function() {

	var messages = {
		en_GB: {
			message: {
				a11y_label_add_tool: 'Add Tool',
				a11y_label_alert_details: 'Alert Details',
				a11y_label_alert_list: 'Alert List',
				a11y_label_all_alerts: 'All Alerts',
				a11y_label_back: 'Back',
				a11y_label_break_message: 'Break Message',
				a11y_label_close: 'Close',
				a11y_label_history: 'History',
				a11y_label_http_message: 'HTTP Message',
				a11y_label_open_close: 'Open/Close',
				a11y_label_select_tools: 'Select Tools',
				a11y_label_settings: 'Settings',
				a11y_label_show_hide: 'Show/Hide HUD',
				a11y_label_websockets: 'WebSockets',
				a11y_label_ws_message: 'WebSocket Message',
				ajax_spider_browser_label: 'Browser:',
				ajax_spider_running: 'Running',
				ajax_spider_start_1: 'Start Ajax Spidering <i>',
				ajax_spider_start_2: '</i>?',
				ajax_spider_start_scope_1: '<i>',
				ajax_spider_start_scope_2: '</i> is not in scope.<br>In order to spider the site you must add it to the scope.<br>Add <i>',
				ajax_spider_start_scope_3: '</i> to the scope and start ajax spidering it?',
				ajax_spider_stop_1: 'The url <i>',
				ajax_spider_stop_2: '</i> is currently being Ajax Spidered. <br> Would you like to stop the Ajax Spider tool?',
				ajax_spider_tool: 'Ajax Spider',
				alerts_all_title: 'All Alerts',
				alerts_details_title: 'Alert Details',
				alerts_field_attack: 'Attack',
				alerts_field_confidence: 'Confidence',
				alerts_field_cweid: 'CWE Id',
				alerts_field_description: 'Description',
				alerts_field_evidence: 'Evidence',
				alerts_field_other: 'Other Info',
				alerts_field_parameter: 'Parameter',
				alerts_field_reference: 'Reference',
				alerts_field_risk: 'Risk',
				alerts_field_solution: 'Solution',
				alerts_field_url: 'URL',
				alerts_field_wascid: 'WASC Id',
				alerts_page_high_tool: 'Page Alerts: High',
				alerts_page_info_tool: 'Page Alerts: Info',
				alerts_page_low_tool: 'Page Alerts: Low',
				alerts_page_medium_tool: 'Page Alerts: Medium',
				alerts_page_title: 'Page Alerts',
				alerts_risk_high: 'High',
				alerts_risk_info: 'Informational',
				alerts_risk_low: 'Low',
				alerts_risk_medium: 'Medium',
				alerts_site_high_tool: 'Site Alerts: High',
				alerts_site_info_tool: 'Site Alerts: Info',
				alerts_site_low_tool: 'Site Alerts: Low',
				alerts_site_medium_tool: 'Site Alerts: Medium',
				alerts_site_title: 'Site Alerts',
				alerts_title: 'Alerts',
				api_error_title: 'API Error',
				ascan_start_1: 'Start Active Scan on <i>',
				ascan_start_2: '</i>?',
				ascan_start_scope_1: '<i>',
				ascan_start_scope_2: '</i> is not in scope.<br>In order to Active Scan the site you must add it to the scope.<br>Add <i>',
				ascan_start_scope_3: '</i> to the scope and start Active Scanning it?',
				ascan_stop_1: 'The site <i>',
				ascan_stop_2: '</i> is currently being Active Scanned. <br> Would you like to stop the Active Scan tool?',
				ascan_tool: 'Active Scan',
				attack_start: 'Turn off Attack Mode?',
				attack_stop: 'Turn on Attack Mode?<br>This will cause ZAP to automatically attack all pages in scope.',
				attack_tool: 'Attack Mode',
				break_continue: 'Continue',
				break_drop: 'Drop',
				break_http_message_title: 'HTTP Message',
				break_intercept_http_title: 'Intercepted HTTP Message',
				break_intercept_ws_title: 'Intercepted WebSocket Message',
				break_step: 'Step',
				break_tool: 'Break',
				changelog_title: 'Changelog',
				comments_tool: 'Comments',
				common_add: 'Add',
				common_cancel: 'Cancel',
				common_clear: 'Clear',
				common_close: 'Close',
				common_enable_regex: 'Enable RegEx',
				common_in: 'In',
				common_items_filtered: '{0} of {1} items hidden by filters',
				common_menu_title: 'Menu',
				common_off: 'Off',
				common_ok: 'OK',
				common_on: 'On',
				common_out: 'Out',
				common_remove: 'Remove',
				common_request: 'Request',
				common_response: 'Response',
				common_save: 'Save',
				common_start: 'Start',
				common_stop: 'Stop',
				common_turn_off: 'Turn Off',
				common_turn_on: 'Turn On',
				error_invalid_html_header: 'Invalid HTML header',
				error_with_message: 'Error: {0}.<br>See console log and zap.log for more details.',
				history_ascan_request: 'Active Scan',
				history_http_message_field_code: 'Status',
				history_http_message_field_method: 'Method',
				history_http_message_field_time: 'Time',
				history_http_message_field_url: 'URL',
				history_http_message_title: 'HTTP Message',
				history_replay_browser: 'Replay in Browser',
				history_replay_console: 'Replay in Console',
				history_tool: 'History',
				html_report_tool: 'Show HTML Report',
				hud_errors_tool: 'HUD Errors',
				hud_select_tool: 'Select Tool',
				scope_add: 'Add current domain to scope?',
				scope_hud_context: 'HUD Context',
				scope_remove: 'Remove current domain from scope?',
				scope_required: 'This tool requires the current site be added to the scope, via the Scope tool.',
				scope_tool: 'Scope',
				selenium_browser_chrome: 'Chrome',
				selenium_browser_chrome_headless: 'Chrome headless',
				selenium_browser_firefox: 'Firefox',
				selenium_browser_firefox_headless: 'Firefox headless',
				settings_changelog: 'Show the Changelog',
				settings_resets: 'Reset Configurations to Default',
				settings_title: 'HUD Settings',
				settings_tutorial: 'Take the HUD Tutorial',
				show_tool: 'Show / Enable',
				sites_children_loading: '...Loading...',
				sites_status: 'Sites',
				sites_title: 'Sites',
				sites_tool: 'Sites Tree',
				spider_start_1: 'Start Spidering <i>',
				spider_start_2: '</i>?',
				spider_start_scope_1: '<i>',
				spider_start_scope_2: '</i> is not in scope.<br>In order to spider the site you must add it to the scope.<br>Add <i>',
				spider_start_scope_3: '</i> to the scope and start spidering it?',
				spider_stop_1: 'The site <i>',
				spider_stop_2: '</i> is currently being Spidered. <br> Would you like to stop the Spider tool?',
				spider_tool: 'Spider',
				togglescript_no_scripts_found: 'No Suitable Scripts Found',
				togglescript_script: 'Script',
				togglescript_select: 'Select',
				togglescript_tool: 'Toggle Script',
				websockets_direction_incoming: 'Incoming',
				websockets_direction_outgoing: 'Outgoing',
				websockets_message_field_bytes: 'Bytes',
				websockets_message_field_direction: 'Direction',
				websockets_message_field_opcode: 'Opcode',
				websockets_message_field_payload: 'Payload',
				websockets_message_field_time: 'Time',
				websockets_message_title: 'WebSockets Message',
				websockets_replay: 'Replay',
				websockets_tool: 'WebSockets',
			}
		},
		fr_FR: {
			message: {
				a11y_label_add_tool: 'Add Tool',
				a11y_label_alert_details: 'Alert Details',
				a11y_label_alert_list: 'Alert List',
				a11y_label_all_alerts: 'All Alerts',
				a11y_label_back: 'Back',
				a11y_label_break_message: 'Break Message',
				a11y_label_close: 'Close',
				a11y_label_history: 'History',
				a11y_label_http_message: 'HTTP Message',
				a11y_label_open_close: 'Open/Close',
				a11y_label_select_tools: 'Select Tools',
				a11y_label_settings: 'Settings',
				a11y_label_show_hide: 'Show/Hide HUD',
				a11y_label_websockets: 'WebSockets',
				a11y_label_ws_message: 'WebSocket Message',
				ajax_spider_browser_label: 'Browser:',
				ajax_spider_running: 'Running',
				ajax_spider_start_1: 'Start Ajax Spidering <i>',
				ajax_spider_start_2: '</i>?',
				ajax_spider_start_scope_1: '<i>',
				ajax_spider_start_scope_2: '</i> is not in scope.<br>In order to spider the site you must add it to the scope.<br>Add <i>',
				ajax_spider_start_scope_3: '</i> to the scope and start ajax spidering it?',
				ajax_spider_stop_1: 'The url <i>',
				ajax_spider_stop_2: '</i> is currently being Ajax Spidered. <br> Would you like to stop the Ajax Spider tool?',
				ajax_spider_tool: 'Ajax Spider',
				alerts_all_title: 'All Alerts',
				alerts_details_title: 'Alert Details',
				alerts_field_attack: 'Attack',
				alerts_field_confidence: 'Confidence',
				alerts_field_cweid: 'CWE Id',
				alerts_field_description: 'Description',
				alerts_field_evidence: 'Evidence',
				alerts_field_other: 'Other Info',
				alerts_field_parameter: 'Parameter',
				alerts_field_reference: 'Reference',
				alerts_field_risk: 'Risk',
				alerts_field_solution: 'Solution',
				alerts_field_url: 'URL',
				alerts_field_wascid: 'WASC Id',
				alerts_page_high_tool: 'Alertes de Page',
				alerts_page_info_tool: 'Alertes de Page',
				alerts_page_low_tool: 'Alertes de Page',
				alerts_page_medium_tool: 'Alertes de Page',
				alerts_page_title: 'Page Alerts',
				alerts_risk_high: 'Haut',
				alerts_risk_info: 'Info',
				alerts_risk_low: 'Bas',
				alerts_risk_medium: 'Moyen',
				alerts_site_high_tool: 'Alertes de Site',
				alerts_site_info_tool: 'Alertes de Site',
				alerts_site_low_tool: 'Alertes de Site',
				alerts_site_medium_tool: 'Alertes de Site',
				alerts_site_title: 'Site Alerts',
				alerts_title: 'Alerts',
				api_error_title: 'API Error',
				ascan_start_1: 'Start Active Scan on <i>',
				ascan_start_2: '</i>?',
				ascan_start_scope_1: '<i>',
				ascan_start_scope_2: '</i> is not in scope.<br>In order to Active Scan the site you must add it to the scope.<br>Add <i>',
				ascan_start_scope_3: '</i> to the scope and start Active Scanning it?',
				ascan_stop_1: 'The site <i>',
				ascan_stop_2: '</i> is currently being Active Scanned. <br> Would you like to stop the Active Scan tool?',
				ascan_tool: 'Balayage Actif',
				attack_start: 'Turn off Attack Mode?',
				attack_stop: 'Turn on Attack Mode?<br>This will cause ZAP to automatically attack all pages in scope.',
				attack_tool: 'Mode d\'Attaque',
				break_continue: 'Continue',
				break_drop: 'Drop',
				break_http_message_title: 'HTTP Message',
				break_intercept_http_title: 'Intercepted HTTP Message',
				break_intercept_ws_title: 'Intercepted WebSocket Message',
				break_step: 'Step',
				break_tool: 'Arrêt',
				changelog_title: 'Changelog',
				comments_tool: 'Comments',
				common_add: 'Add',
				common_cancel: 'Annuler',
				common_clear: 'Clear',
				common_close: 'Close',
				common_enable_regex: 'Enable RegEx',
				common_in: 'Dedans',
				common_items_filtered: '{0} of {1} items hidden by filters',
				common_menu_title: 'Menu',
				common_off: 'Off',
				common_ok: 'OK',
				common_on: 'En',
				common_out: 'Dehors',
				common_remove: 'Supprimer',
				common_request: 'Requête',
				common_response: 'Résponse',
				common_save: 'Sauvegarder',
				common_start: 'Début',
				common_stop: 'Arrête',
				common_turn_off: 'Turn Off',
				common_turn_on: 'Turn On',
				error_invalid_html_header: 'Invalid HTML header',
				error_with_message: 'Error: {0}.<br>See console log and zap.log for more details.',
				history_ascan_request: 'Active Scan',
				history_http_message_field_code: 'Status',
				history_http_message_field_method: 'Method',
				history_http_message_field_time: 'Time',
				history_http_message_field_url: 'URL',
				history_http_message_title: 'HTTP Message',
				history_replay_browser: 'Replay in Browser',
				history_replay_console: 'Replay in Console',
				history_tool: 'Historique',
				html_report_tool: 'Show HTML Report',
				hud_errors_tool: 'HUD Errors',
				hud_select_tool: 'Select Tool',
				scope_add: 'Add current domain to scope?',
				scope_hud_context: 'HUD Context',
				scope_remove: 'Remove current domain from scope?',
				scope_required: 'This tool requires the current site be added to the scope, via the Scope tool.',
				scope_tool: 'Périmètre',
				selenium_browser_chrome: 'Chrome',
				selenium_browser_chrome_headless: 'Chrome headless',
				selenium_browser_firefox: 'Firefox',
				selenium_browser_firefox_headless: 'Firefox headless',
				settings_changelog: 'Show the Changelog',
				settings_resets: 'Reset Configurations to Default',
				settings_title: 'HUD Settings',
				settings_tutorial: 'Take the HUD Tutorial',
				show_tool: 'Montrer / Activer',
				sites_children_loading: '...Loading...',
				sites_status: 'Sites',
				sites_title: 'Sites',
				sites_tool: 'Arbre des Sites',
				spider_start_1: 'Start Spidering <i>',
				spider_start_2: '</i>?',
				spider_start_scope_1: '<i>',
				spider_start_scope_2: '</i> is not in scope.<br>In order to spider the site you must add it to the scope.<br>Add <i>',
				spider_start_scope_3: '</i> to the scope and start spidering it?',
				spider_stop_1: 'The site <i>',
				spider_stop_2: '</i> is currently being Spidered. <br> Would you like to stop the Spider tool?',
				spider_tool: 'Indexer',
				togglescript_no_scripts_found: 'No Suitable Scripts Found',
				togglescript_script: 'Script',
				togglescript_select: 'Select',
				togglescript_tool: 'Toggle Script',
				websockets_direction_incoming: 'Incoming',
				websockets_direction_outgoing: 'Outgoing',
				websockets_message_field_bytes: 'Bytes',
				websockets_message_field_direction: 'Direction',
				websockets_message_field_opcode: 'Opcode',
				websockets_message_field_payload: 'Payload',
				websockets_message_field_time: 'Time',
				websockets_message_title: 'WebSockets Message',
				websockets_replay: 'Replay',
				websockets_tool: 'WebSockets',
			}
		},
	};

	Vue.use(VueI18n);
	var i18n = new VueI18n({
		locale: '<<ZAP_LOCALE>>',
		fallbackLocale: 'en_GB',
		messages: messages
	});
	new Vue({ i18n: i18n });

	function i18nt (key, values) {
		return i18n.t("message." + key, values);
	};

	function setLocale (locale) {
		i18n.locale = locale;
	};

	return {
		i18n: i18n,
		t: i18nt,
		setLocale: setLocale
	};
})();