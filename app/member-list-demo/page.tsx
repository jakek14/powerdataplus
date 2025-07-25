import React from 'react';
import MemberList from '@/components/ui/member-list';

export default function MemberListDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Member List Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            This is the MemberList component imported from your CursorPhion project.
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <MemberList />
        </div>
      </div>
    </div>
  );
} 