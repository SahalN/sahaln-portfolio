/** @format */

import Heading from "@/components/Heading";

export default function HomePage() {
  return (
    <>
      <div>
        <img src='images/Sahal.png' className='w-40 py-5 mx-auto' alt='cover' />
      </div>
      <div className='my-4'>
        <p className='text-center bg-teal-400  rounded-2xl'>
          Hello, I’m an fullstack app developer based in Indonesia
        </p>
      </div>
      <Heading>Muhammad Sahal Nurdin</Heading>
      <p className='text-sm font-semibold text-left'>
        Love to build Digital Things (Developer/3D Generalist/Designer)
      </p>
      <div className='py-3'>
        <h2 className='font-semibold underline font-mplusrounded1c'>About</h2>
        <p className='font-normal text-justify indent-4'>
          Sahal is a full-stack developer with a deep passion for building
          digital innovations. With a keen eye for detail and a knack for
          problem-solving, he brings creative ideas to life through code.
          Whether it's designing user-friendly interfaces or tackling complex
          backend challenges, Sahal's expertise shines through in every project.
          His dedication to crafting digital solutions that make a difference is
          what sets him apart in the world of technology. From front-end
          aesthetics to the intricacies of back-end functionality.
        </p>
      </div>
      <div className='py-3 '>
        <h2 className='font-bold underline font-mplusrounded1c'>Bio</h2>
        <div className='flex space-x-2'>
          <span className='my-auto text-sm font-bold'>2003</span>
          <div>Born in Jakarta, Indonesia</div>
        </div>
        <div>
          <div className='flex space-x-2'>
            <span className='my-auto text-sm font-bold'>2025</span>
            <div className='mt-2'>
              Completed the Master's Program in the Graduate School of
              Information Science at Gunadarma University
            </div>
          </div>
        </div>
        <div>
          <div className='flex space-x-2'>
            <span className='my-auto text-sm font-bold'>2023</span>
            <div>Working as a freelancer developer</div>
          </div>
        </div>
      </div>
      <div className='py-3 '>
        <h2 className='font-bold underline font-mplusrounded1c'>Hobby</h2>
        <ul className='pl-3'>
          <li>UI/UX Design</li>
          <li>3D Environment Design</li>
          <li>Machine Learning</li>
          <li>Music Playlist</li>
        </ul>
      </div>
      <div className='py-3 '>
        <h2 className='font-bold underline font-mplusrounded1c'>
          Social Media
        </h2>
        <ul className='pl-3'>
          <li>@sahalnurdin_</li>
          <li>@sahalnurdin_</li>
          <li>@sahalnurdin_</li>
          <li>@sahalnurdin_</li>
        </ul>
      </div>
      <div className='py-3 font-bold font-mplusrounded1c'>
        <img src='' alt='' />
      </div>
      <div className='py-3 '>
        <h2 className='font-bold underline font-mplusrounded1c'>Blogs</h2>
        <p className='pb-3'>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>
        <p className='text-center p-2 rounded-xl bg-[#81E6D9] '>
          <a href='https://sahalnuiux-reviews.vercel.app/' target='_blank'>
            Click Here to slide in to my blog
          </a>
        </p>
      </div>
    </>
  );
}
