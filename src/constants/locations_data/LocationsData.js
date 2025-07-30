import building from "@/assets/images/Locations/Seton/Building.webp";
import brentwood from "@/assets/images/Locations/Seton/brentwood.webp";
import sunridge from "@/assets/images/Locations/Seton/sunridge.webp";
import seton from "@/assets/images/Locations/Seton/seton.webp";
import royalOak from "@/assets/images/Locations/Seton/royal-oak.webp";
import post from "@/assets/images/Locations/Seton/post.webp";

// Default facility timings (fallback)
export const FACILITY_TIMINGS = [
  { day: "Monday", hours: "6:00 AM – 10:00 PM" },
  { day: "Tuesday", hours: "6:00 AM – 10:00 PM" },
  { day: "Wednesday", hours: "6:00 AM – 10:00 PM" },
  { day: "Thursday", hours: "6:00 AM – 10:00 PM" },
  { day: "Friday", hours: "6:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
];

export const LOCATIONS_DATA = {
  "calgary-seton": {
    name: "Calgary Seton",
    address: "# 710-19587 Seton Crescent SE, Calgary, AB T3M 2T5",
    city: "CALGARY",
    branch: "SETON",
    buildingImage: seton,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2110.878166746872!2d-113.96341762398467!3d50.88077737167751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53719d7a5b2d2335%3A0x7ec07ea84a295d7e!2s710-19587%20Seton%20Crescent%20SE%2C%20Calgary%2C%20AB%20T3M%202T5%2C%20Canada!5e1!3m2!1sen!2s!4v1753862805458!5m2!1sen!2s",
    timings: [
      { day: "Monday", hours: "5:00 AM – 10:00 PM" },
      { day: "Tuesday", hours: "5:00 AM – 10:00 PM" },
      { day: "Wednesday", hours: "5:00 AM – 10:00 PM" },
      { day: "Thursday", hours: "5:00 AM – 10:00 PM" },
      { day: "Friday", hours: "5:00 AM – 10:00 PM" },
      { day: "Saturday", hours: "7:00 AM – 8:00 PM" },
      { day: "Sunday", hours: "7:00 AM – 8:00 PM" },
    ],
  },
  "calgary-royal-oak": {
    name: "Calgary Royal Oak",
    address: "# 8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4",
    city: "CALGARY",
    branch: "ROYAL OAK",
    buildingImage: royalOak,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2098.5364773106708!2d-114.21797102396516!3d51.15268077173482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371685236f0c9b1%3A0xbd9eed18f8d5177e!2s8888%20Country%20Hills%20Blvd%20NW%20%23600%2C%20Calgary%2C%20AB%20T3G%200B6%2C%20Canada!5e1!3m2!1sen!2s!4v1753863030888!5m2!1sen!2s",
    timings: [
      { day: "Monday", hours: "6:00 AM – 10:00 PM" },
      { day: "Tuesday", hours: "6:00 AM – 10:00 PM" },
      { day: "Wednesday", hours: "6:00 AM – 10:00 PM" },
      { day: "Thursday", hours: "6:00 AM – 10:00 PM" },
      { day: "Friday", hours: "6:00 AM – 10:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
      { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
    ],
  },
  "calgary-sunridge": {
    name: "Calgary Sunridge",
    address: "# 2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3",
    city: "CALGARY",
    branch: "SUNRIDGE",
    buildingImage: sunridge,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2102.2379258409214!2d-113.996793123971!3d51.071242571717335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164da13c00001%3A0x112ca7ae770b7b1d!2sUnit%23125%2C%202985%2023%20Ave%20NE%20Unit%23125%2C%20Calgary%2C%20AB%20T1Y%207L3%2C%20Canada!5e1!3m2!1sen!2s!4v1753863330605!5m2!1sen!2s",
    timings: [
      { day: "Monday", hours: "6:00 AM – 10:00 PM" },
      { day: "Tuesday", hours: "6:00 AM – 10:00 PM" },
      { day: "Wednesday", hours: "6:00 AM – 10:00 PM" },
      { day: "Thursday", hours: "6:00 AM – 10:00 PM" },
      { day: "Friday", hours: "6:00 AM – 10:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
      { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
    ],
  },
  "edmonton-south": {
    name: "Edmonton South",
    address: "# 4825 89 St NW Edmonton, Alberta, T6E 5K1",
    city: "EDMONTON",
    branch: "SOUTH",
    buildingImage: building,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.7325563905!2d-113.46862111283077!3d53.48559170098502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a018c4054f1297%3A0xa329ad1a0327765b!2s4825%2089%20St%20NW%2C%20Edmonton%2C%20AB%20T6E%205K1%2C%20Canada!5e1!3m2!1sen!2s!4v1753863586335!5m2!1sen!2s",
    timings: [
      { day: "Monday", hours: "5:30 AM – 11:00 PM" },
      { day: "Tuesday", hours: "5:30 AM – 11:00 PM" },
      { day: "Wednesday", hours: "5:30 AM – 11:00 PM" },
      { day: "Thursday", hours: "5:30 AM – 11:00 PM" },
      { day: "Friday", hours: "5:30 AM – 11:00 PM" },
      { day: "Saturday", hours: "7:00 AM – 9:00 PM" },
      { day: "Sunday", hours: "7:00 AM – 9:00 PM" },
    ],
  },
  "edmonton-north": {
    name: "Edmonton North",
    address: "# 13457 149 St Edmonton, Alberta, T5L 2T3",
    city: "EDMONTON",
    branch: "NORTH",
    buildingImage: building,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1096646559804!2d-113.5838443237868!3d53.595841272362705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0241c856a7ae5%3A0xc06b088a81adcd9a!2s13457%20149%20St%2C%20Edmonton%2C%20AB%20T6V%200M9%2C%20Canada!5e1!3m2!1sen!2s!4v1753863684377!5m2!1sen!2s",
    timings: [
      { day: "Monday", hours: "5:30 AM – 11:00 PM" },
      { day: "Tuesday", hours: "5:30 AM – 11:00 PM" },
      { day: "Wednesday", hours: "5:30 AM – 11:00 PM" },
      { day: "Thursday", hours: "5:30 AM – 11:00 PM" },
      { day: "Friday", hours: "5:30 AM – 11:00 PM" },
      { day: "Saturday", hours: "7:00 AM – 9:00 PM" },
      { day: "Sunday", hours: "7:00 AM – 9:00 PM" },
    ],
  },
  "edmonton-downtown": {
    name: "Edmonton Downtown",
    address: "# 12328 102 ave nw Edmonton, Alberta, T5N 0L",
    city: "EDMONTON",
    branch: "DOWNTOWN",
    buildingImage: building,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.018168009521!2d-113.53806072379066!3d53.54340887234709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0222b0e9db099%3A0xa10e6e544e6b58f3!2s12328%20102%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5N%200L9%2C%20Canada!5e1!3m2!1sen!2s!4v1753863778575!5m2!1sen!2s",
    timings: [
      { day: "Monday", hours: "5:30 AM – 11:00 PM" },
      { day: "Tuesday", hours: "5:30 AM – 11:00 PM" },
      { day: "Wednesday", hours: "5:30 AM – 11:00 PM" },
      { day: "Thursday", hours: "5:30 AM – 11:00 PM" },
      { day: "Friday", hours: "5:30 AM – 11:00 PM" },
      { day: "Saturday", hours: "7:00 AM – 9:00 PM" },
      { day: "Sunday", hours: "7:00 AM – 9:00 PM" },
    ],
  },
  "burnaby-brentwood": {
    name: "Burnaby Brentwood",
    address: "1920 Willingdon Ave #3105 Burnaby, British Columbia",
    city: "BURNABY",
    branch: "BRENTWOOD",
    buildingImage: brentwood,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.1016174750234!2d-123.00539392409867!3d49.26786267139054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867731b5c77e21%3A0xb52f47dcaa6e1977!2s1920%20Willingdon%20Ave%2C%20Burnaby%2C%20BC%20V5C%200K5%2C%20Canada!5e1!3m2!1sen!2s!4v1753863881591!5m2!1sen!2s",
    timings: [
      { day: "Monday", hours: "5:00 AM – 10:30 PM" },
      { day: "Tuesday", hours: "5:00 AM – 10:30 PM" },
      { day: "Wednesday", hours: "5:00 AM – 10:30 PM" },
      { day: "Thursday", hours: "5:00 AM – 10:30 PM" },
      { day: "Friday", hours: "5:00 AM – 10:30 PM" },
      { day: "Saturday", hours: "7:30 AM – 08:00 PM" },
      { day: "Sunday", hours: "7:30 AM – 08:00 PM" },
    ],
  },
  "vancouver-post": {
    name: "Vancouver The Post",
    address: "# 658 Homer St Vancouver, British Columbia, V6B 2R4",
    city: "VANCOUVER",
    branch: "THE POST",
    buildingImage: post,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.528782875505!2d-123.11708122409782!3d49.280807471392556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717eb0d56c25%3A0x31bb22bac88c7315!2s658%20Homer%20St%2C%20Vancouver%2C%20BC%20V6B%202R4%2C%20Canada!5e1!3m2!1sen!2s!4v1753863979242!5m2!1sen!2s",
    timings: [
      { day: "Monday", hours: "6:00 AM – 10:00 PM" },
      { day: "Tuesday", hours: "6:00 AM – 10:00 PM" },
      { day: "Wednesday", hours: "6:00 AM – 10:00 PM" },
      { day: "Thursday", hours: "6:00 AM – 10:00 PM" },
      { day: "Friday", hours: "6:00 AM – 10:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
      { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
    ],
  },
};
