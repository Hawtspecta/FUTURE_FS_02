import DashboardLayout from "@/components/DashboardLayout";
import { Zap } from "lucide-react";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your account and preferences</p>
        </div>

        <div className="glass-card p-6 space-y-6">
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Profile</label>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-primary-foreground">
                A
              </div>
              <div>
                <p className="font-semibold text-foreground">Admin User</p>
                <p className="text-sm text-muted-foreground">admin@leadflow.ai</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-3">Account</label>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  defaultValue="admin@leadflow.ai"
                  className="w-full h-10 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
                <input
                  type="password"
                  defaultValue="••••••••"
                  className="w-full h-10 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">
              Save Changes
            </button>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm">LeadFlow AI v1.0 — Built with ❤️ for agencies & freelancers</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
