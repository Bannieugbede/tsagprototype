import DailyDoseCard from "./DailyDoseCard";
import EmptyState from "./EmptyState";

const DailyDoseList = ({ devotions = [] }) => {
  if (!devotions.length) {
    return <EmptyState title="No devotions yet" message="New daily devotionals will appear here soon." />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {devotions.map((devotion) => (
        <DailyDoseCard key={devotion.id} devotion={devotion} />
      ))}
    </div>
  );
};

export default DailyDoseList;
