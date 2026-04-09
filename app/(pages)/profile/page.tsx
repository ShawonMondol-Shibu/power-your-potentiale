import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  Trophy, 
  Flame, 
  Dumbbell, 
  Calendar, 
  Camera, 
  ChevronRight,
  TrendingUp,
  
} from "lucide-react";
import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="min-h-screen mt-40 bg-white px-4 py-6 text-zinc-950 md:px-8 font-sans">
      {/* Background Glow Decor */}
      <div className="fixed top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#84cc16]/10 blur-[120px]" />
      <div className="fixed right-0 top-40 -z-10 h-80 w-80 rounded-full bg-zinc-100 blur-[120px]" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[#84cc16] font-bold tracking-widest uppercase text-sm mb-2">Dashboard</p>
            <h1 className="text-5xl font-black italic uppercase leading-none tracking-tighter">
              User <span className="text-[#84cc16]">Profile</span>
            </h1>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 shadow-sm">
                <Settings className="w-4 h-4 mr-2" /> Settings
             </Button>
             <Button className="bg-[#84cc16] hover:bg-[#6da112] text-black font-bold">
                Edit Profile
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="h-24 bg-linear-to-r from-[#84cc16] to-[#4d7c0f]" />
              <CardContent className="relative pt-0 px-6 pb-6">
                <div className="relative -mt-12 mb-4 group w-fit mx-auto">
                  <div className="w-32 h-32 overflow-hidden rounded-2xl border-4 border-white bg-zinc-100 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      alt="Profile"
                    />
                  </div>
                  <button className="absolute bottom-2 right-2 p-2 bg-[#84cc16] text-black rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-bold">John Doe</h3>
                  <p className="text-[#84cc16] text-sm font-medium flex items-center justify-center gap-1">
                    <Trophy className="w-3 h-3" /> Elite Athlete
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-6">
                  <div className="text-center">
                    <p className="text-zinc-500 text-xs uppercase font-bold tracking-wider">Workouts</p>
                    <p className="text-xl font-black italic">128</p>
                  </div>
                  <div className="text-center">
                    <p className="text-zinc-500 text-xs uppercase font-bold tracking-wider">Points</p>
                    <p className="text-xl font-black italic text-[#84cc16]">4.2k</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-zinc-100 p-2"><Calendar className="w-4 h-4 text-zinc-500" /></div>
                    <span className="text-sm text-zinc-400">Joined</span>
                  </div>
                  <span className="text-sm font-semibold">Jan 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-zinc-100 p-2"><TrendingUp className="w-4 h-4 text-zinc-500" /></div>
                    <span className="text-sm text-zinc-400">Current Goal</span>
                  </div>
                  <span className="text-sm font-semibold">Hypertrophy</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Weight Loss', value: '-5.2 kg', icon: TrendingUp, color: 'text-[#84cc16]' },
                { label: 'Active Streak', value: '12 Days', icon: Flame, color: 'text-orange-500' },
                { label: 'Avg Intensity', value: '84%', icon: Dumbbell, color: 'text-blue-500' },
              ].map((stat, i) => (
                <Card key={i} className="group border-zinc-200 bg-white transition-colors hover:border-[#84cc16]/40 shadow-sm">
                  <CardContent className="p-6">
                    <stat.icon className={`w-5 h-5 ${stat.color} mb-4`} />
                    <p className="text-zinc-500 text-sm font-medium">{stat.label}</p>
                    <h4 className="text-2xl font-black italic uppercase tracking-tight">{stat.value}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Tabs */}
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="mb-6 border border-zinc-200 bg-zinc-50 p-1">
                <TabsTrigger value="activity" className="text-zinc-600 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm">Activity</TabsTrigger>
                <TabsTrigger value="stats" className="text-zinc-600 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm">Statistics</TabsTrigger>
                <TabsTrigger value="settings" className="text-zinc-600 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm">Account</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity" className="space-y-4 outline-none">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  Recent Workouts <span className="h-px flex-1 bg-zinc-200" />
                </h3>
                
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="group flex cursor-pointer items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-[#84cc16]/40 hover:bg-zinc-50">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 font-black text-[#84cc16]">
                        {i === 0 ? 'LEG' : i === 1 ? 'PULL' : 'PUSH'}
                      </div>
                      <div>
                        <h4 className="font-bold">Heavy Lower Body Session</h4>
                        <p className="text-sm text-zinc-500">Yesterday • 1h 24m</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-400 transition-colors group-hover:text-[#84cc16]" />
                  </div>
                ))}
                
                <Button variant="ghost" className="w-full text-zinc-500 hover:bg-transparent hover:text-[#84cc16]">
                  View Full History
                </Button>
              </TabsContent>

              <TabsContent value="settings">
                 <Card className="border-zinc-200 bg-white shadow-sm">
                    <CardContent className="p-8 text-center text-zinc-500">
                      Settings form elements would be styled here...
                    </CardContent>
                 </Card>
              </TabsContent>
            </Tabs>
          </div>

        </div>
      </div>
    </div>
  );
}
