import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const PERSPECTIVES = [
  { title: "利他的視点", desc: "人間中心的世界観の限界を理解し、あらゆる生物との共生を目指す。" },
  { title: "空間的理解", desc: "微視的（ナノ）から巨視的（ギガ）まで、スケールを行き来する視座。" },
  { title: "時間的視点", desc: "過去の歴史を学び、現在を通して、遠い未来へつなぐ思考。" },
  { title: "多様なデータ", desc: "数値的な定量データだけでなく、物語のような定性的シナリオも重視。" },
  { title: "多様性の受容", desc: "文化、性差、世代、国籍。あらゆる境界を超えるオープンな心。" },
  { title: "循環的発展", desc: "直線的な成長モデルから、循環的・文化的な発展モデルへの転換。" },
];

export const FutureCenter: React.FC = () => {
  return (
    <SectionWrapper id="future" title="未来デザイン・工学機構" subtitle="Center for the Possible Futures" className="bg-stone-100">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">「Possible Futures（ありうる未来）」という発想</h3>
        <p className="text-slate-600 leading-relaxed">
          何のために、誰のために、どのような研究・技術を開発するのか。
          2050年を見据え、研究の社会的意義を常に問い続ける、本学の最も先進的な取り組みです。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PERSPECTIVES.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-b-2 border-transparent hover:border-kit-red group">
            <div className="text-kit-red font-bold mb-2 opacity-50 text-sm group-hover:opacity-100 transition-opacity">POINT 0{idx + 1}</div>
            <h4 className="text-lg font-bold mb-3 text-slate-800">{item.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};