import React from 'react'
import { client } from '@/lib/sanityClient'
import { groq } from 'next-sanity'


import HeroSvg from './heroSvg';


export const getProfileData=async()=>{
  const res=await  client.fetch(groq`*[_type=="profile"]{
     _id,
    fullName,
    headline,
    profileImage {alt, "image": asset->url},
   }`)
return res
}

interface mydata{
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
 
}
const Profile =async () => {
const data:mydata[]=await getProfileData();
console.log(data)
  return (
    <div className="  max-w-7xl mx-auto lg:px-16 px-6">
      
       
        
     
    
    </div>
  );
  
}

export default Profile