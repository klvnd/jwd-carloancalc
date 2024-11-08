"use client"; // Marks this as a client component

import React, { useState } from 'react';

export default function Count() {
    const [carPrice, setCarPrice] = useState('');
    const [rawCarPrice, setRawCarPrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [tenure, setTenure] = useState('');
    const [monthlyInstallment, setMonthlyInstallment] = useState<number | null>(null);
    const [interestAmount, setInterestAmount] = useState<number | null>(null);
    const [downPaymentAmount, setDownPaymentAmount] = useState<number | null>(null);

    const formatCurrency = (value: string) => {
        const numberValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
        if (isNaN(numberValue)) return '';
        // Use Math.round to remove decimal places
        const roundedValue = Math.round(numberValue);
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(roundedValue);
    };

    const handleCarPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRawCarPrice(e.target.value);
    };

    const handleCarPriceBlur = () => {
        const formattedValue = formatCurrency(rawCarPrice);
        setCarPrice(formattedValue);
    };

    const calculateInstallment = () => {
        // Convert input values to numbers
        const carPriceValue = parseFloat(rawCarPrice.replace(/[^0-9.-]+/g, ''));
        const downPaymentPercentage = parseFloat(downPayment);
        const years = parseFloat(tenure);

        if (isNaN(carPriceValue) || isNaN(downPaymentPercentage) || isNaN(years)) {
            alert('Please enter valid numbers for all fields.');
            return;
        }

        // Calculate interest and down payment
        const interest = carPriceValue * 0.2;
        const downPaymentValue = carPriceValue * (downPaymentPercentage / 100);

        // Total amount after adding interest and deducting down payment
        const totalAfterInterest = carPriceValue + interest;
        const loanAmount = totalAfterInterest - downPaymentValue;

        // Convert years to months
        const months = years * 12;

        // Calculate monthly installment
        const monthlyPayment = loanAmount / months;

        setMonthlyInstallment(monthlyPayment);
        setInterestAmount(interest);
        setDownPaymentAmount(downPaymentValue);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        calculateInstallment();
    };

    return (
        <div className="flex flex-col items-center p-10">
            <form onSubmit={handleSubmit} className="max-w-md w-full bg-gray-900 p-6 rounded-lg shadow-md mb-6">
                <div className="mb-4">
                    <label className="block text-white font-bold mb-2">Car Price:</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={rawCarPrice}
                            onChange={handleCarPriceChange}
                            onBlur={handleCarPriceBlur}
                            className="flex-1 p-2 border border-gray-300 rounded-md text-gray-900 w-full"
                        />
                        <span className="ml-2 text-white">IDR</span>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-white font-bold mb-2">Down Payment:</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={downPayment}
                            onChange={(e) => setDownPayment(e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded-md text-gray-900 w-full"
                        />
                        <span className="ml-2 text-white">%</span>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-white font-bold mb-2">Tenure:</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={tenure}
                            onChange={(e) => setTenure(e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded-md text-gray-900 w-full"
                        />
                        <span className="ml-2 text-white">Years</span>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white rounded-md py-2 font-bold hover:bg-blue-600 transition duration-300"
                >
                    Calculate
                </button>
            </form>

            {monthlyInstallment !== null && (
                <div className="max-w-md w-full bg-gray-200 p-6 rounded-lg shadow-md text-gray-900 flex flex-col justify-between">
                    <h3 className="font-bold text-xl mb-4">Calculation Result</h3>
                    <div className="flex justify-between mb-2">
                        <p className="mr-4"><strong>Car Price:</strong></p>
                        <p>{formatCurrency(rawCarPrice)}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="mr-4"><strong>Down Payment:</strong></p>
                        <p>{downPayment}% ({downPaymentAmount !== null ? formatCurrency(downPaymentAmount.toString()) : 'N/A'})</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="mr-4"><strong>Tenure:</strong></p>
                        <p>{tenure} Years ({Number(tenure) * 12} Months)</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="mr-4"><strong>Interest Amount (20%):</strong></p>
                        <p>{interestAmount !== null ? formatCurrency(interestAmount.toString()) : 'N/A'}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="mr-4"><strong>Monthly Installment:</strong></p>
                        <p>{formatCurrency(monthlyInstallment.toString())} / month</p>
                    </div>
                </div>
            )}
        </div>
    );
}
