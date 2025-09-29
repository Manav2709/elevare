"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(80, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  company: Yup.string().max(120, "Too Long!"),
  budget: Yup.string(),
  message: Yup.string().min(10, "Please provide a bit more detail").required("Required"),
});

export default function ContactPage() {
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  return (
    <div className="relative pb-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>
      {/* Hero background */}
      <section className="relative pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Tell us about your goals. We’ll respond within a few hours and propose the best path forward.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-blue-400" />
                <span>Avg. response: 2 hours</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <span>hello@elevare.com</span>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
            <Formik
              initialValues={{ name: "", email: "", company: "", budget: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={async (values, { resetForm }) => {
                setStatus(null);
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                  });
                  const data = await res.json();
                  if (res.ok) {
                    setStatus({ ok: true, msg: data.message || "Thanks! We’ll be in touch shortly." });
                    resetForm();
                  } else {
                    setStatus({ ok: false, msg: data.message || "Something went wrong. Please try again." });
                  }
                } catch (e) {
                  setStatus({ ok: false, msg: "Network error. Please try again." });
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Name</label>
                      <Field
                        name="name"
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="mt-1 text-sm text-red-600"><ErrorMessage name="name" /></p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Email</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="mt-1 text-sm text-red-600"><ErrorMessage name="email" /></p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Company (optional)</label>
                      <Field
                        name="company"
                        placeholder="Company name"
                        className="mt-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="mt-1 text-sm text-red-600"><ErrorMessage name="company" /></p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Budget (optional)</label>
                      <Field as="select" name="budget" className="mt-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select a range</option>
                        <option value="<5k">Under $5k</option>
                        <option value="5k-20k">$5k – $20k</option>
                        <option value="20k-50k">$20k – $50k</option>
                        <option value=">50k">Over $50k</option>
                      </Field>
                      <p className="mt-1 text-sm text-red-600"><ErrorMessage name="budget" /></p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">Project Details</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="What are you looking to achieve?"
                      className="mt-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="mt-1 text-sm text-red-600"><ErrorMessage name="message" /></p>
                  </div>

                  {status && (
                    <div className={`rounded-md p-4 ${status.ok ? "bg-green-500/10 text-green-300" : "bg-red-500/10 text-red-300"}`}>
                      {status.msg}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">By submitting, you agree to our terms.</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : (
                        <span className="inline-flex items-center">Send message <ArrowRightIcon className="ml-2 h-5 w-5" /></span>
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Talk to a strategist</h3>
              <p className="mt-2 text-gray-300">Average response time: 2 hours</p>
              <div className="mt-4 space-y-3 text-sm text-gray-300">
                <p className="flex items-center gap-2"><EnvelopeIcon className="h-5 w-5 text-blue-600" /> hello@elevare.com</p>
                <p className="flex items-center gap-2"><PhoneIcon className="h-5 w-5 text-blue-600" /> +1 (415) 555-0123</p>
                <p className="flex items-center gap-2"><MapPinIcon className="h-5 w-5 text-blue-600" /> 123 Business Ave, SF</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
              <h3 className="text-lg font-semibold text-white">Our USP</h3>
              <p className="mt-2 text-gray-200">
                We don’t just market—we elevate. Data-driven strategy + creative storytelling for long-term loyalty and measurable ROI.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
