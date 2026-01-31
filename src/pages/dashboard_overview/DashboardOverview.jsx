import CallTrendSection from "./components/CallTrendSection";
import CardSection from "./components/CardSection";
import LastSection from "./components/LastSection";

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <CardSection />
      <CallTrendSection />
      <LastSection />
    </div>
  );
};

export default DashboardOverview;
