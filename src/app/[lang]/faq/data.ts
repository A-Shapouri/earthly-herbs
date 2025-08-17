export const faqItems = [
  {
    section: 'Shipping & Delivery',
    items: [
      {
        id: 'shipping-1',
        question: 'How much does shipping cost?',
        answer: `<div class="space-y-4">
            <p>Shipping is calculated at checkout based on your cart total and destination.</p>
            
            <div class="space-y-2">
              <h4 class="font-medium">Regular Orders (excluding wholesale):</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full border-collapse">
                  <thead>
                    <tr class="border-b">
                      <th class="text-left py-2 px-4">Location</th>
                      <th class="text-left py-2 px-4">Canada Post</th>
                      <th class="text-left py-2 px-4">Free Shipping Threshold</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4">Canadian Provinces</td>
                      <td class="py-2 px-4">$15 (2–8 business days)</td>
                      <td class="py-2 px-4">Orders over $70</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">Canadian Territories</td>
                      <td class="py-2 px-4">$30 (6–12 business days)</td>
                      <td class="py-2 px-4">Orders over $130</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">Continental USA</td>
                      <td class="py-2 px-4">$20 (4–10 business days)</td>
                      <td class="py-2 px-4">Orders over $85 CAD</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">Alaska, Hawaii</td>
                      <td class="py-2 px-4">$30 (8–12 business days)</td>
                      <td class="py-2 px-4">Orders over $200 CAD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  
            <div class="space-y-2">
              <h4 class="font-medium">Wholesale Orders:</h4>
              <p>Shipping rates vary by region and order value. Orders may be shipped via Canada Post or UPS. Earthly Herbs will determine the method at the time of shipping.</p>
              
              <div class="overflow-x-auto">
                <table class="min-w-full border-collapse">
                  <thead>
                    <tr class="border-b">
                      <th class="text-left py-2 px-4">Region</th>
                      <th class="text-left py-2 px-4">Order Value</th>
                      <th class="text-left py-2 px-4">Shipping Cost & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4" rowspan="4">Ontario & Quebec</td>
                      <td class="py-2 px-4">$0–$300</td>
                      <td class="py-2 px-4">$20 (2–4 business days)</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$300–$500</td>
                      <td class="py-2 px-4">$35</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$500–$1200</td>
                      <td class="py-2 px-4">$65</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$1200+</td>
                      <td class="py-2 px-4">FREE</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4" rowspan="4">MB, NB, NS, PEI, SK</td>
                      <td class="py-2 px-4">$0–$300</td>
                      <td class="py-2 px-4">$26 (3–6 business days)</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$300–$500</td>
                      <td class="py-2 px-4">$45</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$500–$1000</td>
                      <td class="py-2 px-4">$75</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$1000+</td>
                      <td class="py-2 px-4">$145</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4" rowspan="4">AB, BC</td>
                      <td class="py-2 px-4">$0–$300</td>
                      <td class="py-2 px-4">$26 (6–10 business days)</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$300–$500</td>
                      <td class="py-2 px-4">$45</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$500–$1000</td>
                      <td class="py-2 px-4">$80</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$1000+</td>
                      <td class="py-2 px-4">$145</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4" rowspan="4">NL, NT, NU, YT</td>
                      <td class="py-2 px-4">$0–$300</td>
                      <td class="py-2 px-4">$65 (8–12 business days)</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$300–$500</td>
                      <td class="py-2 px-4">$95</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$500–$1000</td>
                      <td class="py-2 px-4">$130</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$1000+</td>
                      <td class="py-2 px-4">$180</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4" rowspan="4">Continental USA</td>
                      <td class="py-2 px-4">$0–$300</td>
                      <td class="py-2 px-4">$30 (4–10 business days)</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$300–$500</td>
                      <td class="py-2 px-4">$80</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$500–$1000</td>
                      <td class="py-2 px-4">$145</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$1000+</td>
                      <td class="py-2 px-4">$250</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4" rowspan="4">Alaska, Hawaii</td>
                      <td class="py-2 px-4">$0–$300</td>
                      <td class="py-2 px-4">$65 (8–12 business days)</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$300–$500</td>
                      <td class="py-2 px-4">$95</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$500–$1000</td>
                      <td class="py-2 px-4">$180</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4">$1000+</td>
                      <td class="py-2 px-4">$250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>`,
      },
      {
        id: 'shipping-2',
        question: 'Delivery Times (Retail)',
        answer: `<div class="overflow-x-auto">
            <table class="min-w-full border-collapse">
              <thead>
                <tr class="border-b">
                  <th class="text-left py-2 px-4">Destination</th>
                  <th class="text-left py-2 px-4">Estimated Delivery Time</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="py-2 px-4">Ontario & Quebec</td>
                  <td class="py-2 px-4">1–3 business days</td>
                </tr>
                <tr class="border-b">
                  <td class="py-2 px-4">Other Canadian Provinces</td>
                  <td class="py-2 px-4">4–5 business days</td>
                </tr>
                <tr class="border-b">
                  <td class="py-2 px-4">Territories (YT, NT, NU)</td>
                  <td class="py-2 px-4">8–10 business days</td>
                </tr>
                <tr class="border-b">
                  <td class="py-2 px-4">Continental USA</td>
                  <td class="py-2 px-4">3–10 business days</td>
                </tr>
              </tbody>
            </table>
          </div>`,
      },
      {
        id: 'shipping-3',
        question: 'How do I track my shipment?',
        answer: "You'll receive an email with a tracking number once your order is shipped. Check your spam/junk folder if you don't see it.",
      },
      {
        id: 'shipping-4',
        question: 'What are your shipping policies?',
        answer: 'All orders ship from Ontario, Canada. Orders are usually processed within 1–3 business days.',
      },
    ],
  },
  {
    section: 'Returns & Cancellations',
    items: [
      {
        id: 'returns-1',
        question: 'What is your return policy?',
        answer: `We accept returns for unopened and unused products within 14 days of receipt.
  
  Return Shipping:
  Customers are responsible for return shipping unless the item was incorrect or damaged.`,
      },
      {
        id: 'returns-2',
        question: 'How do I return something?',
        answer: `Email us at operations@earthlyherbs.ca with:
  
  ● Your order number
  ● Invoice number
  ● Reason for return`,
      },
      {
        id: 'returns-3',
        question: "What can't be returned?",
        answer: `● Sample sizes or Sampler Pack Collections
  ● Opened products that are not defective
  ● Custom blends
  ● Special orders, custom-sourced ingredients, or teabag materials`,
      },
      {
        id: 'returns-4',
        question: 'What happens if my order is damaged or incomplete?',
        answer: "Email us within 14 days of receipt. We'll replace or refund items that are damaged or missing.",
      },
      {
        id: 'returns-5',
        question: 'What if I change my mind after ordering?',
        answer: `● If canceled before packing, a full refund will be issued.
  ● If already packed, a 15% restocking fee applies.`,
      },
      {
        id: 'returns-6',
        question: 'How will I be refunded?',
        answer: 'Refunds may be issued to your original payment method or as a gift certificate. It may take up to 3 business days depending on your bank.',
      },
    ],
  },
  {
    section: 'Custom Orders & Product Information',
    items: [
      {
        id: 'custom-1',
        question: 'Do you offer custom blending?',
        answer: 'Yes! We offer custom and naturopathic blends. Contact info@earthlyherbs.ca for pricing.',
      },
      {
        id: 'custom-2',
        question: 'Earthly Herbs Teabag Material',
        answer: 'Our pyramid tea bags are made from PLA mesh derived from corn starch. Strings are cotton, and tags are paper. They are fused using ultrasonic vibrational sealing (no glue or staples).',
      },
    ],
  },
  {
    section: 'Ingredients & Allergens',
    items: [
      {
        id: 'ingredients-1',
        question: 'Is Earthly Herbs nut-free?',
        answer: `No. Although we avoid peanuts and take precautions, our facility uses:
  ● Almonds
  ● Cashews
  ● Pumpkin Seeds
  ● Sunflower Seeds
  ● Walnuts`,
      },
      {
        id: 'ingredients-2',
        question: 'What if I find an insect in my tea?',
        answer: `Earthly Herbs is 100% organic and pesticide-free. Rarely, herbs may attract insects.
  ● We refund affected products if reported within 30 days.
  ● Freeze the product at -1 to -10°C and email us immediately.`,
      },
    ],
  },
  {
    section: 'Payment',
    items: [
      {
        id: 'payment-1',
        question: 'What types of payment do you accept?',
        answer: `● Visa, Mastercard, Debit Visa, PayPal (including Amex via PayPal)
  ● Credit card by phone
  ● For businesses: e-transfers, EFTs, business cheques (cleared before shipping)`,
      },
    ],
  },
  {
    section: 'Order Help & Contact',
    items: [
      {
        id: 'help-1',
        question: 'How do I change my order?',
        answer: "We can't change orders once placed, but we can cancel them before shipping. Email operations@earthlyherbs.ca.",
      },
      {
        id: 'help-2',
        question: 'Who can I contact about my order?',
        answer: "Email operations@earthlyherbs.ca and we'll be happy to help.",
      },
    ],
  },
  {
    section: 'Website & Technical Issues',
    items: [
      {
        id: 'tech-1',
        question: "Why isn't your website working?",
        answer: `Email us at operations@earthlyherbs.ca with:
  ● Your browser
  ● Device type (desktop, tablet, phone)
  ● Description of the issue`,
      },
    ],
  },
  {
    section: 'Miscellaneous',
    items: [
      {
        id: 'misc-1',
        question: 'What are "Natural Essences"?',
        answer: `Our natural essences are:
  ● Organic-compliant
  ● Vegan, gluten-free, sugar-free (except maple tea)
  ● Made with ethyl alcohol + natural compounds (not essential oils)
  
  These flavorings are safe for tea use and approved by organic certifiers. Exact recipes are proprietary.`,
      },
    ],
  },
];
