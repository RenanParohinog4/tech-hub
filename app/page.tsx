import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import events from "@/lib/constants";

const Page = () => {
    return (
        <section>
            <h1 className="text-center">
                Your Gateway to Tech Events
            </h1>

            <p className="text-center mt-5">
                Explore opportunities to learn, compete, and connect with the tech community.
            </p>
            <ExploreBtn/>

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>
                <ul className="events">
                    {events.map((el)=>(
                        <li key={el.title}>
                            <EventCard {... el}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Page
