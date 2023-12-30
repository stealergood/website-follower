// import React, { useState } from 'react';
import PropTypes from "prop-types";

const formatRupiah = (number) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return formatter.format(number);
};

export default function Card({theme, categories, handleSwitchCard, switchCard, active, handleBuy}) {

  Card.propTypes = {
    theme: PropTypes.string.isRequired,
    categories: PropTypes.object.isRequired,
    handleSwitchCard: PropTypes.func.isRequired,
    switchCard: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    handleBuy: PropTypes.func.isRequired
  };

  return (
    <div className="w-full min-h-screen p-3 flex flex-col items-center gap-5">
      <div className="flex justify-center items-end gap-1 w-full h-20">
        <button onClick={() => handleSwitchCard("followers")} className={`w-28 h-7 flex items-center justify-center font-medium border ${active === 'followers' ? `bg-${theme === 'light' ? 'navlight' : 'navdark'} text-white border-none` : 'bg-white text-gray-600'} hover:border-none hover:bg-${theme === 'light' ? 'navlight' : 'navdark'} hover:text-white focus:bg-${theme === 'light' ? 'navlight' : 'navdark'} focus:text-white focus:outline-none  border-slate-400 text-gray-600 rounded-lg`}>Followers</button>
        <button onClick={() => handleSwitchCard("likes")} className={`w-28 h-7 flex items-center justify-center font-medium border ${active === 'likes' ? `bg-${theme === 'light' ? 'navlight' : 'navdark'} text-white border-none` : 'bg-white text-gray-600'} hover:border-none hover:bg-${theme === 'light' ? 'navlight' : 'navdark'} hover:text-white focus:bg-${theme === 'light' ? 'navlight' : 'navdark'} focus:text-white focus:outline-none  border-slate-400 text-gray-600 rounded-lg`}>Likes</button>
        <button onClick={() => handleSwitchCard("views")} className={`w-28 h-7 flex items-center justify-center font-medium border ${active === 'views' ? `bg-${theme === 'light' ? 'navlight' : 'navdark'} text-white border-none` : 'bg-white text-gray-600'} hover:border-none hover:bg-${theme === 'light' ? 'navlight' : 'navdark'} hover:text-white focus:bg-${theme === 'light' ? 'navlight' : 'navdark'} focus:text-white focus:outline-none  border-slate-400 text-gray-600 rounded-lg`}>Views</button>
      </div>

      <div className="w-full h-full flex flex-wrap gap-5 justify-center">
        {
          categories[switchCard].map((category, index) => {
            return (
              <div key={index} className={`${theme === 'light' ? 'bg-white' : 'bg-gray-100'} border border-gray-200 w-72 h-96 rounded-2xl flex flex-col gap-5`}>
                <div className="w-full h-fit flex mt-5 justify-center">
                  {category.icon}
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <div className="text-2xl font-bold text-gray-500">{category.name}</div>
                  <div className="text-xl font-medium text-gray-400">{category.value} Followers</div>
                  <ul>
                    <li>
                      <div className="flex items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7B66FF" className="w-4 h-4">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        <div className="text-base text-gray-400 ">Real Account</div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7B66FF" className="w-4 h-4">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        <div className="text-base text-gray-400 ">Pengiriman Cepat</div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7B66FF" className="w-4 h-4">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        <div className="text-base text-gray-400 ">Garansi Anti Drop 10%</div>
                      </div>
                    </li>
                  </ul>
                  <div className="text-2xl text-gray-500 font-medium">{formatRupiah(category.price)}</div>
                  <div className="w-full h-full flex items-center justify-center">
                    <button onClick={() => handleBuy({name: category.value + " " + category.name, price: category.price})} className={`w-1/2 h-10 ${theme === 'light' ? 'bg-navlight' : 'bg-navdark'} rounded-xl text-white hover:bg-opacity-75`}>Beli</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}
