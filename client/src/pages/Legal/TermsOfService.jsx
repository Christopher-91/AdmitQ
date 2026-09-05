import React from 'react';

const TermsOfService = () => {
  return (
    <div className="page container">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Terms of Service</h1>
        <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="content-block card p-4" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Acceptance of Terms</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>
            By accessing and using AdmitQ, you accept and agree to be bound by the terms and
            provisions of this agreement. If you do not agree to abide by these terms, please do
            not use this service.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. User Accounts</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>
            To access certain features of the platform, you must register for an account using a valid
            OAuth provider (such as Google or Apple). You are responsible for maintaining the confidentiality
            of your third-party account credentials.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. User Content</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>
            When you post reviews or comments on universities and programs, you grant AdmitQ a non-exclusive, 
            royalty-free license to use, display, and distribute such content on our platform. You agree not 
            to post content that is abusive, threatening, or violates any third-party rights.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
