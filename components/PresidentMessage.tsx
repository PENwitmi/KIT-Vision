import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { KYOTO_IMAGE } from '../constants';

export const PresidentMessage: React.FC = () => {
  return (
    <SectionWrapper id="president" subtitle="Message from the President" title="大学の本質と京都思考">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative">
          <div className="absolute top-[-20px] left-[-20px] w-20 h-20 border-t-4 border-l-4 border-kit-red/20"></div>
          <img src={KYOTO_IMAGE} alt="Kyoto Aesthetics" className="rounded-lg shadow-xl w-full h-[400px] object-cover grayscale-[20%]" />
          <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20 border-b-4 border-r-4 border-kit-red/20"></div>
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6 text-slate-800">
            吉本昌広 学長メッセージ
          </h3>
          <blockquote className="text-lg italic text-slate-600 border-l-4 border-kit-red pl-6 py-2 mb-8 bg-slate-50">
            「真理探究で得られる喜びは、学術の原動力です。新たな価値を作る喜びは、工学の推進力です。丁寧なコミュニケーションや連携を通じてお互いに認め合う先に、共に咲く喜びがあります。」
          </blockquote>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
             <h4 className="font-bold text-kit-blue mb-2">京都思考 (KYOTO Thinking)</h4>
             <p className="text-slate-600 leading-relaxed">
               洗練を追求し、単に技を継承するだけでなく、革新的な挑戦を恐れない姿勢。完璧を求めつつも新しい価値を創造する「心意気」こそが本学のDNAです。
             </p>
          </div>
        </div>
      </div>

      {/* 3 Joys Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "真理探究の喜び", desc: "学術の原動力。知的好奇心を満たし、深く理解するプロセス。", icon: "🔍" },
          { title: "新たな価値創造", desc: "工学の推進力。社会に役立つ新しい技術や概念を生み出す。", icon: "💡" },
          { title: "共に咲く喜び", desc: "コミュニケーションと連携。多様性を認め合い、未来へつながる。", icon: "🤝" }
        ].map((joy, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center border-t-4 border-slate-200 hover:border-kit-red">
            <div className="text-5xl mb-4">{joy.icon}</div>
            <h4 className="text-xl font-bold mb-3">{joy.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{joy.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};