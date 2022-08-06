import React from "react";

const Creations = () => {
  return (
    <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
      {/* Creations Header */}
      <div className="flex justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
          Our Creations
        </h2>
        <button className="hidden btn md:block">See All</button>
      </div>


      {/* Items Container */}
      <div className="item-container">
        {/* Item 1 */}

        <div className="group item">
          {/* desktop image */}
          <img
            src="/images/desktop/image-deep-earth.jpg"
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* mobile image */}
          <img
            src="/images/mobile/image-deep-earth.jpg"
            className="w-full md:hidden"
          />

          {/* item gradient */}
          <div className="item-gradient"></div>

          {/* item text */}
          <h5>Deep Earth</h5>
        </div>

        {/* Item 2 */}

        <div className="group item">
          {/* desktop image */}
          <img
            src="/images/desktop/image-night-arcade.jpg"
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* mobile image */}
          <img
            src="/images/mobile/image-night-arcade.jpg"
            className="w-full md:hidden"
          />

          {/* item gradient */}
          <div className="item-gradient"></div>

          {/* item text */}
          <h5>Night Arcade</h5>
        </div>

        {/* Item 3 */}

        <div className="group item">
          {/* desktop image */}
          <img
            src="/images/desktop/image-soccer-team.jpg"
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* mobile image */}
          <img
            src="/images/mobile/image-soccer-team.jpg"
            className="w-full md:hidden"
          />

          {/* item gradient */}
          <div className="item-gradient"></div>

          {/* item text */}
          <h5>Soccer Team VR</h5>
        </div>

        {/* Item 4 */}

        <div className="group item">
          {/* desktop image */}
          <img
            src="/images/desktop/image-grid.jpg"
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* mobile image */}
          <img
            src="/images/mobile/image-grid.jpg"
            className="w-full md:hidden"
          />

          {/* item gradient */}
          <div className="item-gradient"></div>

          {/* item text */}
          <h5>The Grid</h5>
        </div>
      </div>

      <div className="item-container mt-16">
        {/* Item 1 */}

        <div className="group item">
          {/* desktop image */}
          <img
            src="/images/desktop/image-from-above.jpg"
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* mobile image */}
          <img
            src="/images/mobile/image-from-above.jpg"
            className="w-full md:hidden"
          />

          {/* item gradient */}
          <div className="item-gradient"></div>

          {/* item text */}
          <h5>From Up Above VR</h5>
        </div>

        {/* Item 2 */}

        <div className="group item">
          {/* desktop image */}
          <img
            src="/images/desktop/image-pocket-borealis.jpg"
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* mobile image */}
          <img
            src="/images/mobile/image-pocket-borealis.jpg"
            className="w-full md:hidden"
          />

          {/* item gradient */}
          <div className="item-gradient"></div>

          {/* item text */}
          <h5>Pocket Borealis</h5>
        </div>

        {/* Item 3 */}

        <div className="group item">
          {/* desktop image */}
          <img
            src="/images/desktop/image-curiosity.jpg"
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* mobile image */}
          <img
            src="/images/mobile/image-curiosity.jpg"
            className="w-full md:hidden"
          />

          {/* item gradient */}
          <div className="item-gradient"></div>

          {/* item text */}
          <h5>Curiosity</h5>
        </div>

        {/* Item 4 */}

        <div className="group item">
          {/* desktop image */}
          <img
            src="/images/desktop/image-fisheye.jpg"
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* mobile image */}
          <img
            src="/images/mobile/image-fisheye.jpg"
            className="w-full md:hidden"
          />

          {/* item gradient */}
          <div className="item-gradient"></div>

          {/* item text */}
          <h5>Make it Fisheye</h5>
        </div>
      </div>
      {/* bottom button container */}
      <div className="flex justify-center mt-10 md:hidden">
        <button className="btn w-full md:hidden">See All</button>
      </div>
    </div>
  );
};

export default Creations;
