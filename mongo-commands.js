db.users.insertMany([
  {
    _id: "63dvd28201c7b558s5g545c1",
    "user name": "Prasanth",
    topics: "HTML & CSS",
    tasks: "Web Page",
    date: "10-Oct-2020",
    "appeared for the placement": "yes",
    companies: [
      {
        name: "TCS",
        date: "11-Oct-2020",
      },
      {
        name: "CTS",
        date: "13-Oct-2020",
      },
      {
        name: "WIPRO",
        date: "15-Oct-2020",
      },
    ],
    codekata: 124,
    attendance: "p",
    isTaskSubmitted: "yes",
    "Submisstion Date": "22-Oct-2020",
  },
  {
    _id: "63dvd28201c7b558s5g545c2",
    "user name": "Ranjeeth",
    topics: "Bootstrap",
    tasks: "NavBar",
    date: "11-Oct-2020",
    "appeared for the placement": "yes",
    companies: [
      {
        name: "Infosys",
        date: "25-Oct-2020",
      },
      {
        name: "Capgemini",
        date: "16-Oct-2020",
      },
      {
        name: "WIPRO",
        date: "15-Oct-2020",
      },
    ],
    codekata: 89,
    attendance: "p",
    isTaskSubmitted: "yes",
    "Submisstion Date": "15-Oct-2020",
  },
  {
    _id: "63dvd28201c7b558s5g5451a",
    "user name": "Gokul",
    topics: "Javascript",
    tasks: "Youtube",
    date: "15-Oct-2020",
    "appeared for the placement": "yes",
    companies: [
      {
        name: "Capgemini",
        date: "16-Oct-2020",
      },
      {
        name: "CTS",
        date: "13-Oct-2020",
      },
      {
        name: "Google",
        date: "20-Oct-2020",
      },
    ],
    codekata: 198,
    attendance: "p",
    isTaskSubmitted: "yes",
    "Submisstion Date": "28-Oct-2020",
  },
  {
    _id: "63dvd28201c7b558s5g5451a",
    "user name": "Velliyangiri",
    topics: "React",
    tasks: "SB Admin Page",
    date: "13-Oct-2020",
    "appeared for the placement": "yes",
    companies: [
      {
        name: "Accenture",
        date: "18-Oct-2020",
      },
      {
        name: "CTS",
        date: "13-Oct-2020",
      },
      {
        name: "Google",
        date: "20-Oct-2020",
      },
    ],
    codekata: 95,
    attendance: "p",
    isTaskSubmitted: "yes",
    "Submisstion Date": "14-Oct-2020",
  },
  {
    _id: "63dvd28201c7b558s5g5451a",
    "user name": "Karthick",
    topics: "Node JS",
    tasks: "Zen Class Data",
    date: "19-Oct-2020",
    "appeared for the placement": "yes",
    companies: [
      {
        name: "Infosys",
        date: "25-Oct-2020",
      },
      {
        name: "TCS",
        date: "11-Oct-2020",
      },
      {
        name: "WIPRO",
        date: "15-Oct-2020",
      },
    ],
    codekata: 135,
    attendance: "p",
    isTaskSubmitted: "yes",
    "Submisstion Date": "22-Oct-2020",
  },
  {
    _id: "63dvd28201c7b558s5g5451a",
    "user name": "Mathan",
    topics: "MongoDB",
    tasks: "Database CRUD",
    date: "19-Oct-2020",
    "appeared for the placement": "yes",
    companies: [
      {
        name: "Infosys",
        date: "25-Oct-2020",
      },
      {
        name: "TCS",
        date: "11-Oct-2020",
      },
      {
        name: "WIPRO",
        date: "15-Oct-2020",
      },
    ],
    codekata: 122,
    attendance: "p",
    isTaskSubmitted: "yes",
    "Submisstion Date": "21-Oct-2020",
  },
  {
    _id: "63dvd28201c7b558s5g5451a",
    "user name": "Anand",
    topics: "Express JS",
    tasks: "Gmail Backend",
    date: "20-Oct-2020",
    "appeared for the placement": "yes",
    companies: [
      {
        name: "Google",
        date: "20-Oct-2020",
      },
      {
        name: "CTS",
        date: "13-Oct-2020",
      },
      {
        name: "WIPRO",
        date: "15-Oct-2020",
      },
    ],
    codekata: 144,
    attendance: "p",
    isTaskSubmitted: "yes",
    "Submisstion Date": "25-Oct-2020",
  },
  {
    _id: "63dvd28201c7b558s5g5451a",
    "user name": "Pravin",
    topics: "AWS",
    tasks: "AWS",
    date: "21-Oct-2020",
    "appeared for the placement": "no",
    companies: [],
    codekata: 25,
    attendance: "a",
    isTaskSubmitted: "no",
    "Submisstion Date": "",
  },
]);
//1. Find all the topics and tasks which are thought in the month of October
db.users
  .find({
    date: "October",
  })
  .pretty();

// 3. Find all the company drives and students who are appeared for the placement
db.users.find({ "appeared for the placement": "yes" }).pretty();

//4. Find the number of problems solved by the user in codekata
db.users.find({ codeKata: { $gt: 0 } }).pretty();

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.users
  .find({
    date: { $gte: "15-Oct-2020", $lte: "31-Oct-2020" },
    attendance: "a",
    isTaskSubmitted: "no",
  })
  .pretty();
// company data

db.company.insertMany([
  {
    _id: "65fdg28201c7b558s5g54510",
    company: "TCS",
    "date of visit": "11-Oct-2020",
  },
  {
    _id: "65fdg28201c7b558s5g54511",
    company: "CTS",
    "date of visit": "13-Oct-2020",
  },
  {
    _id: "65fdg28201c7b558s5g54512",
    company: "Wipro",
    "date of visit": "15-Oct-2020",
  },
  {
    _id: "65fdg28201c7b558s5g54513",
    company: "Capgemini",
    "date of visit": "16-Oct-2020",
  },
  {
    _id: "65fdg28201c7b558s5g54514",
    company: "Accenture",
    "date of visit": "18-Oct-2020",
  },
  {
    _id: "65fdg28201c7b558s5g54515",
    company: "Google",
    "date of visit": "20-Oct-2020",
  },
  {
    _id: "65fdg28201c7b558s5g54516",
    company: "Infosys",
    "date of visit": "25-Oct-2020",
  },
]);

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company
  .find({
    "date of visit": {
      $gte: new Date("2020-10-15"),
      $lte: new Date("2020-10-31"),
    },
  })
  .pretty();

//mentors data
db.mentors.insertMany([
  {
    _id: "12341z",
    "Mentor Name": "sendhil",
    "No of Mentee's": "28",
  },
  {
    _id: "12342b",
    "Mentor Name": "kumar",
    "No of Mentee's": "38",
  },
  {
    _id: "12343c",
    "Mentor Name": "Gopi",
    "No of Mentee's": "48",
  },
  {
    _id: "12344d",
    "Mentor Name": "kavin",
    "No of Mentee's": "55",
  },
  {
    _id: "12345e",
    "Mentor Name": "gobi",
    "No of Mentee's": "42",
  },
  {
    _id: "12346f",
    "Mentor Name": "sasi",
    "No of Mentee's": "07",
  },
]);
//5. Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ "No of Mentee's": { $gt: 15 } });
