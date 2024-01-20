import { Button } from '@/components/ui/button'; 
import Image from 'next/image';

export default function Home() {
  return (

    <div className=' px-4 bg-dotted-pattern'> 
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4`}>

        <div>
          <section className=''>
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5'>Host, connect, Celebae: Your Events on Our Platform!</p>
            <p className='pb-4 mb-10 text-base  md:text-xl lg:text-2xl xl:text-3xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt pariatur labore a minus nisi quas, nostrum hic natus maxime enim distinctio, assumenda libero. </p>
            <Button size="xlg" className='button w-full sm:w-fit text-sm'>Explore Now</Button>
          </section>  
        </div> 
        <div>
          <section>
            <Image src='/assets/images/hero.png' alt='hero' width={500} height={500} ></Image>
          </section> 
        </div>
        <section className='mt-10'>
          <div>
            <p className='text-3xl font-black'>Truested By <br />
              Thousands of Events
            </p>
          </div>
          <div>
            Search
            <br />
            Category
          </div>
        </section>
      </div>
    </div>
  );
}
