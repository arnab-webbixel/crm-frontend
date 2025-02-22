import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TbUsersGroup } from "react-icons/tb";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PieChartCard from "@/components/ui/PieChartCard";
import RadialChartCard from "@/components/ui/RadialChartCard";
import { fetchCallStatsById } from "../utils/store/countSlice";
import Calender from "@/components/calender/Calender";
import CallStats from "@/components/ui/CallStats";
const MainDashboard = () => {
  const [apiData, setApiData] = useState([]);
  const { callStats, loading, error } = useSelector((state) => state.count);
  console.log("API Data" + callStats)

  const { user } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (!callStats.length) {
      dispatch(fetchCallStatsById(user.id));
    } else {
      setApiData(callStats);
    }

  }, [dispatch, callStats]);

  const transformedChartData = useMemo(() => {
    const colorMap = {
      archive: "#E9D4FE",
      "hot-call": "#4b0082",
      "warm-call": "#EC4899",
    };

    return apiData.map((item) => ({
      browser: item._id,
      visitors: item.count,
      fill: colorMap[item._id] || "#BDBDBD", // Default color if not found in colorMap
    }));
    
  }, [apiData]);

  const totalVisitors = useMemo(
    () => transformedChartData.reduce((acc, curr) => acc + curr.visitors, 0),
    [transformedChartData]
  );

  // Check role-based rendering conditions
  const isTelecaller = user?.role === "telecaller";
  const isSales = user?.role === "sales";

  return (
    <div >
      
      <div className="mt-4 grid grid-cols-4 gap-4">
        <div>
          {/* Show PieChartCard for all roles */}
          <PieChartCard
            title="Total call's count"
            description="January - June 2024"
            data={transformedChartData}
            totalVisitors={totalVisitors}
          />
        </div>
        <div className="h-120 w-100 ">
        <CallStats
        total={200}
        delivered={70}
        received={80}
        cancelled={50}
        trend={5.2}
        date="12.12.2024"
      />
        </div>

        <div>
          {/* Show RadialChartCard only for telecallers and sales */}
          {(isTelecaller || isSales) && <RadialChartCard />}
        </div>

        <div>
          {/* Show Calendar for all roles */}
          <div style={{ width: "100%", maxWidth: "400px", margin: "auto" }}>
            <Calender />
          </div>
        </div>

        <div>
          {/* Role-specific Sections */}
          {/* {isTelecaller && (
            <div className="h-24 rounded-md flex justify-between items-center bg-white shadow-xl border border-gray-300 my-2 hover:scale-105">
              <div className="p-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-pink-100">
                    <TbUsersGroup className="w-8 h-8 text-pink-500" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="mr-2 p-4">
                <p className="text-right font-bold text-pink-500 text-2xl font-poppins">
                  34
                </p>
                <p className="text-left font-md font-poppins">
                  Calls Made Today
                </p>
              </div>
            </div>
          )}

          {isSales && (
            <div className="h-24 rounded-md flex justify-between items-center bg-white shadow-xl border border-gray-300 my-2 hover:scale-105">
              <div className="p-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-orange-100">
                    <TbUsersGroup className="w-8 h-8 text-orange-500" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="mr-2 p-4">
                <p className="text-right font-bold text-orange-500 text-2xl font-poppins">
                  8
                </p>
                <p className="text-left font-md font-poppins">
                  New Clients Added
                </p>
              </div>
            </div>
          )} */}
        </div>
      </div>

      <div>
      </div>
    
    </div>
  );
};

export default MainDashboard;
