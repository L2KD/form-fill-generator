var listWarnList = [
    {text: "Clear", value: "clear"},
    {text: "Fail: ", value: "fail"},
];

var listDuplicateList = [
    {text: "Clear", value: "clear"},
    {text: "Found: ", value: "found"},
];

var listSubverticalList = [
    {value: "Accounting & Auditing", text: "Accounting & Auditing"},
    {value: "Billing Services", text: "Billing Services"},
    {value: "Bookkeeping", text: "Bookkeeping"},
    {value: "Cash Flow Management", text: "Cash Flow Management"},
    {value: "Collection Services", text: "Collection Services"},
    {value: "Sarbanes-Oxley Compliance Management", text: "Sarbanes-Oxley Compliance Management"},
    {value: "Tax Preparation & Planning", text: "Tax Preparation & Planning"},
    {value: "ATM Sales & Processing", text: "ATM Sales & Processing"},
    {value: "Banking", text: "Banking"},
    {value: "Bank Accounts", text: "Bank Accounts"},
    {value: "Current Accounts & Checking Accounts", text: "Current Accounts & Checking Accounts"},
    {value: "Savings Accounts", text: "Savings Accounts"},
    {value: "College Savings Plans", text: "College Savings Plans"},
    {value: "Money Market Accounts", text: "Money Market Accounts"},
    {value: "Bill Payment Services", text: "Bill Payment Services"},
    {value: "Debit & Check Cards", text: "Debit & Check Cards"},
    {value: "Fixed Deposit Accounts & Certificates", text: "Fixed Deposit Accounts & Certificates"},
    {value: "Mobile Banking", text: "Mobile Banking"},
    {value: "Mobile Payments & Digital Wallets", text: "Mobile Payments & Digital Wallets"},
    {value: "Offshore Banking", text: "Offshore Banking"},
    {value: "Online Banking", text: "Online Banking"},
    {value: "Private Banking", text: "Private Banking"},
    {value: "Student Banking", text: "Student Banking"},
    {value: "Business Finance", text: "Business Finance"},
    {value: "Investment Banking", text: "Investment Banking"},
    {value: "Mergers & Acquisitions", text: "Mergers & Acquisitions"},
    {value: "Business News & Media", text: "Business News & Media"},
    {value: "Credit & Lending", text: "Credit & Lending"},
    {value: "Credit Cards", text: "Credit Cards"},
    {value: "Business Credit Cards", text: "Business Credit Cards"},
    {value: "Low Interest & No Interest Credit Cards", text: "Low Interest & No Interest Credit Cards"},
    {value: "Rewards Cards", text: "Rewards Cards"},
    {value: "Cashback Rewards Cards", text: "Cashback Rewards Cards"},
    {value: "Travel & Miles Rewards Cards", text: "Travel & Miles Rewards Cards"},
    {value: "Student Credit Cards", text: "Student Credit Cards"},
    {value: "Credit Management", text: "Credit Management"},
    {value: "Credit Counseling", text: "Credit Counseling"},
    {value: "Credit Reports & Reporting Services", text: "Credit Reports & Reporting Services"},
    {value: "Debt Management & Consolidation", text: "Debt Management & Consolidation"},
    {value: "Identity Theft & Credit Monitoring", text: "Identity Theft & Credit Monitoring"},
    {value: "Loans", text: "Loans"},
    {value: "Auto Financing", text: "Auto Financing"},
    {value: "Auto Leasing", text: "Auto Leasing"},
    {value: "Auto Loans", text: "Auto Loans"},
    {value: "Bad Credit & No Credit Credit & Lending", text: "Bad Credit & No Credit Credit & Lending"},
    {value: "Commercial Lending", text: "Commercial Lending"},
    {value: "Commercial Mortgages", text: "Commercial Mortgages"},
    {value: "Farm Loans & Price Support", text: "Farm Loans & Price Support"},
    {value: "Home Loans & Mortgages", text: "Home Loans & Mortgages"},
    {value: "Adjustable Rate & Tracker Mortgages", text: "Adjustable Rate & Tracker Mortgages"},
    {value: "Buy-To-Let Mortgages", text: "Buy-To-Let Mortgages"},
    {value: "First Time Buyer Mortgages", text: "First Time Buyer Mortgages"},
    {value: "Fixed Rate Mortgages", text: "Fixed Rate Mortgages"},
    {value: "Government Mortgages", text: "Government Mortgages"},
    {value: "Home Equity Loans & Lines of Credit", text: "Home Equity Loans & Lines of Credit"},
    {value: "Home Refinancing Loans", text: "Home Refinancing Loans"},
    {value: "Interest Only Mortgages", text: "Interest Only Mortgages"},
    {value: "Reverse Mortgages", text: "Reverse Mortgages"},
    {value: "Subprime Mortgages", text: "Subprime Mortgages"},
    {value: "Personal Lending & Borrowing", text: "Personal Lending & Borrowing"},
    {value: "Payday & Emergency Loans", text: "Payday & Emergency Loans"},
    {value: "Personal Loans & Lines of Credit", text: "Personal Loans & Lines of Credit"},
    {value: "Title Loans", text: "Title Loans"},
    {value: "Purchase Financing", text: "Purchase Financing"},
    {value: "Computer & Consumer Electronics Financing", text: "Computer & Consumer Electronics Financing"},
    {value: "Home Appliance Financing", text: "Home Appliance Financing"},
    {value: "Unsecured Credit & Lending", text: "Unsecured Credit & Lending"},
    {value: "Unsecured Loans", text: "Unsecured Loans"},
    {value: "Crowdfunding", text: "Crowdfunding"},
    {value: "Financial Planning & Management", text: "Financial Planning & Management"},
    {value: "Inheritance & Estate Planning", text: "Inheritance & Estate Planning"},
    {value: "Money Management", text: "Money Management"},
    {value: "Retirement & Pension Planning", text: "Retirement & Pension Planning"},
    {value: "Wealth Management", text: "Wealth Management"},
    {value: "Grants, Scholarships & Financial Aid", text: "Grants, Scholarships & Financial Aid"},
    {value: "Government Grants", text: "Government Grants"},
    {value: "Student Loans", text: "Student Loans"},
    {value: "Study Grants & Scholarships", text: "Study Grants & Scholarships"},
    {value: "Insurance", text: "Insurance"},
    {value: "Accident & Casualty Insurance", text: "Accident & Casualty Insurance"},
    {value: "Annuities", text: "Annuities"},
    {value: "Business & Commercial Insurance", text: "Business & Commercial Insurance"},
    {value: "Professional Liability & Malpractice Insurance", text: "Professional Liability & Malpractice Insurance"},
    {value: "Worker's Compensation Insurance", text: "Worker's Compensation Insurance"},
    {value: "Credit Insurance", text: "Credit Insurance"},
    {value: "Disability Insurance", text: "Disability Insurance"},
    {value: "Disaster Insurance", text: "Disaster Insurance"},
    {value: "Health Insurance", text: "Health Insurance"},
    {value: "Dental Insurance", text: "Dental Insurance"},
    {value: "Long-term Care Insurance", text: "Long-term Care Insurance"},
    {value: "Supplemental Health Insurance", text: "Supplemental Health Insurance"},
    {value: "Vision Insurance", text: "Vision Insurance"},
    {value: "Home Warranties", text: "Home Warranties"},
    {value: "Liability Insurance", text: "Liability Insurance"},
    {value: "Personal Liability Insurance", text: "Personal Liability Insurance"},
    {value: "Life Insurance", text: "Life Insurance"},
    {value: "Pet Insurance", text: "Pet Insurance"},
    {value: "Property Insurance", text: "Property Insurance"},
    {value: "Homeowners Insurance", text: "Homeowners Insurance"},
    {value: "Building Insurance", text: "Building Insurance"},
    {value: "Contents Insurance", text: "Contents Insurance"},
    {value: "Renters Insurance", text: "Renters Insurance"},
    {value: "Risk Management", text: "Risk Management"},
    {value: "Travel Insurance", text: "Travel Insurance"},
    {value: "Vehicle Insurance", text: "Vehicle Insurance"},
    {value: "Car Insurance", text: "Car Insurance"},
    {value: "Commercial Vehicle Insurance", text: "Commercial Vehicle Insurance"},
    {value: "Motorcycle Insurance", text: "Motorcycle Insurance"},
    {value: "Recreational Boat & Watercraft Insurance", text: "Recreational Boat & Watercraft Insurance"},
    {value: "Recreational Vehicle & Caravan Insurance", text: "Recreational Vehicle & Caravan Insurance"},
    {value: "Van Insurance", text: "Van Insurance"},
    {value: "Investing", text: "Investing"},
    {value: "Brokerages & Day Trading", text: "Brokerages & Day Trading"},
    {value: "Commodities & Futures Trading", text: "Commodities & Futures Trading"},
    {value: "Currencies & Foreign Exchange", text: "Currencies & Foreign Exchange"},
    {value: "Digital Currencies", text: "Digital Currencies"},
    {value: "Derivatives", text: "Derivatives"},
    {value: "Exchange Traded Funds", text: "Exchange Traded Funds"},
    {value: "Hedge Funds", text: "Hedge Funds"},
    {value: "Interest Free & Tax-Deferred Savings Accounts", text: "Interest Free & Tax-Deferred Savings Accounts"},
    {value: "Investor Relations & Venture Capital", text: "Investor Relations & Venture Capital"},
    {value: "Mutual Funds", text: "Mutual Funds"},
    {value: "Precious Metals Trading", text: "Precious Metals Trading"},
    {value: "Real Estate Investments", text: "Real Estate Investments"},
    {value: "Retirement Investments", text: "Retirement Investments"},
    {value: "401(K)s", text: "401(K)s"},
    {value: "IRAs", text: "IRAs"},
    {value: "Pensions", text: "Pensions"},
    {value: "Securities", text: "Securities"},
    {value: "Bonds", text: "Bonds"},
    {value: "Stocks", text: "Stocks"},
    {value: "Spread Betting", text: "Spread Betting"},
    {value: "Money Transfer & Wire Services", text: "Money Transfer & Wire Services"},
    {value: "Accounting & Financial Software", text: "Accounting & Financial Software"},
    {value: "Time Management & Time Tracking Software", text: "Time Management & Time Tracking Software"},
    {value: "Finance Law", text: "Finance Law"},
    {value: "Legal Insurance", text: "Legal Insurance"},
    {value: "Title Insurance", text: "Title Insurance"},
    {value: "Merchant Point-of-Sale Systems", text: "Merchant Point-of-Sale Systems"},
    {value: "Check Printing", text: "Check Printing"},
    {value: "Finance Jobs", text: "Finance Jobs"},
    {value: "OOS", text: "OOS"},

];

