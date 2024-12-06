"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Clock, Activity } from "lucide-react";

const systems = [
  {
    name: "Voice AI Platform",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "30 days ago"
  },
  {
    name: "Chatbot Services",
    status: "operational",
    uptime: "99.95%",
    lastIncident: "15 days ago"
  },
  {
    name: "API Services",
    status: "operational",
    uptime: "99.98%",
    lastIncident: "45 days ago"
  },
  {
    name: "Dashboard",
    status: "operational",
    uptime: "99.97%",
    lastIncident: "7 days ago"
  },
  {
    name: "Analytics",
    status: "degraded",
    uptime: "98.50%",
    lastIncident: "1 hour ago"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case "degraded":
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    default:
      return <AlertCircle className="h-5 w-5 text-red-500" />;
  }
};

export default function Status() {
  return (
    <div className="min-h-screen pt-20 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">System Status</h1>
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-primary mr-2" />
              <span>Last updated: Just now</span>
            </div>
          </div>

          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-xl font-semibold">All Systems Operational</span>
              </div>
              <div className="text-muted-foreground">
                <Clock className="h-5 w-5 inline-block mr-2" />
                30-day uptime: 99.98%
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getStatusIcon(system.status)}
                      <span className="ml-2 font-semibold">{system.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-muted-foreground">
                        Uptime: {system.uptime}
                      </span>
                      <span className="text-muted-foreground">
                        Last incident: {system.lastIncident}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Past Incidents</h2>
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">March 15, 2024</h3>
                  <p className="text-muted-foreground">
                    Analytics service experienced degraded performance for 45 minutes.
                    Issue resolved at 14:30 UTC.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">March 10, 2024</h3>
                  <p className="text-muted-foreground">
                    Scheduled maintenance completed successfully. All systems operating normally.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}