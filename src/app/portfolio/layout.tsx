"use client";

import React from "react";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* You can add a portfolio-specific header, navigation, or sidebar here */}
      {/* For example: */}
      {/* <nav className="border-b p-4">Portfolio Nav</nav> */}
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
      {/* You can add a portfolio-specific footer here */}
      {/* <footer className="border-t p-4 text-center">Portfolio Footer</footer> */}
    </div>
  );
}
