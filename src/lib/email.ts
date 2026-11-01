"use server";
import { z } from "zod";
import { formSchema } from "./schema";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
}[character] ?? character));

export async function send(emailFormData: z.infer<typeof formSchema>) { 
    try {
        const firstName = escapeHtml(emailFormData.firstName);
        const message = escapeHtml(emailFormData.message).replace(/\n/g, "<br />");
        
        const { data, error } = await resend.emails.send({
            from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
            to: "bodin.aymeric1@gmail.com",
            subject: 'Contact enquiry from Portfolio',     
            html: `<div><h1>Nouveau message de ${firstName} (${emailFormData.email})</h1><p>${message}</p></div>`,
        });
    
        if (error) {
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        return { success: false, error: err instanceof Error ? err.message : "Erreur inconnue" };
    }
}