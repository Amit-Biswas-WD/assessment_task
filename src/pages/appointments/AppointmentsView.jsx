import BookingLinkSection from "./components/BookingLinkSection";
import CardSection from "./components/CardSection";
import TableSection from "./components/TableSection";

const AppointmentsView = () => {
  return (
    <div className="space-y-6">
      <CardSection />
      <BookingLinkSection />
      <TableSection />
    </div>
  );
};

export default AppointmentsView;
