import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { projectTypes } from "../../Data/devmahlatsi.data";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully!", result.text);
      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      formRef.current?.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({ type: "error", message: "Something went wrong. Please try again or email me directly." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 border border-[#1a73e8] p-4 rounded-2xl">
        
        {status.type === "success" && (
          <div className="bg-green-500/20 border border-green-500 text-green-400 p-3 rounded-xl text-sm">
            {status.message}
          </div>
        )}
        
        {status.type === "error" && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl text-sm">
            {status.message}
          </div>
        )}

        <div className="lblnEdt">
          <label className="lblForm" htmlFor="user_name">
            Your Name:
          </label>
          <input
            placeholder="John Doe"
            className="edtInput"
            type="text"
            name="user_name"
            id="user_name"
            required
          />
        </div>

        <div className="lblnEdt">
          <label className="lblForm" htmlFor="user_email">
            Email Address:
          </label>
          <input
            placeholder="JohnDoe@email.com"
            className="edtInput"
            type="email"
            name="user_email"
            id="user_email"
            required
          />
        </div>

        <div className="lblnEdt">
          <label className="lblForm" htmlFor="project_type">
            Project Type:
          </label>
          <select className="edtInput bg-[#272727]" name="project_type" id="project_type" required>
            {projectTypes.map((type) => (
              <option key={type.id} value={type.value}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div className="lblnEdt">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Describe the selected project from above a bit more."
            className="edtInput2"
            name="message"
            id="message"
            rows={6}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            className="w-full p-2 rounded-2xl bg-[#1a73e8] flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSending}
          >
            <span>{isSending ? "Sending..." : "Submit"}</span>
            <IoIosSend />
          </button>
        </div>
      </form>
    </div>
  );
}