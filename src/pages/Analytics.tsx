import DashboardLayout from "@/components/DashboardLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { CHART_DATA_LEADS_OVER_TIME, CHART_DATA_STATUS, MOCK_LEADS } from "@/lib/data";

const sourceData = [
  { source: "Website", leads: 3 },
  { source: "LinkedIn", leads: 2 },
  { source: "Referral", leads: 2 },
  { source: "Google Ads", leads: 1 },
  { source: "Twitter", leads: 1 },
];

const tooltipStyle = {
  backgroundColor: "hsl(230 25% 11%)",
  border: "1px solid hsl(230 15% 22%)",
  borderRadius: "12px",
  color: "hsl(220 20% 95%)",
  fontSize: 12,
};

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground text-sm mt-1">Insights into your pipeline performance</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Leads Over Time</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={CHART_DATA_LEADS_OVER_TIME}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 15% 18%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(220 10% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(220 10% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="leads" stroke="hsl(230 80% 60%)" strokeWidth={2.5} dot={{ fill: "hsl(230 80% 60%)", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Status Breakdown</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={CHART_DATA_STATUS} cx="50%" cy="50%" innerRadius={65} outerRadius={100} dataKey="value" stroke="none">
                  {CHART_DATA_STATUS.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-2">
              {CHART_DATA_STATUS.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                  {item.name} ({item.value})
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-4">Leads by Source</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={sourceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 15% 18%)" />
                <XAxis dataKey="source" tick={{ fill: "hsl(220 10% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(220 10% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="leads" fill="hsl(230 80% 60%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
