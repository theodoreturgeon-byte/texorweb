import { NextResponse } from "next/server";

const DESTINATION_EMAIL = "contact@texorweb.com";
const FROM_EMAIL = "TexorWeb <contact@texorweb.com>";

type ContactPayload = {
  nom?: string;
  entreprise?: string;
  courriel?: string;
  typeProjet?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré (RESEND_API_KEY manquante)." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { nom, entreprise, courriel, typeProjet, message } = payload;

  if (!nom || !courriel || !message) {
    return NextResponse.json(
      { error: "Nom, courriel et message sont requis." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(courriel)) {
    return NextResponse.json(
      { error: "Adresse courriel invalide." },
      { status: 400 }
    );
  }

  const html = `
    <h2>Nouvelle demande de soumission — TexorWeb</h2>
    <p><strong>Nom :</strong> ${escapeHtml(nom)}</p>
    <p><strong>Entreprise :</strong> ${escapeHtml(entreprise || "—")}</p>
    <p><strong>Courriel :</strong> ${escapeHtml(courriel)}</p>
    <p><strong>Type de projet :</strong> ${escapeHtml(typeProjet || "—")}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [DESTINATION_EMAIL],
        reply_to: courriel,
        subject: `Nouvelle demande de ${nom}${entreprise ? ` (${entreprise})` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Resend error:", errorBody);
      return NextResponse.json(
        { error: "L'envoi du courriel a échoué. Réessaie plus tard." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Une erreur inattendue est survenue." },
      { status: 500 }
    );
  }
}
