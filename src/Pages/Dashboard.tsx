import { FC } from "react";
import { DashboardComponent } from "../Components/DashboardComponent";

export const Dashboard: FC = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});

  return (
    <div>
      <DashboardComponent />
    </div>
  );
};
