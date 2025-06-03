
export const companyData = {
  name: "Ridge Line Energy Ltd.",
  establishedYear: "2017 (2074 B.S.)",
  description: "Ridge Line Energy Ltd. (RLE) is a forward-looking renewable energy company established in 2074 B.S. (2017 A.D.), committed to developing Nepal's hydropower potential sustainably and responsibly. Led by a dynamic team of young, competent board members and supported by experienced technical and managerial professionals, RLE specializes in the design, construction, and operation of hydropower projects.",
  mission: "To build efficient hydropower plants, support sustainability, empower communities, and uphold transparency.",
  vision: "To be a trusted leader in Nepal's renewable energy sector.",
  coreValues: [
    "Integrity",
    "Sustainability", 
    "Innovation",
    "Collaboration"
  ],
  tagline: "Powering progress—one river at a time.",
  stats: {
    totalCapacity: "37.9 MW",
    projectsInvested: 3,
    yearsExperience: 7,
    communityProjects: 15
  }
};

export const projectsData = [
  {
    id: 1,
    name: "Super Chepe Hydropower Project",
    capacity: "9.05 MW",
    type: "Run of River (RoR)",
    status: "Under Construction",
    location: "Gorkha District",
    description: "Our flagship project demonstrating technical excellence and environmental responsibility.",
    features: [
      "Advanced turbine technology",
      "Minimal environmental impact",
      "Community benefit programs",
      "Grid stability enhancement"
    ]
  },
  {
    id: 2,
    name: "Doodhpokhari Chepe Hydropower Project",
    capacity: "11 MW",
    type: "Run of River (RoR)",
    status: "Under Construction",
    location: "Ajirkot Rural Municipality, Gorkha & Lamjung District",
    river: "Chepe Khola",
    coordinates: {
      latitude: "28°15'02\" N to 28°16'52\" N",
      longitude: "84°38'30\" E to 84°40'25\" E"
    },
    hydrology: {
      catchmentAreaIntake: "31.64 km²",
      catchmentAreaPowerhouse: "44.50 km²",
      designDischarge: "1.50 m³/s",
      longTermAverageFlow: "3.05 m³/s"
    },
    technicalSpecs: {
      grossHead: "883 m",
      netHead: "847.07 m",
      turbineType: "Horizontal Pelton",
      numberOfUnits: 2,
      ratedOutputCapacity: "5730 kW per unit",
      efficiency: "91.00%"
    },
    projectCost: "NRs 2,183,301,531.00 (with IDC)",
    irr: "17.21%",
    bcRatio: "1.54",
    paybackPeriod: "5.51 years",
    constructionPeriod: "24 months",
    energyGeneration: {
      drySeasonEnergy: "23.90 GWh",
      wetSeasonEnergy: "45.44 GWh",
      totalEnergy: "69.34 GWh"
    },
    accessibility: [
      "Kalanki to Abukhaireni – 113 km (Prithvi Highway)",
      "Abukhaireni Bazar – Sirandadha – Headworks: 78 km",
      "Sirandadha – Olang Road: 9 km (complete)",
      "Olang – Powerhouse: 4 km (complete)",
      "Powerhouse – Headworks: 12 km (complete)"
    ]
  },
  {
    id: 3,
    name: "Upper Maiwa Khola Hydropower Project",
    capacity: "17.85 MW",
    type: "Run of River (RoR)",
    status: "Development Phase",
    location: "Taplejung District, Koshi Province",
    river: "Maiwa Khola",
    developer: "Kang Hydropower Co. Ltd. (KHCL)",
    contractor: "Samyak Engineering Pvt. Ltd (SEPL)",
    technicalSpecs: {
      grossNaturalHead: "515.00 m",
      designDischarge: "4.19 m³/s",
      installedCapacity: "17.85 MW"
    },
    projectComponents: {
      headworks: "Left bank of Maiwa Khola (Khuwagu village)",
      powerhouse: "Right bank of Maiwa Khola (Kharte village)",
      transmissionLine: "4.036 km single circuit 132 kV to Dhungesangu substation"
    },
    description: "A strategic project utilizing the natural head and flow of Maiwa Khola for optimal power generation."
  }
];

export const newsData = [
  {
    id: 1,
    title: "Super Chepe Hydropower Project Achieves Major Milestone",
    date: "2024-05-15",
    category: "Project Update",
    content: "Construction progress reaches 75% completion with successful installation of main turbine units."
  },
  {
    id: 2,
    title: "Ridge Line Energy Signs MOU with Local Communities",
    date: "2024-05-10",
    category: "Community Relations",
    content: "Partnership agreement ensures sustainable development and community benefit sharing programs."
  },
  {
    id: 3,
    title: "Doodhpokhari Chepe Project Environmental Clearance Approved",
    date: "2024-05-05",
    category: "Regulatory",
    content: "Project receives final environmental clearance, paving way for accelerated construction activities."
  }
];
