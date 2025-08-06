export async function GET() {
    // 2. Static URLs
    const staticUrls = [
      '',
      '/about',
      '/services',
      '/contact',
      '/doctors',
      '/book-appointment',
      '/privacy-policy',
      '/terms',
    ];
  
    // 3. Dynamic URLs
  
  
    // 4. Combine all URLs
    const allUrls = [...staticUrls];
  
    // 5. Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls
      .map(
        (url) => `  <url>\n    <loc>https://dhreeticlinics.com${url}</loc>\n  </url>`
      )
      .join('\n')}\n</urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } 