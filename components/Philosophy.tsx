import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export const Philosophy: React.FC = () => {
  return (
    <SectionWrapper id="philosophy" dark title="人に優しい実学" subtitle="Educational Philosophy">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl leading-loose font-serif mb-12 text-blue-100">
          人間の感性を涵養し、精神的な潤いや<br />
          自然との調和を強く意識した科学技術。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-4 text-white">ヒューマン・オリエンテッド</h3>
          <p className="text-gray-300 leading-relaxed">
            技術のための技術ではなく、人々の幸せのための技術を追求。
            単なる機能性だけでなく、使う人の心に寄り添う「優しさ」を科学します。
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-4 text-white">環境との共生</h3>
          <p className="text-gray-300 leading-relaxed">
            地球とそこに生存するあらゆる生物との共生のための利他的視点。
            環境容量の限界を理解し、持続可能な社会を実現する技術者を育成します。
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};