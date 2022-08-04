import React, { useState } from 'react';
import data from './data.json';

const Birth = () => {
  const [getPeople, setPeople] = useState(data);

  const removePeople = (id) => {
    setPeople((pre) => pre.filter((el) => el.id !== id));
  };

  const removeAll = () => {
    setPeople([]);
  };

  return (
    <>
      <h2 className="heading__secondary">{getPeople.length} birthdays today</h2>
      {getPeople.length === 0 && <p>There is no one at here!</p>}
      {getPeople.map((el) => {
        const { id, name, age, image } = el;
        return (
          <div key={id} className="birth__detail">
            <img src={image} alt="img" className="birth__img" />
            <h5 className="birth__author">{name}</h5>
            <p className="birth__year">{age} years</p>
            <button className="btn-remove" onClick={() => removePeople(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="birth__icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        );
      })}
      {/* <div className="birth__detail">
        <img src="#" alt="img" className="birth__img" />
        <h5 className="birth__author">Anh Duc</h5>
        <p className="birth__year">29 years</p>
      </div>
      <div className="birth__detail">
        <img src="#" alt="img" className="birth__img" />
        <h5 className="birth__author">Anh Duc</h5>
        <p className="birth__year">29 years</p>
      </div>
      <div className="birth__detail">
        <img src="#" alt="img" className="birth__img" />
        <h5 className="birth__author">Anh Duc</h5>
        <p className="birth__year">29 years</p>
      </div> */}
      <button className="btn" onClick={() => removeAll()}>
        Clear all
      </button>
    </>
  );
};

export default Birth;
