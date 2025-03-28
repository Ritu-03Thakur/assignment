const SelectOptions = [
  {
    id: "S01",
    option: "Start",
  },
  {
    id: "S02",
    option: "Select Actions",
  },
  {
    id: "S03",
    option: "Link AWS A/C",
  },
  {
    id: "S04",
    option: "Fetch",
  },
];

const SavingActions = [
  {
    id: "SA01",
    option: "Start Stop Resource",
    nextOptions: ["EC2", "RDS", "LightSail ", "Amazon Neptune"],
  },
  {
    id: "SA02",
    option: "Pause-Resume Resources",
    nextOptions: ["Redshift Clusters", "Aurora Serverless V2"],
  },
  {
    id: "SA03",
    option: "Resource Cleanup",
    nextOptions: [
      "Terminal EC2",
      "Delete EBS Volume",
      "LightSail ",
      "Delete EBS Snapshot",
      " Delete RDS",
      "Delete RDS Snapshot",
    ],
  },
];


const JamPolicyData = [
  {
    id: "J01",
    policy : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
     nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
     nisi ut aliquip ex ea commodo consequat. `,
  } , 
  {
    id: "J02",
    policy : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
     nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: "J03",
      policy : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
     nisi ut aliquip ex ea commodo consequat. `,
      },
]

export { SelectOptions, SavingActions , JamPolicyData };
