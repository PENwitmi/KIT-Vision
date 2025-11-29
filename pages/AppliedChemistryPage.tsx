import React from 'react';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../components/SectionWrapper';
import {
  ArrowLeft,
  BookOpen,
  FlaskConical,
  Users,
  Briefcase,
  GraduationCap,
  Microscope,
  Atom,
  TestTube,
  Dna,
  Building2,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

// Hero Section for Applied Chemistry
const AppliedChemistryHero: React.FC = () => {
  return (
    <div className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-kit-blue via-slate-800 to-emerald-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-emerald-400/20 rounded-full" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white pt-20">
        <Link
          to="/"
          className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} className="mr-2" />
          KIT Vision トップへ戻る
        </Link>

        <p className="text-lg md:text-xl font-bold tracking-[0.15em] mb-4 text-emerald-300 uppercase">
          Department of Applied Chemistry
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 tracking-wide">
          応用化学課程
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed">
          化学の全分野を基礎から学び、<br className="hidden md:block"/>
          4つの専門コースで未来を拓く
        </p>
      </div>
    </div>
  );
};

// Course Card Component
interface CourseCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  topics: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({ title, icon, color, topics }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg mr-4 ${color.replace('bg-', 'bg-').replace('-600', '-50')} ${color.replace('bg-', 'text-')}`}>
            {icon}
          </div>
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        </div>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="text-sm text-slate-600 flex items-start">
              <ChevronRight size={14} className="mr-1 mt-1 text-slate-400 flex-shrink-0" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Research Area Card
interface ResearchAreaProps {
  title: string;
  labs: string;
  topics: string[];
}

const ResearchAreaCard: React.FC<ResearchAreaProps> = ({ title, labs, topics }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-emerald-300 text-sm mb-4">{labs}</p>
      <ul className="space-y-1">
        {topics.map((topic, index) => (
          <li key={index} className="text-sm text-gray-300 flex items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 mt-1.5 flex-shrink-0" />
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Page Component
export const AppliedChemistryPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AppliedChemistryHero />

      {/* Section 1: Education Curriculum */}
      <SectionWrapper id="curriculum" title="教育カリキュラムの特徴" subtitle="Curriculum">
        {/* 1-1: Basic Education */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-kit-red/10 text-kit-red rounded-lg mr-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold">徹底した基礎教育（1〜2年次前期）</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-100 p-6 rounded-xl">
              <h4 className="font-bold text-slate-800 mb-2">化学の全分野を網羅</h4>
              <p className="text-sm text-slate-600">物理化学、有機化学、無機化学、分析化学、化学工学を全員が学ぶ</p>
            </div>
            <div className="bg-stone-100 p-6 rounded-xl">
              <h4 className="font-bold text-slate-800 mb-2">理系基礎力の構築</h4>
              <p className="text-sm text-slate-600">化学・物理・数学の基礎学力を幅広く習得</p>
            </div>
            <div className="bg-stone-100 p-6 rounded-xl">
              <h4 className="font-bold text-slate-800 mb-2">総合的な視野の養成</h4>
              <p className="text-sm text-slate-600">特定分野に偏らず、化学全体を俯瞰する力を育成</p>
            </div>
          </div>
        </div>

        {/* 1-2: Four Courses */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg mr-4">
              <FlaskConical size={24} />
            </div>
            <h3 className="text-2xl font-bold">4つの専門コース（2年次後期〜）</h3>
          </div>
          <p className="text-slate-600 mb-8">2年次後期から専門性を深める4コースを選択</p>

          <div className="grid md:grid-cols-2 gap-6">
            <CourseCard
              title="高分子材料デザインコース"
              icon={<Atom size={24} />}
              color="bg-blue-600"
              topics={[
                "合成高分子、機能性ポリマー、繊維材料",
                "光機能性高分子、高分子劣化、高分子物理学",
                "ソフトマター物理、計算物理"
              ]}
            />
            <CourseCard
              title="材料化学デザインコース"
              icon={<Microscope size={24} />}
              color="bg-purple-600"
              topics={[
                "無機材料、セラミックス、ガラス",
                "ナノ材料、量子化学計算、表面改質",
                "励起分子工学、超高速分光学"
              ]}
            />
            <CourseCard
              title="分子化学デザインコース"
              icon={<TestTube size={24} />}
              color="bg-amber-600"
              topics={[
                "有機合成化学、液晶化学、複素環化学",
                "有機フッ素化学、有機金属化学",
                "精密高分子合成、機能性材料創製"
              ]}
            />
            <CourseCard
              title="機能物質デザインコース"
              icon={<Dna size={24} />}
              color="bg-emerald-600"
              topics={[
                "生体関連化学、バイオマテリアル",
                "生物化学工学、化学工学、抗体工学",
                "物質分析学、環境計測学、応用微生物学"
              ]}
            />
          </div>
        </div>

        {/* 1-3: Cross-course system */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-kit-blue to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">コース横断的履修システム</h3>
            <p className="text-gray-200 leading-relaxed mb-4">
              3年次は自分の選んだコース（自コース）の専門科目を学びながら、他コースの専門科目も履修可能。
              一つの専門に閉じこもらず、化学の広い領域をカバーし、<strong className="text-emerald-300">広い視野と深い専門性の両立</strong>を実現します。
            </p>
          </div>
        </div>

        {/* 1-4: 3x3 System */}
        <div>
          <div className="flex items-center mb-6">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-lg mr-4">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-bold">3×3制度による大学院へのシームレス接続</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <h4 className="font-bold text-slate-800 mb-2">学部4年次（B4=M0）</h4>
              <p className="text-sm text-slate-600">優秀な学生は大学院科目を先取り履修</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <h4 className="font-bold text-slate-800 mb-2">総合評価</h4>
              <p className="text-sm text-slate-600">達成度テスト・TOEIC・GPAで大学院推薦入学特別入試の推薦候補に</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
              <h4 className="font-bold text-slate-800 mb-2">研究時間の最大化</h4>
              <p className="text-sm text-slate-600">卒業研究からM1の研究にシームレスに移行、海外留学・インターンの時間も確保</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Research Labs */}
      <SectionWrapper id="research" title="研究室・教員の充実" subtitle="Research" dark>
        <div className="mb-12">
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            応用化学課程には<strong className="text-emerald-300">約60名の教員</strong>が在籍し、
            多様な研究分野をカバーしています
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ResearchAreaCard
            title="高分子材料デザインコース"
            labs="約15研究室"
            topics={[
              "機能高分子設計、高分子フォトニクス、高分子物理学",
              "繊維高分子材料、繊維高分子力学、物性物理学",
              "ナノ材料化学、高分子合成化学"
            ]}
          />
          <ResearchAreaCard
            title="材料化学デザインコース"
            labs="約10研究室"
            topics={[
              "原子分子物理化学、励起分子工学、セラミック物理学",
              "ナノ物性化学、無機材料設計学、集積材料・異相界面科学",
              "生体材料工学、アモルファス工学"
            ]}
          />
          <ResearchAreaCard
            title="分子化学デザインコース"
            labs="約15研究室"
            topics={[
              "分子合成化学、有機フッ素化学、先進分子材料創成学",
              "機能性高分子材料学、精密有機材料学、応用錯体化学",
              "有機分子材料化学、機能合成化学、反応・触媒設計学"
            ]}
          />
          <ResearchAreaCard
            title="機能物質デザインコース"
            labs="約15研究室"
            topics={[
              "生体分子機能化学、生体高分子情報、化学工学",
              "分子構造化学、生物物理化学、物質分析学",
              "バイオセンシング、生物創成学、環境計測学"
            ]}
          />
        </div>

        {/* Research Environment */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Building2 className="mr-3" /> 最先端設備と研究環境
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">新素材イノベーションラボ</h4>
              <p className="text-sm text-gray-300">世界レベルの材料研究拠点、超階層材料の創製</p>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">少人数研究指導</h4>
              <p className="text-sm text-gray-300">教員と学生の距離が近く、密な研究指導</p>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">最新測定機器</h4>
              <p className="text-sm text-gray-300">NMR、X線回折装置、電子顕微鏡、走査プローブ顕微鏡など充実</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Research Topics */}
      <SectionWrapper id="topics" title="具体的な研究テーマ例" subtitle="Research Topics">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Polymer */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                <Atom size={20} />
              </div>
              <h4 className="font-bold text-slate-800">高分子材料系</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>・光機能性高分子の合成と物性評価</li>
              <li>・高分子劣化反応機構の解明とサステナビリティ</li>
              <li>・有機/カーボン機能材料の創製と光電子物性</li>
              <li>・ソフトマター物理（生体膜、液晶、タンパク質）</li>
            </ul>
          </div>

          {/* Inorganic/Nano */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-3">
                <Microscope size={20} />
              </div>
              <h4 className="font-bold text-slate-800">無機・ナノ材料系</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>・カーボンナノチューブの機能化と材料化</li>
              <li>・セラミックスの結晶化と高温物性</li>
              <li>・量子化学計算による機能性ナノ材料創製</li>
              <li>・表面ナノ構造の作製とSPM解析</li>
            </ul>
          </div>

          {/* Organic Synthesis */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg mr-3">
                <TestTube size={20} />
              </div>
              <h4 className="font-bold text-slate-800">有機合成・分子設計系</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>・液晶分子の設計と機能性材料開発</li>
              <li>・有機フッ素化合物の合成と応用</li>
              <li>・複素環化学・医薬品化学</li>
              <li>・有機無機複合型化合物・錯体の開拓</li>
            </ul>
          </div>

          {/* Bio */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg mr-3">
                <Dna size={20} />
              </div>
              <h4 className="font-bold text-slate-800">生体関連・バイオ系</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>・生理活性物質の構造・機能解析</li>
              <li>・疾患診断法の開発・生体分子の機能制御</li>
              <li>・微生物による機能性物質生産</li>
              <li>・バイオマテリアルの開発</li>
            </ul>
          </div>

          {/* Analysis/Environment */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-teal-100 text-teal-600 rounded-lg mr-3">
                <FlaskConical size={20} />
              </div>
              <h4 className="font-bold text-slate-800">分析・環境系</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>・金属・生体膜を利用した分離分析法開発</li>
              <li>・環境計測・大気水圏科学</li>
              <li>・ナノバイオサイエンス</li>
              <li>・バイオセンシング</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: Career */}
      <SectionWrapper id="career" title="就職・進路の強み" subtitle="Career" dark>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-emerald-400 mb-2">97.8%</div>
            <p className="text-gray-300">就職率（大学全体）</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-emerald-400 mb-2">70%<span className="text-3xl">超</span></div>
            <p className="text-gray-300">大学院進学率</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Briefcase className="mr-3" /> 主な就職先分野
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { field: "化学・製薬メーカー", examples: "旭化成、住友化学、東レ、花王、資生堂など" },
              { field: "食品・化粧品メーカー", examples: "素材開発、品質管理" },
              { field: "電子・電機メーカー", examples: "パナソニック、ソニー、村田製作所など" },
              { field: "繊維・テキスタイル産業", examples: "機能性繊維開発" },
              { field: "環境・エネルギー関連企業", examples: "" },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold text-emerald-300 mb-1">{item.field}</h4>
                {item.examples && <p className="text-sm text-gray-400">{item.examples}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-300">
            企業評価：<strong className="text-white">「研究レベルが高い大学」全国10位</strong>
          </p>
          <p className="text-gray-400 text-sm mt-2">「基礎能力が高く、真面目な学生」という評価</p>
        </div>
      </SectionWrapper>

      {/* Section 5: Student Voice */}
      <SectionWrapper id="voice" title="学生の声・体験談" subtitle="Student Voice">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-emerald-600 mb-4 flex items-center">
              <CheckCircle2 className="mr-2" /> ポジティブな声
            </h3>
            <div className="space-y-3">
              {[
                "化学の基礎をしっかり学べて、社会人になっても使える知識が多い",
                "少人数できめ細やかな指導が受けられる",
                "自分のやりたい化学研究ができる",
                "他の学科と比べて女子率も高い方",
                "就職実績が良く、有名企業に就職できる",
                "研究室の先輩や教員との距離が近く、質問しやすい"
              ].map((voice, index) => (
                <div key={index} className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                  <p className="text-slate-700 text-sm">「{voice}」</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-600 mb-4 flex items-center">
              <Users className="mr-2" /> 注意点
            </h3>
            <div className="space-y-3">
              {[
                "女子学生が『多い』と聞いて入学すると期待とのギャップがある（工学系としては多いという意味）",
                "実験・レポートが多く、勉強量は多い",
                "しっかり勉強したい人向けの課程"
              ].map((note, index) => (
                <div key={index} className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <p className="text-slate-700 text-sm">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 6: Uniqueness */}
      <SectionWrapper id="unique" title="応用化学課程の独自性" subtitle="Uniqueness" dark>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-bold text-emerald-300 mb-3">「総合的な基礎力」の重視</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              他大学では1年次から専門コース分けするケースも多いが、本課程では<strong className="text-white">1〜2年次前期まで全員が化学全般を学ぶ</strong>。
              この基礎教育により、化学全体を俯瞰する視野と柔軟な思考力を養成。
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-bold text-emerald-300 mb-3">コース横断的な学び</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              自分の専門を深めながら、他コースの科目も履修できるシステム。
              無機から有機、高分子から生物まで、幅広い化学の知識を統合的に習得。
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-bold text-emerald-300 mb-3">「人に優しい実学」の実践</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              大学全体の教育理念「人に優しい実学」が本課程でも実践。
              実験・実習重視のカリキュラムで、理論と実践の両面から化学を学ぶ。
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-bold text-emerald-300 mb-3">新素材イノベーションラボとの連携</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              世界最先端の材料研究拠点での研究機会。
              高分子・繊維材料を中心に、超階層材料の創製を目指す。国際共同研究、産学連携セミナーへの参加機会も。
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7: Curriculum Example */}
      <SectionWrapper id="subjects" title="授業科目の例" subtitle="Subjects">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              year: "1年次",
              subjects: ["基礎化学、物理化学入門", "有機化学入門、無機化学入門", "応用化学実験Ⅰ", "応用化学序論Ⅰ・Ⅱ"]
            },
            {
              year: "2年次",
              subjects: ["物理化学Ⅰ・Ⅱ、有機化学Ⅰ・Ⅱ", "無機化学、分析化学", "化学工学、高分子化学、量子化学", "応用化学実験Ⅱ"]
            },
            {
              year: "3年次",
              subjects: ["各コース専門科目", "他コース横断履修", "応用化学実験Ⅲ"]
            },
            {
              year: "4年次（M0）",
              subjects: ["卒業研究", "大学院科目先取り履修", "（3×3推薦候補者）"]
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-kit-red text-white p-4">
                <h4 className="font-bold text-lg">{item.year}</h4>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {item.subjects.map((subject, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-kit-red mr-2 mt-1.5 flex-shrink-0" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 8: Keywords for Application */}
      <SectionWrapper id="keywords" title="志望動機書のキーワード" subtitle="For Application" dark>
        <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          応用化学課程への志望動機を書く際に盛り込むべきポイント
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "「総合的な基礎力」への共感",
            "「4つのデザインコース」への興味",
            "「コース横断的履修」への期待",
            "「3×3制度」の活用意欲",
            "「新素材イノベーションラボ」への憧れ",
            "具体的な研究分野・研究室への関心",
            "「人に優しい実学」への理解",
            "「少人数教育」への期待",
            "将来のキャリアビジョン"
          ].map((keyword, index) => (
            <div key={index} className="flex items-center bg-white/10 rounded-lg p-4 border border-white/20">
              <CheckCircle2 className="text-emerald-400 mr-3 flex-shrink-0" size={20} />
              <span className="text-white text-sm">{keyword}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 9: Links */}
      <SectionWrapper id="links" title="参考リンク" subtitle="Links">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "応用化学課程公式サイト", url: "https://www.applchem.kit.ac.jp/" },
            { title: "カリキュラム詳細", url: "https://www.applchem.kit.ac.jp/curriculum/" },
            { title: "新素材イノベーションラボ", url: "https://book.mi-lab.kit.ac.jp/" },
            { title: "高分子材料デザインコース", url: "https://www.applchem.kit.ac.jp/course/innovative/" },
            { title: "材料化学デザインコース", url: "https://www.applchem.kit.ac.jp/course/property/" },
            { title: "分子化学デザインコース", url: "https://www.applchem.kit.ac.jp/course/synthesis/" },
            { title: "機能物質デザインコース", url: "https://www.applchem.kit.ac.jp/course/functional/" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow group"
            >
              <span className="font-medium text-slate-800">{link.title}</span>
              <ExternalLink size={18} className="text-slate-400 group-hover:text-kit-red transition-colors" />
            </a>
          ))}
        </div>
      </SectionWrapper>

      {/* Back to Top */}
      <div className="bg-stone-100 py-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-kit-red text-white font-medium rounded-full hover:bg-kit-red/90 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          KIT Vision トップへ戻る
        </Link>
      </div>
    </div>
  );
};
