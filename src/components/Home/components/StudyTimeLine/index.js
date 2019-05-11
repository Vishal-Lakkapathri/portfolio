import React, { Component } from 'react';

const values = [
  {
    year: 2009,
    degree: 'Schooling',
    name: 'G.M.S',
  },
  {
    year: 2010,
    degree: '',
    name: '',
  },
  {
    year: 2011,
    degree: 'Intermediate',
    name: 'Narayana',
    duration: '2009-2011',
  },
  {
    year: 2012,
    degree: '',
    name: '',
  },
  {
    year: 2013,
    degree: '',
    name: '',
  },
  {
    year: 2014,
    degree: '',
    name: '',
  },
  {
    year: 2015,
    degree: 'B.Tech',
    name: 'S.V.I.T',
    duration: '2011-2015',
  },
  {
    year: 2016,
    degree: '',
    name: '',
  },
  {
    year: 2017,
    degree: 'AutomationTester',
    name: 'I.B.M',
    duration: '2016-2017',
  },
  {
    year: 2018,
    degree: '',
    name: '',
  },
  {
    year: 2019,
    degree: 'FrontEnd Dev',
    name: 'Copart',
    duration: '2017-Present',
  },
];

const Category = ({ categoryName }: string) => <h3 className="fontColor">{categoryName}</h3>;

export default class StudyTimeLine extends Component {
  render() {
    return (
      <div className="w-full flex flex-col items-center flex-start">
        <div className="pb-10">
          <Category
            categoryName="My Education + Experience"
          />
        </div>
        <div className="flex border linearGradient rounded-full h-2 flex flex-row flex-item w-3/4">
          {values.map(value => (
            <div className="flex flex-col items-center w-full justify-center">
              <div className={`flex w-4 h-4 rounded-full bg-white border border-red items-center justify-center ${value.degree === '' ? 'pt-2' : 'pt-8'}`}>
                <div className="flex flex-col pt-20">
                  <p className="pt-3 text-xs">{value.year}</p>
                  {value.degree !== '' ? (
                    <p className="text-xs">
                      {`${value.degree}- ${value.name}`}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
