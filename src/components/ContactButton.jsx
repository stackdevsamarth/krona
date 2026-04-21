import React from 'react';
import { Mail } from 'lucide-react';

const ContactButton = ({ productName, productLink, className = "" }) => {
  const recipient = "samarthmishra655@gmail.com";

  const currentLink = productLink || (typeof window !== 'undefined' ? window.location.href : '');
  const subject = encodeURIComponent(`Inquiry about ${productName}`);
  const body = encodeURIComponent(
    `Hello KROMA Team,\n\n` +
    `I am interested in the following product:\n` +
    `Product Name: ${productName}\n` +
    `Product Link: ${currentLink}\n\n` +
    `I am interested in this product, please share more details.\n\n` +
    `Best regards,`
  );

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  return (
    <a
      href={mailtoLink}
      className={`btn-primary ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        width: '100%',
        textDecoration: 'none'
      }}
    >
      <Mail size={18} />
      <span>Contact Us for Quote</span>
    </a>
  );
};

export default ContactButton;
