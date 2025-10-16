import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locales";

type PrivacySection = {
  title: string;
  description: string;
  items: string[];
};

type PrivacyDictionary = {
  metaTitle?: string;
  metaDescription?: string;
  title?: string;
  lastUpdated?: string;
  intro?: string;
  sections?: PrivacySection[];
  contact?: {
    title?: string;
    description?: string;
    emailLabel?: string;
    email?: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary<PrivacyDictionary>("privacy", locale);
  const title = dict?.metaTitle ?? "Privacy Policy";
  const description =
    dict?.metaDescription ??
    "Learn how Devinbi collects, uses, and protects your personal data.";
  const image = "/img/logo.png";

  return {
    title,
    description,
    keywords: [
      "Devinbi privacy",
      "data protection policy",
      "software company privacy statement",
      "user data rights",
      "information security practices",
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  };
}

interface PrivacyPageProps {
  params: Promise<{ locale: Locale }>;
}

const PrivacyPage = async ({ params }: PrivacyPageProps) => {
  const { locale } = await params;
  const dict = await getDictionary<PrivacyDictionary>("privacy", locale);
  const sections = dict?.sections ?? [];
  const contact = dict?.contact;

  return (
    <section className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,133,41,0.15),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4">
          <div className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm text-primary">
            {dict?.lastUpdated ?? ""}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            {dict?.title ?? "Privacy Policy"}
          </h1>
          <p className="mx-auto max-w-3xl text-gray-400">
            {dict?.intro ??
              "Your privacy matters to us. This policy explains how we handle your information."}
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-white/10 bg-black/70 p-6 shadow-lg shadow-primary/5 transition hover:border-primary/40"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {section.title}
              </h2>
              <p className="text-sm text-gray-400 mb-5">{section.description}</p>
              <ul className="space-y-3 text-sm text-gray-300">
                {section.items.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {contact && (
          <div className="rounded-2xl border border-primary/40 bg-primary/10 px-6 py-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">
              {contact.title}
            </h2>
            <p className="text-gray-300 mb-4">
              {contact.description}
            </p>
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-sm text-primary transition hover:bg-primary/20"
              >
                <span>{contact.emailLabel ?? "Email"}</span>
                <span className="font-semibold">{contact.email}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivacyPage;
