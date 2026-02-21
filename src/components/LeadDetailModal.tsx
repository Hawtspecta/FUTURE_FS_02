import { useState } from "react";
import { X, Send } from "lucide-react";
import { Lead, LeadStatus, LeadNote } from "@/lib/data";

const statusOptions: LeadStatus[] = ["new", "contacted", "converted"];

const statusStyles: Record<LeadStatus, string> = {
  new: "bg-info/15 text-info border-info/20",
  contacted: "bg-warning/15 text-warning border-warning/20",
  converted: "bg-success/15 text-success border-success/20",
};

interface LeadDetailModalProps {
  lead: Lead;
  onClose: () => void;
  onUpdate: (lead: Lead) => void;
}

const LeadDetailModal = ({ lead, onClose, onUpdate }: LeadDetailModalProps) => {
  const [noteText, setNoteText] = useState("");

  const handleStatusChange = (status: LeadStatus) => {
    onUpdate({ ...lead, status, updatedAt: new Date().toISOString() });
  };

  const handleAddNote = () => {
    if (!noteText.trim()) return;
    const newNote: LeadNote = {
      id: "n" + Date.now(),
      content: noteText.trim(),
      createdAt: new Date().toISOString(),
    };
    onUpdate({
      ...lead,
      notes: [newNote, ...lead.notes],
      updatedAt: new Date().toISOString(),
    });
    setNoteText("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg glass-card p-6 max-h-[85vh] overflow-y-auto animate-slide-up">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">{lead.name}</h2>
            <p className="text-sm text-muted-foreground">{lead.email}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Source</label>
            <p className="text-sm font-medium text-foreground mt-1">{lead.source}</p>
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Created</label>
            <p className="text-sm font-medium text-foreground mt-1">
              {new Date(lead.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="mb-6">
          <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Status</label>
          <div className="flex gap-2">
            {statusOptions.map((s) => (
              <button
                key={s}
                onClick={() => handleStatusChange(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border capitalize transition-all ${
                  lead.status === s ? statusStyles[s] : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Add Note */}
        <div className="mb-6">
          <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Add Note</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddNote()}
              placeholder="Write a follow-up note..."
              className="flex-1 h-10 px-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              onClick={handleAddNote}
              disabled={!noteText.trim()}
              className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Notes List */}
        <div>
          <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Notes ({lead.notes.length})</label>
          {lead.notes.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4">No notes yet.</p>
          ) : (
            <div className="space-y-3">
              {lead.notes.map((note) => (
                <div key={note.id} className="bg-secondary/50 border border-border/50 rounded-xl p-3">
                  <p className="text-sm text-foreground">{note.content}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {new Date(note.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadDetailModal;
