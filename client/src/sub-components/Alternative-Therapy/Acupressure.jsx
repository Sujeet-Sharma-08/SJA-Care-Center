import React from "react";
import AcupressureImage from "../../assets/Alternative-Therapy/Acupressure.jpg"; // Adjust the path to your image

const Acupressure = () => {
  return (
    <div>

      <head>

      </head>
      <div className="container mx-auto mb-20 px-4 sm:px-6 lg:px-8 mt-24 text-black">
        <div className="flex flex-col mb-10 pb-5">
          <div className="flex justify-center items-center">
            <img
              className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-24"
              src={AcupressureImage}
              alt="Acupressure Therapy Image"
            />
          </div>
          <div className="text-content w-full">
            <h1 className="text-2xl sm:text-4xl font-bold mb-5 mt-10">
              Experience Acupressure Treatment at SJA Care Center
            </h1>

            <p className="text-base sm:text-lg leading-relaxed mb-5">
              Welcome to SJA Care Center, where we specialize in holistic
              therapies aimed at enhancing your well-being. Acupressure is a
              therapeutic technique that draws upon ancient Chinese medicine
              principles to promote healing and relaxation.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              What is Acupressure Treatment?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-5">
              Acupressure is a non-invasive therapy that involves applying gentle
              pressure to specific points on the body. These points correspond to
              energy channels (meridians) believed to influence various aspects of
              health and wellness.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Benefits of Acupressure Treatment:
            </h2>

            <ul className="list-disc list-inside mb-5">
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Pain Relief:</strong> Alleviates muscle and joint pain by
                releasing tension and promoting blood circulation.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Stress Reduction:</strong> Promotes relaxation and reduces
                stress levels by calming the nervous system.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Improved Digestion:</strong> Stimulates digestion and
                helps relieve gastrointestinal discomfort.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Enhanced Energy Flow:</strong> Balances the body's energy
                flow (qi) to promote overall vitality.
              </li>
              <li className="text-base sm:text-lg leading-relaxed">
                <strong>Better Sleep</strong> Facilitates better sleep patterns
                and improves overall sleep quality.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Is Acupressure Treatment Right for You?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5">
              Acupressure Treatment is suitable for individuals seeking natural
              pain relief, stress reduction, and overall wellness enhancement. It
              is safe, and gentle, and can be combined with other medical
              treatments.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Schedule Your Acupressure Treatment Session Today:
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5">
              Discover the therapeutic benefits of Acupressure Treatment at SJA
              Care Center. Contact us today to schedule your appointment and begin
              your journey towards a healthier, more balanced life.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-5">
              At SJA Care Center, we are committed to providing personalized care
              and effective holistic treatments that support your wellness goals.
              Experience the healing power of Acupressure Treatment and take
              charge of your health today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acupressure;
