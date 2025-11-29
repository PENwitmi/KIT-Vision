import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Users, Lightbulb, Share2, Globe, Briefcase } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <SectionWrapper id="education" title="教育・研究環境" subtitle="Unique Environment">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Small Group */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
          <div className="h-2 bg-kit-blue"></div>
          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-50 text-kit-blue rounded-lg mr-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold">少人数教育の強み</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              学生一人ひとりに目が行き届く環境。「先生一人あたりの生徒が少ない」「先輩や教員との距離が近く、優しい」といった声が多く、研究室配属後はさらに密な指導を受けられます。
            </p>
          </div>
        </div>

        {/* Comprehensive Knowledge */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
          <div className="h-2 bg-emerald-600"></div>
          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg mr-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold">「総合知」の重視</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              自然科学だけでなく、人文・社会科学の考え方も取り入れた知見。異分野融合の実践により、専門分野の「間（ま）」に着目し、新しい価値を創造します。
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-stone-100 p-6 rounded-xl">
           <div className="flex items-center mb-3 text-slate-700 font-bold">
             <Share2 size={20} className="mr-2" /> 組織対組織の連携
           </div>
           <p className="text-sm text-slate-600">「外からのエネルギーを取り込む」。単独では難しい社会課題を、企業や他大学との組織的な連携で解決します。</p>
        </div>
        <div className="bg-stone-100 p-6 rounded-xl">
           <div className="flex items-center mb-3 text-slate-700 font-bold">
             <Globe size={20} className="mr-2" /> クォーター制
           </div>
           <p className="text-sm text-slate-600">1年4学期制により、長期間の海外留学や柔軟な学習計画が可能。世界へ飛び出すチャンスを広げます。</p>
        </div>
        <div className="bg-stone-100 p-6 rounded-xl">
           <div className="flex items-center mb-3 text-slate-700 font-bold">
             <Briefcase size={20} className="mr-2" /> PBL & インターンシップ
           </div>
           <p className="text-sm text-slate-600">課題解決型学習と80%超のインターンシップ参加率。実践的な現場でキャリア形成とスキルアップを図ります。</p>
        </div>
      </div>
    </SectionWrapper>
  );
};