'use client'

type EventFormProps = {
    userId: string;
    type: "Create" | "Update";
};

function EventForm({ userId, type }: EventFormProps) {
  return (
    <div>
      Form Component {type}
    </div>
  )
}

export default EventForm