var listPrimaryWebsiteProvidedList = [
    {text: "Yes", value: "yes"},
    {text: "No", value: "no"},
];

var listDomainsActiveList = [
    {text: "Yes", value: "yes"},
    {text: "No", value: "no"},
];

var listDomainConnectionsList = [
    {text: "Yes", value: "yes"},
    {text: "No - Mismatching Name ()", value: "no"},
];

var listGoogleSearchResultsList = [
    {text: "Pass", value: "pass"},
    {text: "Fail", value: "fail"},
];

var listFraudIndicatorsList = [
    {text: "Clear", value: "clear"},
    {text: "Found: ", value: "found"},
];

var listInputs = [
    {id: "input-warn-list", label: "* Warn Lists: ", type: "search", listValue: listWarnList, textWhenValue: "fail", valueFormat: "Fail: {0}", listInput: ['Fail']},
    {id: "input-duplicate-list", label: "* Duplicates: ", type: "search", listValue: listDuplicateList, textWhenValue: "found", valueFormat: "Found: {0}", listInput: ['Found']},
    {id: "input-subvertical-list", label: "* Subvertical(s): ", type: "search", listValue: listSubverticalList, textWhenValue: null, valueFormat: "none", listInput: null},
    {id: "input-primary-website-provided-list", label: "* Primary Website Provided: ", type: "select", listValue: listPrimaryWebsiteProvidedList, textWhenValue: null, valueFormat: "none", listInput: null},
    {id: "input-domains-active-list", label: "* Domains Active: ", type: "search", listValue: listDomainsActiveList, textWhenValue: "no", valueFormat: "No - Broken ({0}); Parked ({1}); Invalid Format ({2})", listInput: ['Broken', 'Parked', 'Invalid Format']},
    {id: "input-domain-connections-list", label: "* Domain Connections: ", type: "search", listValue: listDomainConnectionsList, textWhenValue: "no", valueFormat: "No - Mismatching Name ({0})", listInput: ['Mismatching Name']},
    {id: "input-google-search-results-list", label: "* Google Search Results: ", type: "search", listValue: listGoogleSearchResultsList, textWhenValue: null, valueFormat: "none", listInput: null},
    {id: "input-fraud-indicators-list", label: "* Fraud Indicators: ", type: "search", listValue: listFraudIndicatorsList, textWhenValue: "found", valueFormat: "Found: {0}", listInput: ['Found']},
    {id: "input-additional-notes-additional-notes", label: "* Additional Notes: ", type: "text", listValue: null, textWhenValue: null},
];

var defaultFormValueWithFail = [
    {id: "input-warn-list", defaultValue: "Fail: "},
    {id: "input-duplicate-list", defaultValue: "Found: "},
    {id: "input-subvertical-list", defaultValue: "OOS"},
    {id: "input-primary-website-provided-list", defaultValue: "no"},
    {id: "input-domains-active-list", defaultValue: "No - Broken (); Parked (); Invalid Format ()"},
    {id: "input-domain-connections-list", defaultValue: "No - Mismatching Name ()"},
    {id: "input-google-search-results-list", defaultValue: "Fail"},
    {id: "input-fraud-indicators-list", defaultValue: "Found: "},
];

var defaultFormValueWithPass = [
    {id: "input-warn-list", defaultValue: "Clear"},
    {id: "input-duplicate-list", defaultValue: "Clear"},
    {id: "input-subvertical-list", defaultValue: "OOS"},
    {id: "input-primary-website-provided-list", defaultValue: "yes"},
    {id: "input-domains-active-list", defaultValue: "Yes"},
    {id: "input-domain-connections-list", defaultValue: "Yes"},
    {id: "input-google-search-results-list", defaultValue: "Pass"},
    {id: "input-fraud-indicators-list", defaultValue: "Clear"},
];

