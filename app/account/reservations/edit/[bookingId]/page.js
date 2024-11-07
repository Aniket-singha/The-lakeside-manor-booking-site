import UpdateReservation from "@/app/_components/UpdateReservation";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
export default async function Page({params}) {
    // CHANGE
    const booking= await getBooking(params.bookingId)

    
    const reservationId = params.bookingId;
    const {maxCapacity} = await getCabin(booking.cabinId);
  
    return (
      <div>
        <h2 className="font-semibold text-2xl text-accent-400 mb-7">
          Edit Reservation #{reservationId}
        </h2>
        <UpdateReservation params={params} booking={booking} reservationId={reservationId} maxCapacity={maxCapacity}/>
      </div>
    );
  }
  
  