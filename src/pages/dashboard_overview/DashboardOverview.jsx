import CallTrendSection from "./components/CallTrendSection";
import CardSection from "./components/CardSection";

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <CardSection />
      <CallTrendSection />
    </div>
  );
};

export default DashboardOverview;
