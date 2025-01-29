const WhatWeDo = () => {
  return (
    <>
      <div id="what-we-do" className="flex justify-center w-1/2 mx-auto">
        <div>
          <h3 className="text-2xl italic text-center">what we do</h3>
          <p>
            At Tantalizing Foods, we bring your taste buds to life with a
            delightful range of high-quality and delicious meals. Our mission is
            to create unforgettable culinary experiences by combining fresh
            ingredients, innovative recipes, and a passion for great food.
            <br /> We specialize in:
            <ul className="mt-3 list-disc">
              <li>
                <span className="mr-2 font-semibold">Catering Services:</span>
                Whether it’s a small gathering or a large event, we craft
                tailored menus that suit every occasion, delivering flavors that
                leave a lasting impression.
              </li>
            </ul>
            <ul className="list-disc">
              <li>
                <span className="mr-2 font-semibold">Ready-to-Eat Meals:</span>
                Perfectly prepared and conveniently packaged meals that bring
                restaurant-quality dining right to your home or workplace.
              </li>
            </ul>
            <ul className="list-disc">
              <li>
                <span className="mr-2 font-semibold">
                  Food Supply Solutions:
                </span>
                We partner with businesses to supply top-notch food products,
                ensuring consistent quality and satisfaction. At Tantalizing
                Foods, we’re committed to nourishing your body and delighting
                your senses. Experience the joy of food like never before!
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
