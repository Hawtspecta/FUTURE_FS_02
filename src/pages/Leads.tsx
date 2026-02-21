import { useState } from "react";
import { Search, Filter, Plus } from "lucide-react";
import { MOCK_LEADS, Lead, LeadStatus } from "@/lib/data";
import DashboardLayout from "@/components/DashboardLayout";
import LeadDetailModal from "@/components/LeadDetailModal";
import { useToast } from "@/hooks/use-toast";

const statusStyles: Record<LeadStatus, string> = {
  new: "bg-info/15 text-info border-info/20",
  contacted: "bg-warning/15 text-warning border-warning/20",
  converted: "bg-success/15 text-success border-success/20",
};

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<LeadStatus | "all">("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const { toast } = useToast();

  const filtered = leads
    .filter((l) => {
      if (filterStatus !== "all" && l.status !== filterStatus) return false;
      if (search && !l.name.toLowerCase().includes(search.toLowerCase()) && !l.email.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const handleUpdateLead = (updated: Lead) => {
    setLeads((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
    setSelectedLead(updated);
    toast({ title: "Lead updated", description: `${updated.name} has been updated.` });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Leads</h1>
            <p className="text-muted-foreground text-sm mt-1">{leads.length} total leads</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all self-start">
            <Plus className="h-4 w-4" />
            Add Lead
          </button>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {(["all", "new", "contacted", "converted"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all capitalize ${
                  filterStatus === status
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Name", "Email", "Source", "Status", "Created"].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3.5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className="border-b border-border/50 hover:bg-secondary/50 cursor-pointer transition-colors"
                  >
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{lead.name}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{lead.email}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{lead.source}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium border capitalize ${statusStyles[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">
                      {new Date(lead.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-12 text-center text-sm text-muted-foreground">
                      No leads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedLead && (
        <LeadDetailModal lead={selectedLead} onClose={() => setSelectedLead(null)} onUpdate={handleUpdateLead} />
      )}
    </DashboardLayout>
  );
};

export default Leads;
