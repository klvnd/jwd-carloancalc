import Slider from "@/components/slider";
import Count from "@/components/count";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main id="main">
      <section id="home" className="w-full h-screen flex flex-col items-center justify-center p-10">
        <Slider />
      </section>
      <section id="about" className="w-full flex flex-col items-center p-10">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="max-w-2xl text-center mt-10 text-gray-500">
          Welcome to our Car Loan Calculator – a simple and efficient tool designed to help you plan and manage your car loan payments. Whether you&apos;re considering buying a new or used car, this calculator provides an easy way to estimate your monthly installments based on your loan amount, interest rate, and loan term.
        </p>
        <h2 className="text-2xl font-semibold mt-8">How it Works</h2>
        <p className="max-w-2xl text-center mt-4 text-gray-500">
          Simply enter the details of your car loan, including the price of the car, the down payment, the loan term (number of years), and the interest rate. The calculator will instantly compute your monthly installment and provide a clear breakdown of the total repayment amount over the loan period.
        </p>
        <h2 className="text-2xl font-semibold mt-8 text-left">Features</h2>
        <ul className="list-disc list-inside mt-4 text-gray-500 text-left max-w-80 space-y-4">
          <li>
            <strong>Quick and Accurate:</strong>
            <br />
            Instantly calculate your monthly installments with just a few inputs.
          </li>
          <li>
            <strong>Customizable:</strong>
            <br />
            Adjust the loan amount, down payment, loan term, and interest rate to suit your needs.
          </li>
          <li>
            <strong>Clear Results:</strong>
            <br />
            View the total loan amount, interest paid, and monthly installment details.
          </li>
          <li>
            <strong>Flexible:</strong>
            <br />
            Ideal for anyone planning to finance their car purchase and manage their budget.
          </li>
        </ul>
      </section>
      <section id="count" className="flex justify-center items-center h-screen">
        <Count />
      </section>
      <section id="contact" className="w-full flex flex-col items-center justify-center p-10 bg-white">
        <Contact />
      </section>
    </main>
  );
}
