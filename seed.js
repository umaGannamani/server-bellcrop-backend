require("dotenv").config();
const mongoose = require("mongoose");
const Event = require("./models/Event");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for Seeding"))
  .catch(err => console.log(err));

const events = [
  {
    name: "Tech Innovators Summit",
    organizer: "Bellcorp Studio",
    location: "Mumbai",
    date: new Date("2026-05-10T10:00:00"),
    description: "A conference on emerging technologies and AI.",
    capacity: 200,
    availableSeats: 200,
    category: "Technology"
  },
  {
    name: "Startup Pitch Fest",
    organizer: "Startup Hub",
    location: "Bangalore",
    date: new Date("2026-06-15T14:00:00"),
    description: "Pitch your startup ideas to investors.",
    capacity: 150,
    availableSeats: 150,
    category: "Business"
  },
  {
    name: "Digital Marketing Workshop",
    organizer: "MarketPro",
    location: "Delhi",
    date: new Date("2026-04-20T09:00:00"),
    description: "Hands-on digital marketing strategies.",
    capacity: 100,
    availableSeats: 100,
    category: "Marketing"
  },
  {
    name: "Music Fiesta 2026",
    organizer: "LiveNation",
    location: "Hyderabad",
    date: new Date("2026-07-12T18:00:00"),
    description: "Live music festival featuring top artists.",
    capacity: 500,
    availableSeats: 500,
    category: "Entertainment"
  },
  {
    name: "Data Science Bootcamp",
    organizer: "DataWorld",
    location: "Pune",
    date: new Date("2026-08-01T10:00:00"),
    description: "Intensive 3-day data science training.",
    capacity: 80,
    availableSeats: 80,
    category: "Technology"
  },
  {
    name: "Yoga & Wellness Retreat",
    organizer: "HealthyLife",
    location: "Goa",
    date: new Date("2026-03-25T07:00:00"),
    description: "Relax and rejuvenate with yoga sessions.",
    capacity: 60,
    availableSeats: 60,
    category: "Health"
  },
  {
    name: "AI & ML Conference",
    organizer: "TechFuture",
    location: "Chennai",
    date: new Date("2026-09-18T09:30:00"),
    description: "Explore artificial intelligence advancements.",
    capacity: 250,
    availableSeats: 250,
    category: "Technology"
  },
  {
    name: "Photography Masterclass",
    organizer: "PhotoPro",
    location: "Kolkata",
    date: new Date("2026-05-05T11:00:00"),
    description: "Learn advanced photography techniques.",
    capacity: 40,
    availableSeats: 40,
    category: "Art"
  },
  {
    name: "Fitness Marathon",
    organizer: "FitIndia",
    location: "Ahmedabad",
    date: new Date("2026-11-10T06:00:00"),
    description: "Annual city marathon event.",
    capacity: 1000,
    availableSeats: 1000,
    category: "Health"
  },
  {
    name: "Blockchain Expo",
    organizer: "CryptoWorld",
    location: "Mumbai",
    date: new Date("2026-10-15T10:00:00"),
    description: "Blockchain and Web3 innovations.",
    capacity: 300,
    availableSeats: 300,
    category: "Technology"
  },

  // 10 more

  {
    name: "Women Leadership Summit",
    organizer: "EmpowerHer",
    location: "Delhi",
    date: new Date("2026-04-28T10:00:00"),
    description: "Empowering women leaders.",
    capacity: 120,
    availableSeats: 120,
    category: "Business"
  },
  {
    name: "Food Carnival",
    organizer: "TasteIndia",
    location: "Lucknow",
    date: new Date("2026-06-01T12:00:00"),
    description: "Street food festival.",
    capacity: 400,
    availableSeats: 400,
    category: "Food"
  },
  {
    name: "Cybersecurity Workshop",
    organizer: "SecureTech",
    location: "Bangalore",
    date: new Date("2026-05-22T09:00:00"),
    description: "Learn ethical hacking basics.",
    capacity: 90,
    availableSeats: 90,
    category: "Technology"
  },
  {
    name: "Film Making Seminar",
    organizer: "CinemaHub",
    location: "Mumbai",
    date: new Date("2026-07-30T11:00:00"),
    description: "Basics of filmmaking.",
    capacity: 70,
    availableSeats: 70,
    category: "Entertainment"
  },
  {
    name: "Finance & Investment Talk",
    organizer: "MoneyMatters",
    location: "Chandigarh",
    date: new Date("2026-03-18T15:00:00"),
    description: "Investment strategies for 2026.",
    capacity: 110,
    availableSeats: 110,
    category: "Finance"
  },
  {
    name: "Robotics Expo",
    organizer: "FutureBots",
    location: "Hyderabad",
    date: new Date("2026-09-05T10:00:00"),
    description: "Robotics innovations showcase.",
    capacity: 350,
    availableSeats: 350,
    category: "Technology"
  },
  {
    name: "Creative Writing Workshop",
    organizer: "LitClub",
    location: "Kochi",
    date: new Date("2026-04-10T10:00:00"),
    description: "Improve your storytelling skills.",
    capacity: 50,
    availableSeats: 50,
    category: "Art"
  },
  {
    name: "E-Commerce Growth Meetup",
    organizer: "ShopMaster",
    location: "Surat",
    date: new Date("2026-08-20T14:00:00"),
    description: "Scaling your online business.",
    capacity: 130,
    availableSeats: 130,
    category: "Business"
  },
  {
    name: "Gaming Tournament",
    organizer: "GameZone",
    location: "Delhi",
    date: new Date("2026-12-01T16:00:00"),
    description: "Esports championship.",
    capacity: 600,
    availableSeats: 600,
    category: "Entertainment"
  },
  {
    name: "Climate Change Awareness",
    organizer: "GreenEarth",
    location: "Jaipur",
    date: new Date("2026-05-14T09:00:00"),
    description: "Environmental sustainability seminar.",
    capacity: 200,
    availableSeats: 200,
    category: "Environment"
  }
];

const seedData = async () => {
  try {
    await Event.deleteMany();
    await Event.insertMany(events);
    console.log("✅ 20 Events Inserted Successfully!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedData();
