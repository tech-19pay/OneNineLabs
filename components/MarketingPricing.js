import React from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'PLATINUM',
    price: '₹399',
    tagline: '“Start Your Voice.”',
    target: 'For students who are just starting their activist/social presence.',
    features: [
      '10 social media posts',
      '8 stories',
      '2 reels',
      'Captions',
      'Basic hashtags',
      'Creative designs',
      'Awareness/festival content',
      '1 social media platform'
    ],
    color: '#94a3b8',
    gradient: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
  },
  {
    name: 'DIAMOND',
    price: '₹599',
    tagline: '“Build Your Identity.”',
    target: 'Everything in Platinum, plus:',
    features: [
      '14 posts',
      '12 stories',
      '4 reels',
      'Profile optimization',
      'Monthly content calendar',
      'Advanced hashtag strategy',
      '2 awareness/festival creatives'
    ],
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, #f0f9ff 0%, #bae6fd 100%)',
    popular: true
  },
  {
    name: 'CROWN',
    price: '₹799',
    tagline: '“Own Your Campus Presence.”',
    target: 'Everything in Diamond, plus:',
    features: [
      '18 posts',
      '20 stories',
      '6 reels',
      '2 social media platforms',
      'Personal branding strategy',
      'Engagement strategy',
      'Priority support'
    ],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #fffbeb 0%, #fde68a 100%)'
  },
  {
    name: 'ACE',
    price: '₹999',
    tagline: '“Turn Your Voice Into Influence.”',
    target: 'Everything in Crown, plus:',
    features: [
      '20 posts',
      '30 stories',
      '8 reels',
      '2 social media platforms',
      'Advanced personal branding',
      'Advanced engagement strategy',
      'Priority content requests'
    ],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)'
  }
];

export default function MarketingPricing() {
  return (
    <section style={{ padding: '96px 24px', background: '#ffffff', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontSize: '13px', fontWeight: '900', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#ff5a1f', display: 'block', marginBottom: '12px' }}>
            STUDENT & ACTIVIST PLANS
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '900', color: '#0f172a', lineHeight: '1.1', letterSpacing: '-1px', margin: '0 0 16px 0' }}>
            Pricing designed for your growth
          </h2>
          <p style={{ color: '#475569', fontSize: '16px', fontWeight: '600', maxWidth: '600px', margin: '0 auto' }}>
            Choose the tier that matches your goals. Elevate your personal branding, activism, or campus presence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{ 
              background: '#f8fafc', 
              borderRadius: '24px', 
              padding: '32px 24px', 
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: plan.popular ? '0 20px 40px rgba(255, 90, 31, 0.15)' : 'none',
              transform: plan.popular ? 'translateY(-8px)' : 'none',
              border: plan.popular ? '2px solid #ff5a1f' : '1px solid #e2e8f0',
              overflow: 'hidden'
            }}>
              {plan.popular && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: '#ff5a1f', color: '#fff', fontSize: '12px', fontWeight: '800', textAlign: 'center', padding: '6px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Most Popular
                </div>
              )}
              
              <div style={{ marginTop: plan.popular ? '24px' : '0', marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: plan.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  {plan.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-1px' }}>{plan.price}</span>
                  <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '600' }}>/month</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                  {plan.tagline}
                </div>
                <div style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>
                  {plan.target}
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={plan.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500', lineHeight: '1.4' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" style={{ 
                marginTop: '32px',
                width: '100%',
                padding: '14px 0',
                background: plan.popular ? '#ff5a1f' : '#f1f5f9',
                color: plan.popular ? '#ffffff' : '#0f172a',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
