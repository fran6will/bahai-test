import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, subject, message } = body;

        // Basic validation
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Formulaire Web <onboarding@resend.dev>', // Update this if you have a custom domain verified in Resend
            to: [process.env.CONTACT_EMAIL || 'info@bahaimontreal.org'],
            subject: `Nouveau message de contact: ${subject || 'Général'}`,
            html: `
        <h2>Nouveau message reçu via le site web</h2>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Courriel:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
