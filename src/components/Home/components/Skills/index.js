import React from 'react';
import { FaReact, FaJsSquare, FaRetweet } from 'react-icons/fa';
import { GiRam } from 'react-icons/gi';
import { DiReact, DiCode } from 'react-icons/di';

// import JsLogo from '../../../../../assets/logos/js.png';
// import ReactLogo from '../../../../../assets/logos/react.png';
// import ReactNativeLogo from '../../../../../assets/logos/react-native.png';
// import ReaduxLogo from '../../../../../assets/logos/redux.png';
// import ES6Logo from '../../../../../assets/logos/es6.png';

// const SkillCard = ({ title, content }: string) => (
//   <div className="cardBackground items-center justify-center p-3">
//     <p className="text-xl font-semibold">{title}</p>
//     <div className="border border-red" />
//     <p className="text-sm">{content}</p>
//   </div>
// );

const Category = ({ categoryName }: string) => <h3 className="fontColor py-4">{categoryName}</h3>;

export const SkillsList = () => (
  <div className="flex flex-col w-full px-5 items-center">
    <Category
      categoryName="Skills"
    />
    <div className="flex flex-row">
      <div className="flex-col flex items-center justify-center">
        <FaReact
          style={{ color: '#61dafb', fontSize: 40 }}
        />
        <h3 className="text-center">React</h3>
      </div>
      <div className="flex-col flex items-center justify-center  ml-10">
        <FaRetweet
          style={{ color: '#ad6cbe', fontSize: 40 }}
        />
        <h3 className="text-center">Redux</h3>
      </div>
      <div className="flex-col flex items-center justify-center  ml-10">
        <DiReact
          style={{ color: '#333333', fontSize: 40 }}
        />
        <h3 className="text-center">React Native</h3>
      </div>
      <div className="flex-col flex items-center justify-center ml-10">
        <FaJsSquare
          style={{ color: '#f7df1e', fontSize: 40 }}
        />
        <h3 className="text-center">Java Script</h3>
      </div>
      <div className="flex-col flex items-center justify-center  ml-10">
        <GiRam
          style={{ color: '#ad6cbe', fontSize: 40 }}
        />
        <h3 className="text-center">Ramda</h3>
      </div>
      <div className="flex-col flex items-center justify-center  ml-10">
        <DiCode
          style={{ color: '#000000', fontSize: 40 }}
        />
        <h3 className="text-center">ES6</h3>
      </div>
    </div>
  </div>
);
