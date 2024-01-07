/** @format */

import Heading from "@/components/Heading";
import { getWork } from "@/lib/works";

export default async function GameverseChronicles() {
  const work =  async getWork("gameverse-chronicles")
  return (
    <>
      <Heading className='m-2'>{title}</Heading>
      <p className='pb-2 italic'>{date}</p>
      <img
        src={image}
        alt='image'
        width='640px'
        height='360'
        className='object-contain pb-5 bg-no-repeat bg-cover rounded-xl'
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className='pb-2 prose max-w-screen prose-slate'
      />
    </>
  );
}
