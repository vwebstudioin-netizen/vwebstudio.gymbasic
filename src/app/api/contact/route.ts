import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, fitnessGoal, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // --- Firebase Firestore (optional) ---
    // Uncomment the block below once you add Firebase credentials to .env.local
    /*
    const { db } = await import('@/lib/firebase');
    const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');

    await addDoc(collection(db, 'contacts'), {
      name,
      email,
      phone: phone || '',
      fitnessGoal: fitnessGoal || '',
      message,
      createdAt: serverTimestamp(),
    });
    */

    // For now, just log to server console
    console.log('📧 New contact submission:', { name, email, phone, fitnessGoal, message });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
