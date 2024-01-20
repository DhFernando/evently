import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs"

function CreateEvent() {

    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

  return (
    <div>
      <section className="text-center">
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5'>Create a Event</p>
      </section>

      <section className=" ">
        <EventForm userId={userId} type="Create" />
      </section>


    </div>
  )
}

export default CreateEvent
