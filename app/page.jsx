/** @format */

import Heading from "@/components/Heading";

export default function HomePage() {
  return (
    <>
      <div>
        <p className='py-3 text-center'>
          Hello, I’m an fullstack app developer based in Indonesia
        </p>
      </div>
      <Heading>Muhammad Sahal Nurdin</Heading>
      <p className='text-left font-semibold'>
        Love to build Digital Things (Developer/3D Generalist/Designer)
      </p>
      <div className='py-3'>
        <h2 className='font-semibold underline'>About</h2>
        <p className='text-justify'>
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
        <h2 className='font-semibold underline'>Bio</h2>
        <ul className='pl-3'>
          <li>Born in Jakarta, Indonesia</li>
          <li>
            Completed the Master's Program in the Graduate School of Information
            Science at Gunadarma University{" "}
          </li>
          <li>Working as a freelancer developer</li>
        </ul>
      </div>
      <div className='py-3 '>
        <h2 className='font-semibold underline'>Hobby</h2>
        <ul className='pl-3'>
          <li>UI/UX Design</li>
          <li>3D Environment Design</li>
          <li>Machine Learning</li>
          <li>Music Playlist</li>
        </ul>
      </div>
      <div className='py-3 '>
        <h2 className='font-semibold underline'>Social Media</h2>
        <ul className='pl-3'>
          <li>@sahalnurdin_</li>
          <li>@sahalnurdin_</li>
          <li>@sahalnurdin_</li>
          <li>@sahalnurdin_</li>
        </ul>
      </div>
      <div className='py-3 font-semibold'>
        <img src='' alt='' />
      </div>
      <div className='py-3 '>
        <h2 className='font-semibold underline'>Blogs</h2>
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
