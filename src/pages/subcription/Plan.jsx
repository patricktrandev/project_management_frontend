/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { PlanCard } from "./PlanCard";

const paidPlan = [
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Customization Options",
  "Integration Support",
  "Advanced Security",
  "Training and Resources",
  "Access Control",
  "Customize Workflows",
];
const annualPlan = [
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Everything which monthly plan has",
];
const freePlan = [
  "Add only 3 projects",
  "Basic Task Management",
  "Project Collaboration",
  "Basic Reporting",
  "Email Notifications",
  "Basic Access Control",
];
export const Plan = () => {
  const [checkButton, setCheckButton] = useState(true);

  return (
    <section className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <PlanCard
          data={{
            planName: "Free",
            features: freePlan,
            planType: "FREE",
            price: 0,
            buttonName: checkButton ? "Current Plan" : "Get Started",
          }}
        />
        <PlanCard
          data={{
            planName: "Monthly Paid PLan",
            features: paidPlan,
            planType: "MONTHLY",
            price: 199,
            buttonName: checkButton ? "Current Plan" : "Get Started",
          }}
        />
        <PlanCard
          data={{
            planName: "Annual Paid PLan",
            features: annualPlan,
            planType: "ANNUALLY",
            price: 999,
            buttonName: checkButton ? "Current Plan" : "Get Started",
          }}
        />
      </div>
    </section>
  );
};
