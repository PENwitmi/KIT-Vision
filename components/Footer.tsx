import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white mb-2">京都工芸繊維大学</h2>
          <p className="text-sm">Kyoto Institute of Technology</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm mb-4">
            〒606-8585 京都市左京区松ヶ崎橋上町1番地
          </p>
          <div className="flex md:justify-end space-x-4 text-sm">
             <a href="#" className="hover:text-white transition-colors">公式サイト</a>
             <a href="#" className="hover:text-white transition-colors">入試情報</a>
             <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} KIT Vision Guide. Unofficial Summary.</p>
      </div>
    </footer>
  );
};