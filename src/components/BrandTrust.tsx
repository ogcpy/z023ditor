import nikeLogoSrc from "@/assets/brands/nike-logo.png";
import adidasLogoSrc from "@/assets/brands/adidas-logo.png";
import jdLogoSrc from "@/assets/brands/jd-logo.png";
import fnaticLogoSrc from "@/assets/brands/fnatic-logo.png";

export const BrandTrust = () => {
  const brands = [
    { name: "Nike", logo: nikeLogoSrc },
    { name: "adidas", logo: adidasLogoSrc },
    { name: "JD", logo: jdLogoSrc },
    { name: "Fnatic", logo: fnaticLogoSrc },
    { name: "Diageo", logo: null },
    { name: "Unilever", logo: null },
    { name: "boohooMAN", logo: null },
    { name: "Laureus Sport", logo: null }
  ];

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8 font-medium">
            Trusted by brands like:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity">
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                ) : (
                  <div className="text-lg md:text-xl font-bold text-foreground/60 hover:text-primary transition-colors">
                    {brand.name}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            + Top music artists
          </div>
        </div>
      </div>
    </section>
  );
};