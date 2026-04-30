import { useEffect, useRef, useState } from 'react';
import Notification from './Notification';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const statusTimeoutRef = useRef(null);

  const STATIC_FORMS_KEY = import.meta.env.VITE_STATIC_FORMS_KEY?.trim();

  useEffect(() => {
    return () => {
      if (statusTimeoutRef.current) {
        clearTimeout(statusTimeoutRef.current);
      }
    };
  }, []);

  const scheduleStatusReset = () => {
    if (statusTimeoutRef.current) {
      clearTimeout(statusTimeoutRef.current);
    }

    statusTimeoutRef.current = window.setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    if (statusTimeoutRef.current) {
      clearTimeout(statusTimeoutRef.current);
    }

    if (!STATIC_FORMS_KEY) {
      setStatus({
        type: 'error',
        message: "Le formulaire n'est pas configuré pour l'envoi. Vérifiez VITE_STATIC_FORMS_KEY.",
      });
      setLoading(false);
      scheduleStatusReset();
      return;
    }

    const dataToSend = {
      ...formData,
      accessKey: STATIC_FORMS_KEY,
      subject: 'Nouveau contact depuis le site web Doucy&Lys',
      replyTo: formData.email,
    };

    try {
      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: 'Merci pour votre message, on revient vite vers vous !'
        });
        setFormData({ email: '', address: '', message: '' });
      } else {
        throw new Error(result.message || "L'envoi du message a échoué.");
      }
    } catch (submissionError) {
      console.error('StaticForms submission failed:', submissionError);
      setStatus({
        type: 'error',
        message: "Votre message n'a pas été envoyé, réessayez s'il vous plaît."
      });
    } finally {
      setLoading(false);
      scheduleStatusReset();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6 lg:p-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between bg-slate-900 px-8 py-10 text-white lg:px-10 lg:py-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">Doucy&Lys</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Contact
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                Dites-nous ce dont vous avez besoin et nous revenons vers vous en moins de 24h avec une
                réponse claire.
              </p>
            </div>

            <div className="mt-10 hidden space-y-4 text-sm text-slate-300 lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="font-semibold text-white">Réponse rapide</p>
                <p className="mt-1">Nous traitons chaque demande sous 24h ouvrées.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="font-semibold text-white">Échange simple</p>
                <p className="mt-1">Laissez votre e-mail et votre message, nous nous occupons du reste.</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-10 lg:px-10 lg:py-12">
            <Notification type={status.type} message={status.message} />

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-sm font-bold text-slate-700">
                    E-mail *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                    placeholder="jean.dupont@gmail.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label htmlFor="contact-address" className="mb-1 block text-sm font-bold text-slate-700">
                    Adresse (optionnel)
                  </label>
                  <input
                    id="contact-address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleFieldChange}
                    placeholder="Paris, France"
                    autoComplete="street-address"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-slate-700">
                  Votre message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  name="message"
                  rows="8"
                  value={formData.message}
                  onChange={handleFieldChange}
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-slate-900 py-4 font-bold text-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-600 active:scale-95 disabled:bg-slate-400"
              >
                {loading ? 'Envoi en cours...' : 'Envoyer maintenant'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
