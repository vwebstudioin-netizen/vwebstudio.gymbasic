// ============================================================
// Site Configuration & Content Data
// All text, images, and settings in one place for easy editing
// ============================================================

// ---- Site Config ----
export const siteConfig = {
  name: 'IronForge Fitness',
  tagline: 'Forge Your Strongest Self',
  description:
    'Premium gym & fitness studio offering strength training, HIIT, yoga, CrossFit, and personal coaching. Based in Pune, India.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ironforge-fitness.vercel.app',
  email: 'info@ironforge.fit',
  phone: '+91 98765 12345',
  address: 'Ground Floor, Pinnacle Tower, Koregaon Park, Pune 411001',
  hours: 'Mon – Sat: 5 AM – 10 PM | Sun: 7 AM – 2 PM',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.89!3d18.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzQ4LjAiTiA3M8KwNTMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1',
  socialLinks: {
    instagram: 'https://instagram.com/ironforgefit',
    facebook: 'https://facebook.com/ironforgefit',
    twitter: 'https://twitter.com/ironforgefit',
    youtube: 'https://youtube.com/@ironforgefit',
  },
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};

// ---- Hero Slides ----
export const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
    title: 'Push Your Limits',
    subtitle: 'Strength Training',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80',
    title: 'Burn. Build. Repeat.',
    subtitle: 'High Intensity Interval Training',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&q=80',
    title: 'Find Your Balance',
    subtitle: 'Yoga & Flexibility',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80',
    title: 'Compete With Yourself',
    subtitle: 'CrossFit & Functional',
  },
];

// ---- Program Categories ----
export const programCategories = ['All', 'Strength', 'Cardio', 'HIIT', 'Yoga', 'CrossFit', 'Zumba'];

// ---- Program Classes ----
export const programClasses = [
  // Strength
  {
    id: 1,
    name: 'Power Lifting',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=800&q=80',
    difficulty: 'Advanced',
    duration: '60 min',
    calories: '400–600',
    trainer: 'Coach Raj',
    schedule: 'Mon, Wed, Fri — 6:00 AM',
    description: 'Master the squat, bench press, and deadlift with progressive overload programming. Designed for serious lifters looking to build raw strength and power.',
  },
  {
    id: 2,
    name: 'Muscle Hypertrophy',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    difficulty: 'Intermediate',
    duration: '50 min',
    calories: '350–500',
    trainer: 'Coach Priya',
    schedule: 'Tue, Thu, Sat — 7:00 AM',
    description: 'Focused on muscle growth through high-volume training, time under tension, and controlled movements. Perfect for body composition goals.',
  },
  {
    id: 3,
    name: 'Strength Foundations',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80',
    difficulty: 'Beginner',
    duration: '45 min',
    calories: '250–400',
    trainer: 'Coach Raj',
    schedule: 'Mon, Wed, Fri — 8:00 AM',
    description: 'Learn proper form and foundational movements. Ideal for beginners starting their strength journey with guided compound exercises.',
  },
  // Cardio
  {
    id: 4,
    name: 'Treadmill Blast',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80',
    difficulty: 'Beginner',
    duration: '40 min',
    calories: '300–450',
    trainer: 'Coach Meera',
    schedule: 'Mon – Fri — 6:30 AM',
    description: 'Structured treadmill workouts with intervals of walking, jogging, and sprinting. Great for building cardiovascular endurance.',
  },
  {
    id: 5,
    name: 'Indoor Cycling',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    difficulty: 'Intermediate',
    duration: '45 min',
    calories: '400–600',
    trainer: 'Coach Vikram',
    schedule: 'Tue, Thu, Sat — 6:00 AM',
    description: 'High-energy spin class with hill climbs, sprints, and endurance rides. Set to motivating playlists for a full-body cardio burn.',
  },
  // HIIT
  {
    id: 6,
    name: 'Tabata Fire',
    category: 'HIIT',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&q=80',
    difficulty: 'Advanced',
    duration: '30 min',
    calories: '350–500',
    trainer: 'Coach Priya',
    schedule: 'Mon, Wed, Fri — 5:30 PM',
    description: '20 seconds on, 10 seconds off — the ultimate fat-burning protocol. Intense full-body movements that torch calories long after the session ends.',
  },
  {
    id: 7,
    name: 'HIIT Circuit',
    category: 'HIIT',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80',
    difficulty: 'Intermediate',
    duration: '40 min',
    calories: '400–550',
    trainer: 'Coach Vikram',
    schedule: 'Tue, Thu — 6:00 PM',
    description: 'Rotating stations of bodyweight and weighted exercises designed to spike your heart rate and build lean muscle simultaneously.',
  },
  // Yoga
  {
    id: 8,
    name: 'Power Yoga',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    difficulty: 'Intermediate',
    duration: '60 min',
    calories: '200–350',
    trainer: 'Coach Ananya',
    schedule: 'Mon, Wed, Fri — 7:00 AM',
    description: 'A dynamic, strength-building yoga practice that flows through challenging poses. Improves flexibility, balance, and mental focus.',
  },
  {
    id: 9,
    name: 'Gentle Flow',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    difficulty: 'Beginner',
    duration: '50 min',
    calories: '150–250',
    trainer: 'Coach Ananya',
    schedule: 'Tue, Thu, Sat — 7:30 AM',
    description: 'A calming, restorative yoga class focusing on deep stretches, breathwork, and mindfulness. Perfect for recovery days and stress relief.',
  },
  // CrossFit
  {
    id: 10,
    name: 'WOD Warriors',
    category: 'CrossFit',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
    difficulty: 'Advanced',
    duration: '50 min',
    calories: '500–700',
    trainer: 'Coach Raj',
    schedule: 'Mon – Sat — 5:00 AM',
    description: 'Daily changing Workout of the Day combining Olympic lifts, gymnastics, and metabolic conditioning. For those who thrive on competition.',
  },
  {
    id: 11,
    name: 'CrossFit Basics',
    category: 'CrossFit',
    image: 'https://images.unsplash.com/photo-1533681904393-9ab6ebed60d8?w=800&q=80',
    difficulty: 'Beginner',
    duration: '45 min',
    calories: '350–500',
    trainer: 'Coach Vikram',
    schedule: 'Mon, Wed, Fri — 9:00 AM',
    description: 'Learn the fundamental CrossFit movements with an emphasis on proper form and scaling. A supportive introduction to the CrossFit methodology.',
  },
  // Zumba
  {
    id: 12,
    name: 'Zumba Party',
    category: 'Zumba',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800&q=80',
    difficulty: 'Beginner',
    duration: '50 min',
    calories: '300–500',
    trainer: 'Coach Meera',
    schedule: 'Mon, Wed, Fri — 6:00 PM',
    description: 'Dance your way to fitness with Latin-inspired moves and high-energy music. No dance experience needed — just bring your energy and smile!',
  },
];

