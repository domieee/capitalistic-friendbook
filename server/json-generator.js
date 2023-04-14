// Code to generate data set at: https://json-generator.com

JG.repeat(200, 250, {
    id: JG.objectId(),
    email() {
        return (
            _.snakeCase(this.profile.firstName) +
            '@' +
            this.profile.company +
            JG.domainZone()
        ).toLowerCase();
    },
    tel: '+' + JG.integer(20, 49) +
        ' ' + JG.integer(100, 999) + ' ' +
        JG.integer(100, 999) + ' ' +
        JG.integer(1000, 9999),
    profile: {
        age: JG.integer(21, 55),
        gender: JG.random('male', 'female', 'diverse'),
        firstName: JG.firstName(this.gender),
        lastName: JG.lastName(),
        avatar: `https://robohash.org/${JG.loremIpsum({ units: 'words', count: 1 })}`,
        company: JG.random("Adobe", "Airbnb", "Alibaba Group", "Amazon", "Apple", "Atlassian", "Baidu", "Bitdefender", "BlackBerry", "Box", "Cisco Systems", "Citrix Systems", "Cloudera", "Cloudflare", "Coinbase", "Cognizant", "Dell Technologies", "DocuSign", "Dropbox", "eBay", "Electronic Arts", "Ericsson", "Facebook", "F5 Networks", "Fitbit", "Flipkart", "Fujitsu", "Garmin", "GoDaddy", "Google", "Groupon", "HCL Technologies", "Hewlett Packard Enterprise", "Hitachi", "HP Inc.", "HTC", "IBM", "Infosys", "Intel", "Intuit", "Juniper Networks", "Lenovo", "LG Electronics", "Logitech", "Lyft", "Mcafee", "Microsoft", "Motorola Solutions", "Naver", "Netflix", "Nokia", "Nvidia", "Oracle", "Palo Alto Networks", "PayPal", "Pegasystems", "Philips", "Pinterest", "Qualcomm", "Red Hat", "Salesforce", "Samsung Electronics", "SAP", "Seagate Technology", "ServiceNow", "Slack Technologies", "Snap", "SoftBank Group", "Sony", "Square", "Symantec", "T-Mobile US", "Tata Consultancy Services", "Tencent Holdings", "Tesla", "Texas Instruments", "T-Mobile US", "TikTok", "Toshiba", "Uber Technologies", "Veeva Systems", "Verizon Communications", "VMware", "Walmart", "Western Digital", "Workday", "WPP", "Xiaomi", "Yahoo", "Yelp", "Zoom Video Communications"),
        dob: moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('DD/MM/YYYY'),
        address: {
            city: JG.city(),
            street: JG.street(),
            number: JG.integer(1, 132)
        },
        about: JG.loremIpsum({ units: 'sentences', count: 2 }),
        softSkills: JG.repeat(JG.integer(5, 7), JG.random("Strategic thinking", "Data analysis", "Marketing", "Sales", "Negotiation", "Leadership", "Project management", "Financial management", "Time management", "Communication", "Decision-making", "Risk management", "Problem-solving", "Customer service", "Networking", "Innovation", "Emotional intelligence", "Adaptability", "Conflict resolution", "Teamwork", "Research", "Public speaking", "Product development", "Operations management", "Supply chain management", "Human resources management", "IT management", "Business writing", "Creativity", "Entrepreneurship", "Analytics", "Industry knowledge")),
        hardSkills: JG.repeat(JG.integer(5, 7), JG.random("Programming", "Web Development", "Mobile App Development", "Database Management", "Cloud Computing", "Data Analysis", "Machine Learning", "Artificial Intelligence", "Cybersecurity", "DevOps", "Network Administration", "Virtualization", "Containerization", "UI/UX Design", "Agile Methodology", "Project Management", "Technical Writing", "Automation Testing", "Big Data Analytics", "Blockchain Development", "IoT Development", "Video Editing", "Graphic Design"))
    },
    selfEmployed: JG.bool(),
    monthlySalary: numeral(JG.floating(4000, 9999, 2)).format('$0,0.00'),
    workedWith: JG.bool(),
});

