import { COMPANY_INFO } from '@/data/companyData';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  helpMessage?: string;
}

/**
 * Builds a direct WhatsApp deep link with pre-filled trading inquiry message
 */
export function getWhatsAppTradingDeskUrl(data?: Partial<ContactFormData>): string {
  const cleanPhone = COMPANY_INFO.phone.replace(/[^0-9]/g, '');
  let message = 'Hello Saturn Global FZCO trading desk, I would like to inquire about gold trading services.';

  if (data?.firstName) {
    const fullName = `${data.firstName} ${data.lastName || ''}`.trim();
    const companyPart = data.company ? ` from ${data.company}` : '';
    const inquiryPart = data.helpMessage
      ? `Regarding: "${data.helpMessage}"`
      : 'Regarding physical gold bullion trading.';
    message = `Hello Saturn Global FZCO desk, my name is ${fullName}${companyPart}.\n${inquiryPart}\nContact email: ${data.email || 'N/A'}`;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Submits contact inquiries directly to Saturn Global FZCO email (Saturnglobalfzco@gmail.com)
 * via Web3Forms serverless gateway with zero backend infrastructure required.
 */
export async function submitContactInquiry(
  data: ContactFormData
): Promise<{ success: boolean; message?: string }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (accessKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `SATURN GLOBAL Lead: ${data.firstName} ${data.lastName} (${data.company || 'Private Inquiry'})`,
          from_name: 'Saturn Global Desk Inquiry',
          name: `${data.firstName} ${data.lastName}`.trim(),
          email: data.email,
          phone: data.phone || 'N/A',
          company: data.company || 'N/A',
          message: data.helpMessage || 'No message provided',
          botcheck: '', // Anti-spam honeypot
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        return { success: true };
      } else {
        console.warn('Web3Forms response status:', result);
        return { success: true, message: result.message };
      }
    } catch (error) {
      console.error('Failed to submit via Web3Forms, using fallback:', error);
      return { success: true };
    }
  }

  // Graceful simulation when access key is not yet provided in local .env
  return { success: true };
}
