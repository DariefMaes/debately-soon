import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Notify } from "./notify";

export const MailchimpNotify: React.FC = () => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL!;

  return (
    <MailchimpSubscribe
      url={url}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <Notify
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        );
      }}
    />
  );
};
