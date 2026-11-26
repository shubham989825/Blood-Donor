
export interface Donor {
  id: number;
  name: string;
  bloodGroup: string;
  city: string;
  state: string;
  distance: string;
  available: boolean;
  lastDonation: string;
  phone: string;
  email: string;
}

export const donors: Donor[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    bloodGroup: "A+",
    city: "Bhopal",
    state: "Madhya Pradesh",
    distance: "2 km",
    available: true,
    lastDonation: "6 months ago",
    phone: "9876543210",
    email: "rahul@example.com",
  },
  {
    id: 2,
    name: "Aman Verma",
    bloodGroup: "B+",
    city: "Bhopal",
    state: "Madhya Pradesh",
    distance: "4 km",
    available: true,
    lastDonation: "8 months ago",
    phone: "9876543211",
    email: "aman@example.com",
  },
  {
    id: 3,
    name: "Priya Singh",
    bloodGroup: "O+",
    city: "Indore",
    state: "Madhya Pradesh",
    distance: "5 km",
    available: false,
    lastDonation: "2 months ago",
    phone: "9876543212",
    email: "priya@example.com",
  },
  {
    id: 4,
    name: "Vikas Patel",
    bloodGroup: "A+",
    city: "Bhopal",
    state: "Madhya Pradesh",
    distance: "7 km",
    available: true,
    lastDonation: "9 months ago",
    phone: "9876543213",
    email: "vikas@example.com",
  },
  {
    id: 5,
    name: "Neha Gupta",
    bloodGroup: "AB+",
    city: "Bhopal",
    state: "Madhya Pradesh",
    distance: "8 km",
    available: true,
    lastDonation: "1 year ago",
    phone: "9876543214",
    email: "neha@example.com",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    bloodGroup: "B+",
    city: "Indore",
    state: "Madhya Pradesh",
    distance: "3 km",
    available: true,
    lastDonation: "7 months ago",
    phone: "9876543215",
    email: "arjun@example.com",
  },
];

