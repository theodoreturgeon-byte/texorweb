"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      nom: String(data.get("nom") || ""),
      entreprise: String(data.get("entreprise") || ""),
      courriel: String(data.get("courriel") || ""),
      typeProjet: String(data.get("type-projet") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center bg-white p-8 text-center sm:p-12 lg:p-14">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
          ✓
        </span>
        <h3 className="mt-6 text-2xl font-black text-slate-950">
          Demande envoyée
        </h3>
        <p className="mt-3 max-w-sm leading-7 text-slate-600">
          Merci ! Votre message a bien été reçu. Nous vous répondrons dans les
          plus brefs délais à l&apos;adresse indiquée.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 lg:p-14">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="form-field">
          <span>Nom</span>
          <input type="text" name="nom" placeholder="Votre nom" required />
        </label>
        <label className="form-field">
          <span>Entreprise</span>
          <input
            type="text"
            name="entreprise"
            placeholder="Nom de l’entreprise"
          />
        </label>
      </div>
      <label className="form-field mt-6">
        <span>Adresse courriel</span>
        <input
          type="email"
          name="courriel"
          placeholder="vous@entreprise.com"
          required
        />
      </label>
      <label className="form-field mt-6">
        <span>Type de projet</span>
        <select name="type-projet" defaultValue="" required>
          <option value="" disabled>
            Sélectionnez une option
          </option>
          <option>Nouveau site web</option>
          <option>Refonte d’un site</option>
          <option>Maintenance ou modifications</option>
          <option>Autre</option>
        </select>
      </label>
      <label className="form-field mt-6">
        <span>Parlez-nous de votre projet</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Décrivez brièvement votre entreprise, vos besoins et vos objectifs."
          required
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 w-full rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {status === "error" && (
        <p className="mt-4 text-center text-sm font-semibold text-red-600">
          {errorMessage || "L’envoi a échoué. Réessayez ou écrivez-nous directement à contact@texorweb.com."}
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        En envoyant ce formulaire, votre message est transmis directement à
        notre équipe.
      </p>
    </form>
  );
}
