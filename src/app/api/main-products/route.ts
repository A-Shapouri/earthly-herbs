import { NextRequest, NextResponse } from 'next/server';
import { mainProducts } from '../../[lang]/(home)/dummy-data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Return specific product by ID
      const product = mainProducts.find(p => p.id.toString() === id);
      if (product) {
        return NextResponse.json(product);
      } else {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
    }

    // Return all main products
    return NextResponse.json(mainProducts);
  } catch (error) {
    console.error('Main Products API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
