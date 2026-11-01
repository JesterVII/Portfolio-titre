import type { ReactElement } from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string
}

export const EmailTemplate = ({
  firstName,
  message,
}: Readonly<EmailTemplateProps>): ReactElement => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>{message}</p>
  </div>
);