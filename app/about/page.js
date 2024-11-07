export default function Page() {
    return (
      <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            Welcome to The Lakeside Manor
          </h1>
  
          <div className="space-y-8">
            <p>
              Where natures beauty and comfortable living blend seamlessly.
              Hidden away in the heart of the Italian Dolomites, this is your
              paradise away from home. But its not just about the luxury cabins.
              Its about the experience of reconnecting with nature and enjoying
              simple pleasures with family.
            </p>
            <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace youll find in the surrounding mountains. Wander through lush
              forests, breathe in the fresh air, and watch the stars twinkle above
              from the warmth of a campfire or your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by natures
              splendor. Its a place to slow down, relax, and feel the joy of
              being together in a beautiful setting.
            </p>
          </div>
        </div>
  
        <div className="col-span-2">
          <img
            src="/about-1.jpg"
            alt="Family sitting around a fire pit in front of cabin"
          />
        </div>
  
        <div className="col-span-2">
          <img src="/about-2.jpg" alt="Family that manages The Lakeside Manor" />
        </div>
  
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            Managed by our family since 1962
          </h1>
  
          <div className="space-y-8">
            <p>
              Since 1962, The Lakeside Manor has been a cherished family-run retreat.
              Started by our grandparents, this haven has been nurtured with love
              and care, passing down through our family as a testament to our
              dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, weve maintained the essence of The Lakeside Manor,
              blending the timeless beauty of the mountains with the personal
              touch only a family business can offer. Here, youre not just a
              guest; youre part of our extended family. So join us at The Wild
              Oasis soon, where tradition meets tranquility, and every visit is
              like coming home.
            </p>
  
            <div>
              <a
                href="/cabins"
                className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
              >
                Explore our luxury cabins
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  