import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, moveDate, moveType, message } = body

    const client = await clientPromise
    const db = client.db('packerandmovers')
    const collection = db.collection('contacts')

    const result = await collection.insertOne({
      firstName,
      lastName,
      email,
      phone,
      moveDate,
      moveType,
      message,
      createdAt: new Date()
    })

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json({ success: false, error: 'Failed to save contact' }, { status: 500 })
  }
}