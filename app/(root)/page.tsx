import { Button } from '@/components/ui/button'; 

export default function Home() {
  return (
    <div className='px-10 py-5 bg-dotted-pattern'> 
        <section className=''>
          <p className='text-3xl font-black'>Host, connect, Celebae: Your Events on Our Platform!</p>
          <p className='pb-4'> hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt pariatur labore a minus nisi quas, nostrum hic natus maxime enim distinctio, assumenda libero. </p>
          <Button size="sm" className='button w-full sm:w-fit text-sm'>Explore Now</Button>
        </section>
    </div>
  );
}
