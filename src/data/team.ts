import musaImg from '@/assets/team/musa-kabiru-paul.jpg';
import jamesImg from '@/assets/team/james-lawal-enesi.jpg';

export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  institution: string;
  bio?: string;
  details?: string[];
  contact?: {
    email: string;
    phone: string;
  };
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'musa-kabiru-paul',
    name: "Musa Kabiru Paul",
    role: "CEO/Founder",
    institution: "EqualRights Educational Services, Gwagwalada Abuja. Former HOD/Lecturer, Institute of Ecumenical Education, Enugu State.",
    bio: "Former HOD/Lecturer, Institute of Ecumenical Education, Enugu State. A visionary leader dedicated to transforming the educational landscape in Nigeria.",
    details: [
      "Experienced Educational Administrator",
      "Expert in Curriculum Development",
      "Advocate for Educational Equality",
      "Career Mentor",
      "Technical Support",
      "Quality Assurance Evaluator",
      "Social Crusader",
      "Motivational Speaker"
    ],
    contact: {
      email: "equalrightseducationalservices@gmail.com",
      phone: "07034723374"
    },
    image: musaImg
  },
  {
    id: 'dr-omachi-daniel',
    name: "Dr. Omachi Daniel",
    role: "Provost",
    institution: "Elyland Prestigious Citadel of Learning, Ankpa Kogi State. Faculty of Education, Godfrey Okoye University, Enugu State.",
    bio: "Faculty of Education, Godfrey Okoye University, Enugu State. A distinguished academic with a passion for teacher training and educational research.",
    details: [
      "PhD in Education",
      "Published Researcher",
      "Teacher Training Specialist"
    ]
  },
  {
    id: 'dr-martha-steven-kadiri',
    name: "Dr. Martha Steven-Kadiri",
    role: "Team Leader",
    institution: "University of Port-Harcourt, Rivers State.",
    bio: "An experienced educator and administrator contributing to the strategic direction of EqualRights Educational Services.",
    details: [
      "University Lecturer",
      "Educational Consultant"
    ]
  },
  {
    id: 'hon-timothy-adidi',
    name: "Hon. Timothy Adidi D.",
    role: "Team Leader",
    institution: "Veritas University Abuja.",
    bio: "Bringing academic rigor and administrative expertise to the team.",
    details: [
      "Academic Leader",
      "Policy Advisor"
    ]
  },
  {
    id: 'dr-gabriel-itumar',
    name: "Dr. Gabriel Itumar",
    role: "Team Leader",
    institution: "Salem University Lokoja, Kogi State.",
    bio: "Contributing expertise in higher education management and quality assurance.",
    details: [
      "Higher Education Expert",
      "Quality Assurance Specialist"
    ]
  },
  {
    id: 'hon-patrick-silver',
    name: "Hon. Patrick Silver",
    role: "Former Lecturer",
    institution: "University of Calabar, Cross Rivers State. Currently Based in USA.",
    bio: "Bringing international perspective and experience to the organization.",
    details: [
      "International Education",
      "Cross-cultural Communication"
    ]
  },
  {
    id: 'hon-yakubu-ismila',
    name: "Hon. Yakubu Ismila",
    role: "Doctoral Student",
    institution: "London UK",
    bio: "Currently pursuing advanced studies in education, bringing fresh insights and global best practices.",
    details: [
      "Educational Research",
      "Global Education Trends"
    ]
  },
  {
    id: 'hon-alex-ohikere',
    name: "Hon. Alex Ohikere",
    role: "Former Lecturer",
    institution: "Federal Polytechnic Keffi Nasarawa State. Former Supervising Councilor for Education, Adavi Local Government Area Kogi State.",
    bio: "Former Supervising Councilor for Education, Adavi Local Government Area Kogi State. Experienced in both academic and government educational sectors.",
    details: [
      "Public Administration",
      "Educational Policy"
    ]
  },
  {
    id: 'hon-nsemeke-vincent',
    name: "Hon. Nsemeke Vincent",
    role: "Security Personnel",
    institution: "Gwagwalada Abuja.",
    bio: "Ensuring the safety and security of our educational environment.",
    details: [
      "Security Management",
      "Safety Protocols"
    ]
  },
  {
    id: 'mr-simeon-araga',
    name: "Mr. Simeon Araga",
    role: "Lecturer",
    institution: "Federal University Of Technology, Minna Niger State.",
    bio: "An academic committed to student success and research excellence.",
    details: [
      "University Teaching",
      "Student Mentorship"
    ]
  },
  {
    id: 'engr-mark-araga',
    name: "Engr. Mark Araga",
    role: "Operational Manager",
    institution: "AMSO Hotel Abuja.",
    bio: "Managing operations and logistics to ensure smooth service delivery.",
    details: [
      "Operations Management",
      "Logistics"
    ]
  },
  {
    id: 'mr-james-lawal-enesi',
    name: "Mr. James Lawal Enesi",
    role: "Managing Director",
    institution: "EqualRight Computer Institute, Gwagwalada Abuja.",
    bio: "Leading the technology and computer literacy initiatives.",
    details: [
      "IT Management",
      "Computer Education",
      "Software Developer",
      "Student Mentorship",
      "Technical Support"
    ],
    contact: {
      email: "developer.jasgitcodes@gmail.com",
      phone: "09033450242"
    },
    image: jamesImg
  }
];
