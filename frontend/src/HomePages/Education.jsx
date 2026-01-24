import React from 'react'

export default function Education() {
  return (
    <div className='bg-gray-800 p-6 mt-5 pt-16'>
      <h2 className="text-white text-3xl font-bold border-b-4 border-blue-600 inline-block pb-1 mb-6">
        Education
      </h2>
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'SSLC',
            school: 'Morarji Desai English Medium Residential School Koteshwara, Kundapura',
            percentage: '90.4%',
            totalmarks: '625',
            obtainedmarks: '565',
          },
          {
            title: 'PUC',
            school: 'Karnataka Public School Bidkalkatte, Kundapura, Karnataka',
            percentage: '92.8%',
            totalmarks: '600',
            obtainedmarks: '575',
          },
          {
            title: 'ENGINEERING',
            school: 'Shree Dharmasthala Manjunatheshwara Institute of Techmology Ujire, Dakshinakannada',
            percentage: '8.48',
            totalmarks: '-',
            obtainedmarks: '-',
          },

        ].map((education) => (
          <div
            key={education.title}
            className="bg-gray-700 p-6 hover:shadow-lg"
          >
            <h3 className="text-white font-bold text-lg mb-2">{education.title}</h3>
            <p className="text-white text-sm mb-4">{education.school}</p>
            <p className="text-white text-sm mb-4">percentage: {education.percentage}</p>
            <p className="text-white text-sm mb-4">Total Marks: {education.totalmarks}</p>
            <p className="text-white text-sm mb-4">Obtained Marks: {education.obtainedmarks}</p>
          </div>
        ))}
      </section>

    </div>
  )
}
