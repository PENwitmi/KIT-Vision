import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { COMPETENCY_DATA } from '../constants';

export const CompetencyChart: React.FC = () => {
  return (
    <SectionWrapper id="leader" title="TECH LEADER" subtitle="Competency Model">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 lg:order-1 h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={COMPETENCY_DATA}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 14, fontWeight: 'bold' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Competency"
                dataKey="A"
                stroke="#B30030"
                strokeWidth={3}
                fill="#B30030"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-center text-sm text-slate-500 mt-2">工繊コンピテンシーの4つの柱</p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">単なる技術者ではない、<br/><span className="text-kit-red">社会をリードする人材</span>へ</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              社会が直面している課題に対し、リーダーシップを発揮しつつプロジェクトを成功に導く人材。それがKITの目指す「TECH LEADER」です。
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-kit-red font-bold mr-4">1</div>
              <div>
                <h4 className="font-bold text-slate-800">専門力</h4>
                <p className="text-sm text-slate-600">深い専門知識と技能の習得。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-kit-red font-bold mr-4">2</div>
              <div>
                <h4 className="font-bold text-slate-800">リーダーシップ</h4>
                <p className="text-sm text-slate-600">プロジェクトを牽引し、チームをまとめる力。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-kit-red font-bold mr-4">3</div>
              <div>
                <h4 className="font-bold text-slate-800">外国語運用能力</h4>
                <p className="text-sm text-slate-600">グローバルな舞台で活躍するための対話力。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-kit-red font-bold mr-4">4</div>
              <div>
                <h4 className="font-bold text-slate-800">個の確立</h4>
                <p className="text-sm text-slate-600">自分の意見を持ち、主体的に行動する自律性。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};