import React from 'react';

const SkillCard = ({ title, content }: string) => (
  <div className="cardBackground items-center justify-center p-3">
    <p className="text-xl font-semibold">{title}</p>
    <div className="border border-red" />
    <p className="text-sm">{content}</p>
  </div>
);

const Category = ({ categoryName }: string) => <h3 className="fontColor">{categoryName}</h3>;

export const SkillsList = () => (
  <div className="flex flex-col items-center">
    <Category
      categoryName="Skills"
    />
    <div className="w-full flex flex-row white px-6 justify-between pt-6">
      <SkillCard
        title="React Native"
        content="React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS and UWP by enabling developers to use React along with native platform"
      />
      <SkillCard
        title="React"
        content="React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS and UWP by enabling developers to use React along with native platform"
      />
      <SkillCard
        title="Redux"
        content="React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS and UWP by enabling developers to use React along with native platform"
      />
      <SkillCard
        title="Ramda JS"
        content="React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS and UWP by enabling developers to use React along with native platform"
      />
    </div>
  </div>
);
