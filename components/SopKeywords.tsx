import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const KEYWORDS = [
  { phrase: "「人に優しい実学」への共感", context: "技術のための技術ではなく、ウェルビーイングを追求する姿勢" },
  { phrase: "「京都思考」の理解", context: "伝統を尊重しつつ、革新を続ける心意気と洗練された価値創造" },
  { phrase: "「総合知」への関心", context: "専門分野の深掘りと、異分野融合による新しい視点の獲得" },
  { phrase: "「Possible Futures」への共感", context: "2050年の未来を見据え、「何のために」を問う研究姿勢" },
  { phrase: "「共に咲く喜び」の理解", context: "少人数教育での協働と、互いに認め合うコミュニケーション" },
  { phrase: "「TECH LEADER」への意欲", context: "技術力だけでなく、国際的なリーダーシップを持つ人材へ" },
];

export const SopKeywords: React.FC = () => {
  return (
    <SectionWrapper id="keywords" title="志望動機書作成のポイント" subtitle="Keywords for SOP" className="bg-white">
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-5xl mx-auto">
        <div className="mb-8 text-center">
           <p className="text-slate-600">
             以下のキーワードや視点を志望動機書に盛り込むことで、<br/>
             大学の理念を深く理解していることをアピールできます。
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {KEYWORDS.map((k, i) => (
            <div key={i} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:border-kit-red/50 transition-colors">
              <CheckCircle2 className="text-kit-red mt-1 mr-3 flex-shrink-0" size={20} />
              <div>
                <h5 className="font-bold text-slate-800 mb-1">{k.phrase}</h5>
                <p className="text-sm text-slate-500">{k.context}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center border-t border-slate-200 pt-8">
          <h4 className="font-bold text-lg mb-2">求める学生像 (Admission Policy)</h4>
          <p className="text-slate-600">
            「知識の習得意欲」「課題解決への積極性」「自らの構想力と遂行力」<br/>
            これらを持ち合わせ、21世紀の社会に貢献する意欲を持つ人を求めています。
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};