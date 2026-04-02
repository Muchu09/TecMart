import React from 'react';
import { Search, Book, FileText, MessagesSquare } from 'lucide-react';

export default function HelpCenter() {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="card text-center space-y-6" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', color: 'var(--color-text-inverse)' }}>
          <h1 className="text-4xl font-extrabold">How can we assist you?</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>Find answers, support, and guides to get the most out of TecMart.</p>
          <div className="max-w-xl mx-auto mt-4 relative">
             <Search className="absolute top-3 left-4" style={{ color: 'var(--color-text-tertiary)' }} size={20} />
             <input type="text" placeholder="Search for help..." className="input-field" style={{ paddingLeft: '3rem', borderRadius: '9999px' }} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card text-center">
             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
               <Book size={28} />
             </div>
             <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>Getting Started</h3>
             <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>Learn the basics of renting, buying, and listing items.</p>
             <button className="btn btn-outline btn-sm">Read Guide &rarr;</button>
          </div>

          <div className="card text-center">
             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-success-light)', color: 'var(--color-success)' }}>
               <FileText size={28} />
             </div>
             <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>Policies & Terms</h3>
             <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>Review our refund, shipping, and dispute policies.</p>
             <button className="btn btn-outline btn-sm">View Policies &rarr;</button>
          </div>

          <div className="card text-center">
             <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}>
               <MessagesSquare size={28} />
             </div>
             <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>Contact Support</h3>
             <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>Can't find an answer? Our team is here to help 24/7.</p>
             <button className="btn btn-outline btn-sm">Open Ticket &rarr;</button>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-6 border-b pb-4" style={{ color: 'var(--color-text-primary)', borderColor: 'var(--color-border)' }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group border rounded-lg p-4 cursor-pointer" style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}>
               <summary className="font-medium" style={{ color: 'var(--color-text-primary)' }}>How do I verify a seller?</summary>
               <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Check their reviews, badges, and the number of successfully completed transactions. You can also send them an instant message through the platform before purchasing.</p>
            </details>
            <details className="group border rounded-lg p-4 cursor-pointer" style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}>
               <summary className="font-medium" style={{ color: 'var(--color-text-primary)' }}>What payment methods are supported?</summary>
               <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We support all major credit cards, PayPal, and localized internal wallets depending on the seller's verified settings.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
