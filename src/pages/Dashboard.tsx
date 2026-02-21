import { TrendingUp, Users, UserPlus, UserCheck, Percent } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { MOCK_LEADS, CHART_DATA_LEADS_OVER_TIME, CHART_DATA_STATUS } from "@/lib/data";
import DashboardLayout from "@/components/DashboardLayout";

const kpis = [
  { label: "Total Leads", value: MOCK_LEADS.length, icon: Users, color: "text-primary" },
  { label: "New", value: MOCK_LEADS.filter((l) => l.status === "new").length, icon: UserPlus, color: "text-info" },
  { label: "Contacted", value: MOCK_LEADS.filter((l) => l.status === "contacted").length, icon: TrendingUp, color: "text-warning" },
  { label: "Converted", value: MOCK_LEADS.filter((l) => l.status === "converted").length, icon: UserCheck, color: "text-success" },
  {
    label: "Conversion Rate",
    value: Math.round((MOCK_LEADS.filter((l) => l.status === "converted").length / MOCK_LEADS.length) * 100) + "%",
    icon: Percent,
    color: "text-accent",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Your pipeline at a glance</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {kpis.map((kpi, i) => (
            <div key={i} className="glass-card-hover p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{kpi.label}</span>
                <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
              </div>
              <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Leads Over Time</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={CHART_DATA_LEADS_OVER_TIME}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 15% 18%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(220 10% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(220 10% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(230 25% 11%)",
                    border: "1px solid hsl(230 15% 22%)",
                    borderRadius: "12px",
                    color: "hsl(220 20% 95%)",
                    fontSize: 12,
                  }}
                />
                <Line type="monotone" dataKey="leads" stroke="hsl(230 80% 60%)" strokeWidth={2.5} dot={{ fill: "hsl(230 80% 60%)", r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Status Distribution</h3>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={CHART_DATA_STATUS} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" stroke="none">
                  {CHART_DATA_STATUS.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(230 25% 11%)",
                    border: "1px solid hsl(230 15% 22%)",
                    borderRadius: "12px",
                    color: "hsl(220 20% 95%)",
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-2">
              {CHART_DATA_STATUS.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
