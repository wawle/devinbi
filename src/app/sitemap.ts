import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const languages = ["tr", "en", "de"];

  const baseUrls = [
    "",
    "/products",
    "/contact",
    // Diğer sayfalarınızı buraya ekleyebilirsiniz
  ];

  const urls: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    baseUrls.forEach((url) => {
      urls.push({
        url: `https://www.devinbi.com/${lang}${url}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: url === "" ? 1 : 0.8,
      });
    });
  });

  // Dinamik ürün sayfaları için örnek kod
  // const products = await fetchProducts()
  // products.forEach(product => {
  //   languages.forEach(lang => {
  //     urls.push({
  //       url: `https://www.devinbi.com/${lang}/products/${product.slug}`,
  //       lastModified: new Date(product.updatedAt),
  //       changeFrequency: 'weekly',
  //       priority: 0.6,
  //     })
  //   })
  // })

  return urls;
}
