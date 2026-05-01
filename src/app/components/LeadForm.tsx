import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "number";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface LeadFormProps {
  title: string;
  subtitle: string;
  fields: Field[];
  ctaLabel?: string;
  accentColor?: string;
}

export function LeadForm({
  title,
  subtitle,
  fields,
  ctaLabel = "Get My Free Quote",
  accentColor = "#000",
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-xl flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: accentColor + "15" }}
        >
          <CheckCircle size={32} style={{ color: accentColor }} />
        </div>
        <div>
          <h3 className="text-black" style={{ fontSize: "22px", fontWeight: 600 }}>
            You're all set!
          </h3>
          <p className="text-black/50 text-sm mt-2 max-w-xs">
            Thank you for your interest. A specialist will reach out to you within 24 hours to discuss your options.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm underline text-black/40 hover:text-black transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
      <div className="mb-7">
        <h3 className="text-black" style={{ fontSize: "22px", fontWeight: 600 }}>
          {title}
        </h3>
        <p className="text-black/50 text-sm mt-1">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm text-black/70 mb-1.5" style={{ fontWeight: 500 }}>
              {field.label}
              {field.required && <span className="text-red-400 ml-0.5">*</span>}
            </label>

            {field.type === "select" ? (
              <select
                {...register(field.name, { required: field.required })}
                className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 appearance-none cursor-pointer transition-all"
                style={{
                  focusRingColor: accentColor,
                  border: errors[field.name] ? "1.5px solid #ef4444" : "1.5px solid transparent",
                }}
              >
                <option value="">Select an option</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, {
                  required: field.required,
                  ...(field.type === "email" && {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  }),
                })}
                className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all placeholder:text-black/30"
                style={{
                  border: errors[field.name] ? "1.5px solid #ef4444" : "1.5px solid transparent",
                }}
              />
            )}
            {errors[field.name] && (
              <p className="text-red-400 text-xs mt-1">
                {(errors[field.name]?.message as string) || "This field is required"}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full text-white text-sm py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-150 hover:opacity-90 disabled:opacity-60"
          style={{ background: accentColor }}
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Processing...
            </>
          ) : (
            ctaLabel
          )}
        </button>

        <p className="text-center text-xs text-black/30 mt-1">
          No credit check required. 100% free to apply.
        </p>
      </form>
    </div>
  );
}
