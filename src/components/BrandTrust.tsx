export const BrandTrust = () => {
  const brands = [
    "Nike",
    "adidas", 
    "JD",
    "Fnatic",
    "Diageo",
    "Unilever",
    "boohooMAN",
    "Laureus Sport"
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
                <div className="text-lg md:text-xl font-bold text-foreground/60 hover:text-primary transition-colors">
                  {brand}
                </div>
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