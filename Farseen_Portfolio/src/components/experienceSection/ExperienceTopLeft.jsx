import React from 'react'

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <div className="p-4 rounded-xl border border-lightBrown min-h-[260px] flex flex-col justify-between">
        <div>
          <p className="font-bold text-cyan text-lg mb-2">Python Developer Intern</p>
          <p className="text-orange mb-1">Quest Innovative Solutions, Calicut</p>
          <p className="text-lightGrey mb-2">Feb 2025 – Present</p>
        </div>
        <div>
          <p className="font-bold text-orange mt-4">Project:</p>
          <p className="text-white">Digital Healthcare & Prescription System <span className="font-bold text-"> Name : ClinotiX</span></p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTopLeft;