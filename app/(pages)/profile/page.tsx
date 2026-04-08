import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12">
           <h1 className="text-4xl font-black italic uppercase">My Profile</h1>
           <Button variant="outline" className="border-[#84cc16] text-[#84cc16]">Edit Profile</Button>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="bg-[#111] p-6 rounded-xl border border-white/5 space-y-6">
            <div className="w-32 h-32 bg-[#84cc16] rounded-full mx-auto" />
            <div className="text-center">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-zinc-500">Elite Member</p>
            </div>
            <div className="space-y-2 pt-4">
               <div className="flex justify-between text-sm"><span className="text-zinc-400">Join Date:</span><span>Jan 2024</span></div>
               <div className="flex justify-between text-sm"><span className="text-zinc-400">Workouts:</span><span>42</span></div>
            </div>
          </div>

          {/* Main Stats (Matching Landing Page Cards) */}
          <div className="md:col-span-2 space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-[#84cc16]">
                  <p className="text-zinc-400 text-sm">Weight Loss</p>
                  <h4 className="text-2xl font-bold">-5.2 kg</h4>
                </div>
                <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-[#84cc16]">
                  <p className="text-zinc-400 text-sm">Active Streak</p>
                  <h4 className="text-2xl font-bold">12 Days</h4>
                </div>
             </div>
             
             <div className="bg-[#111] p-8 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                {/* Profile Form with Shadcn would go here */}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}