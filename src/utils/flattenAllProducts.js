import seoFriendlySlug from "./seoFriendlySlug";

export default function flattenProducts(productsData) {
  const allProducts = [];

  productsData.forEach((cat) => {
    cat.subCategories?.forEach((subCat) => {
      subCat.products?.forEach((prod) => {
        allProducts.push({
          ...prod,
          categorySlug: seoFriendlySlug(cat.categoryName),
          subCategorySlug: seoFriendlySlug(subCat.subCategoryName),
          productSlug: seoFriendlySlug(prod.productName),
        });
      });
    });
  });

  return allProducts;
}
