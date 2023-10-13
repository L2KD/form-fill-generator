var listWarnList = [
    {text: "Clear", value: "clear"},
    {text: "Fail: ____", value: "fail"},
];

var listDuplicateList = [
    {text: "Clear", value: "clear"},
    {text: "Found: ____", value: "found"},
];

var listSubverticalList = [
    {text: "Accounting & Auditing", value: "account-auditing"},
    {text: "Billing Services", value: "billing-services"},
    {text: "Bookkeeping", value: "bookkeeping"},
    {text: "Cash Flow Management", value: "cash-flow-management"},
    {text: "Collection Services", value: "collection-services"},
    {text: "Sarbanes-Oxley Compliance Management", value: "sarbanes"},
    {text: "Tax Preparation & Planning", value: "tax"}
];

var listPrimaryWebsiteProvidedList = [
    {text: "Yes", value: "yes"},
    {text: "No", value: "no"},
];

var listDomainsActiveList = [
    {text: "Yes", value: "yes"},
    {text: "No - Broken (__); Parked (__); Invalid Format (__)", value: "no"},
];

var listDomainConnectionsList = [
    {text: "Yes", value: "yes"},
    {text: "No - Mismatching Name (___)", value: "no"},
];

var listGoogleSearchResultsList = [
    {text: "Pass", value: "pass"},
    {text: "Fail", value: "fail"},
];

var listFraudIndicatorsList = [
    {text: "Clear", value: "clear"},
    {text: "Found: ____", value: "found"},
];

var listInputs = [
    {id: "input-warn-list", label: "* Warn Lists: ", type: "select", listValue: listWarnList, textWhenValue: "fail", valueFormat: "Fail: {0}", listInput: ['Fail']},
    {id: "input-duplicate-list", label: "* Duplicates: ", type: "select", listValue: listDuplicateList, textWhenValue: "found", valueFormat: "Found: {0}", listInput: ['Found']},
    {id: "input-subvertical-list", label: "* Subvertical(s): ", type: "select", listValue: listSubverticalList, textWhenValue: null, valueFormat: "none", listInput: null},
    {id: "input-primary-ưebsite-provided-list", label: "* Primary Website Provided: ", type: "select", listValue: listPrimaryWebsiteProvidedList, textWhenValue: null, valueFormat: "none", listInput: null},
    {id: "input-domains-active-list", label: "* Domains Active: ", type: "select", listValue: listDomainsActiveList, textWhenValue: "no", valueFormat: "No - Broken ({0}); Parked ({1}); Invalid Format ({2})", listInput: ['Broken', 'Parked', 'Invalid Format']},
    {id: "input-domain-connections-list", label: "* Domain Connections (Names/Branding/etc): ", type: "select", listValue: listDomainConnectionsList, textWhenValue: "no", valueFormat: "No - Mismatching Name ({0})", listInput: ['Mismatching Name']},
    {id: "input-google-search-results-list", label: "* Google Search Results: ", type: "select", listValue: listGoogleSearchResultsList, textWhenValue: null, valueFormat: "none", listInput: null},
    {id: "input-fraud-indicators-list", label: "* Fraud Indicators: ", type: "select", listValue: listFraudIndicatorsList, textWhenValue: "found", valueFormat: "Found: {0}", listInput: ['Found']},
    {id: "input-additional-notesAdditional-notes", label: "* Additional Notes: ", type: "text", listValue: null, textWhenValue: null},
];

var defaultFormValueWithFail = [
    {id: "input-warn-list", defaultValue: "fail"},
    {id: "input-duplicate-list", defaultValue: "found"},
    {id: "input-subvertical-list", defaultValue: "account-auditing"},
    {id: "input-primary-ưebsite-provided-list", defaultValue: "no"},
    {id: "input-domains-active-list", defaultValue: "no"},
    {id: "input-domain-connections-list", defaultValue: "no"},
    {id: "input-google-search-results-list", defaultValue: "fail"},
    {id: "input-fraud-indicators-list", defaultValue: "found"},
];

