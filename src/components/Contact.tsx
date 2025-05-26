import React, { useRef, FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    let timeoutId: number;

    if (status === "success" || status === "error") {
      timeoutId = setTimeout(() => {
        setStatus("idle");
      }, 20000); // 20 seconds
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status]);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          LET'S WORK
        </h2>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-700 tracking-tight break-all">
          TOGETHER
        </h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="mt-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-neutral-900 text-white px-4 py-3 rounded-lg focus:outline outline-orange-400/40"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your@email.com"
              required
              className="w-full bg-neutral-900 text-white px-4 py-3 rounded-lg focus:outline outline-orange-400/40"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full h-40 bg-neutral-900 text-white px-4 py-3 rounded-lg focus:outline outline-orange-400/40"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-400/70 hover:bg-orange-600/70 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Submit
        </button>

        {status === "success" && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4">
            Failed to send message. Please send mail on shellygarg3522@gmail.com
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
