import React, { useState } from 'react';
import Notification from './Notification';

const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    email: '', 
    address: '', 
    message: '' 
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // REMPLACEZ PAR VOTRE CLÉ REÇUE PAR MAIL
  const STATIC_FORMS_KEY = import.meta.env.VITE_STATIC_FORMS_KEY; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Préparation des données pour StaticForms
    const dataToSend = {
      ...formData,
      accessKey: STATIC_FORMS_KEY,
      subject: "Nouveau contact depuis le site web Doucy&Lys", // Sujet de l'email que vous recevrez
      replyTo: formData.email, // Pour pouvoir répondre directement au client
    };

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ 
          type: 'success', 
          message: 'Merci pour votre message, on revient vite vers vous !' 
        });
        setFormData({ email: '', address: '', message: '' }); // Reset
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: "Votre message n'est pas envoyé, réessayez s'il vous plaît." 
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
        
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Contact</h2>
          <p className="text-slate-500 mt-2">Nous traitons vos demandes en moins de 24h.</p>
        </div>

        <Notification type={status.type} message={status.message} />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">E-mail *</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="jean.dupont@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Adresse */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Adresse (Optionnel)</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder="Paris, France"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Votre Message</label>
            <textarea
              required
              name="message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:bg-slate-400"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer maintenant'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;