// ---- Featured Trainer (Spotlight) ----
export const trainerSpotlight = {
  name: 'Coach Raj Malhotra',
  title: 'Head Trainer & Strength Coach',
  image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80',
  bio: 'With 10+ years of experience in competitive powerlifting and functional training, Coach Raj has helped over 500 members transform their fitness. Certified by ACE and CrossFit L2.',
  specialties: ['Powerlifting', 'CrossFit', 'Strength & Conditioning'],
  stats: { experience: '10+', members: '500+', certifications: '6' },
};

// ---- About Data ----
export const aboutData = {
  storyImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
  name: 'IronForge Fitness',
  tagline: 'Where Strength Meets Community',
  story: [
    'Founded in 2018, IronForge Fitness was born from a simple belief — that a gym should be more than just a room full of equipment. It should be a community that lifts you up, pushes you forward, and celebrates every victory, big or small.',
    'What started as a small 1,500 sq ft studio in Pune has grown into a state-of-the-art 8,000 sq ft facility with dedicated zones for strength training, cardio, CrossFit, yoga, and group fitness. Our coaches are nationally certified and passionate about helping every member reach their potential.',
    'At IronForge, we don\'t just build bodies — we build discipline, confidence, and lifelong habits. Whether you\'re a first-time gym-goer or a seasoned athlete, there\'s a place for you here.',
  ],
  values: [
    { icon: 'Dumbbell', title: 'Strength', description: 'Build physical and mental strength through progressive, science-backed training' },
    { icon: 'Users', title: 'Community', description: 'A supportive tribe that motivates, inspires, and holds you accountable' },
    { icon: 'Target', title: 'Discipline', description: 'Consistency over perfection — show up, put in the work, see results' },
    { icon: 'TrendingUp', title: 'Transformation', description: 'Real results through personalized programs tailored to your goals' },
    { icon: 'Heart', title: 'Wellness', description: 'Holistic approach combining fitness, flexibility, and mental health' },
    { icon: 'Shield', title: 'Safety', description: 'Proper form, guided coaching, and a clean, well-maintained facility' },
  ],
  stats: [
    { value: 7, suffix: '+', label: 'Years Running' },
    { value: 2000, suffix: '+', label: 'Members Trained' },
    { value: 12, suffix: '', label: 'Expert Trainers' },
    { value: 30, suffix: '+', label: 'Weekly Classes' },
  ],
  achievements: [
    '2025 – Best Fitness Studio in Pune — India Fitness Awards',
    '2024 – Top 10 Gyms in Maharashtra — HealthFirst Magazine',
    '2024 – Excellence in Community Fitness — FitIndia Movement',
    '2023 – Most Innovative Training Programs — Asia Fitness Summit',
    '2022 – Rising Fitness Brand Award — Pune Business Awards',
  ],
  facilityImages: [
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', alt: 'Main gym floor with free weights' },
    { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', alt: 'Cardio zone with treadmills' },
    { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80', alt: 'CrossFit training area' },
    { src: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80', alt: 'Yoga and stretching studio' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80', alt: 'Functional training zone' },
    { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80', alt: 'Locker room and recovery area' },
  ],
};
