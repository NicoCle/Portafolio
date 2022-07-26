import emailjs from "@emailjs/browser";
import type { EmailJSResponseStatus } from "@emailjs/browser";
import { useState } from "react";

const useSendMail = () => {
  const [response, setResponse] = useState<EmailJSResponseStatus>();

  const handleSend = (mailForm: TMailForm) => {
    emailjs
      .send(
        "service_w4e3pyl",
        "template_65t1hy5",
        mailForm,
        "_V96RhhrRN3d_kA8v"
      )
      .then((response) => setResponse(response));
  };
  return { handleSend, response };
};
export default useSendMail;
