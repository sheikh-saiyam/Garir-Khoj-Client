import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DailyRentalPriceChart = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="car_model" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="daily_rental_price"
          name="Daily Rental Price"
          fill="#FF5A5F"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyRentalPriceChart;
