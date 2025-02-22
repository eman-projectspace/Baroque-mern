import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const SalesChart = ({ data }) => {
  if (!data.length) {
    return <p>Loading sales data...</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" /> {/* Updated to match API response */}
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalSales" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;