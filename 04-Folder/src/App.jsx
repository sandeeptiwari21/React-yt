import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/card'
import User from './components/user'


const App = () => {
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Front-End Developer",
    tag: "Full-time",
    tag1: "Remote",
    tag2: "Junior Level",
    payPerHour: 45,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "React Engineer",
    tag: "Full-time",
    tag1: "On-site",
    tag2: "Mid Level",
    payPerHour: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Back-End Developer",
    tag: "Part-time",
    tag1: "Hybrid",
    tag2: "Senior Level",
    payPerHour: 60,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag: "Full-time",
    tag1: "Remote",
    tag2: "Junior Level",
    payPerHour: 50,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "7 days ago",
    post: "Full Stack Developer",
    tag: "Full-time",
    tag1: "Hybrid",
    tag2: "Mid Level",
    payPerHour: 65,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Developer",
    tag: "Part-time",
    tag1: "Remote",
    tag2: "Junior Level",
    payPerHour: 48,
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "4 days ago",
    post: "iOS Engineer",
    tag: "Full-time",
    tag1: "On-site",
    tag2: "Senior Level",
    payPerHour: 75,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "3 weeks ago",
    post: "Java Developer",
    tag: "Full-time",
    tag1: "Remote",
    tag2: "Mid Level",
    payPerHour: 58,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    company: "IBM",
    datePosted: "12 days ago",
    post: "Cloud Engineer",
    tag: "Part-time",
    tag1: "Hybrid",
    tag2: "Junior Level",
    payPerHour: 42,
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag: "Full-time",
    tag1: "On-site",
    tag2: "Senior Level",
    payPerHour: 80,
    location: "California, USA"
  }
];

console.log(jobs);

  return (
    <div className='parent'>
      {jobs.map(function(elem){

        return <Card />
      })}
    
    </div>
  )
}

export default App

