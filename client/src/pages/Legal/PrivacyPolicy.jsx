import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="page container">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="content-block card p-4" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Information We Collect</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>
            When you use AdmitQ and sign in via Google or Apple, we collect basic profile information
            such as your name, email address, and profile picture (where available). This information
            is strictly used to create and manage your user account.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. How We Use Your Information</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>
            Your information is used to provide you with a personalized experience on our platform,
            allowing you to write reviews, save university lists, and participate in community discussions.
            We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Data Security</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>
            We implement industry-standard security measures to protect your account data. 
            Authentication is handled securely via OAuth 2.0 protocols directly through Google and Apple, 
            meaning we never see or store your actual passwords.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
