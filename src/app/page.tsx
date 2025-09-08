'use client';

import React, { useState, useEffect } from 'react';
import { healthAnalyzer } from '../lib/health-analyzer';
import { nutritionPlanner } from '../lib/nutrition-planner';
import { kamalSuccessStory } from '../lib/health-data';
import Image from 'next/image';

const sampleHealthData = {
  age: 53,
  gender: 'male' as const,
  height: 175,
  weight: 85,
  chronicDiseases: ['السكري النوع الثاني'],
  medications: [],
  allergies: [],
  familyHistory: ['السكري'],
  glucose: {
    fasting: 86,
    hba1c: 5.6
  },
  bloodPressure: {
    systolic: 125,
    diastolic: 80
  },
  exercise: 'moderate' as const,
  sleep: {
    hours: 7,
    quality: 'good' as const
  },
  stress: 2
};

export default function HomePage() {
  const [healthData] = useState(sampleHealthData);
  const [analysis, setAnalysis] = useState(null);
  const [nutritionPlan, setNutritionPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const healthAnalysis = healthAnalyzer.analyzeHealth(healthData);
      const plan = nutritionPlanner.generatePlan(healthAnalysis.diabetes_risk.level);
      setAnalysis(healthAnalysis);
      setNutritionPlan(plan);
      setIsLoading(false);
    }, 1500);
  }, [healthData]);

  const calculateBMI = () => {
    return healthData.weight / ((healthData.height / 100) ** 2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">🧠 جاري تحليل حالتك الصحية...</h2>
          <p className="text-gray-500">نحلل بياناتك ونقترح الخطة العلاجية المناسبة</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ce6c7c2-f28d-4771-ac85-7fc3076038a2.png" 
                alt="كامل المنجليفي - أخصائي التغذية" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-2">صحتك بالدنيا</h1>
            <p className="text-xl opacity-90 mb-2">مع كامل المنجليفي - أخصائي التغذية العلاجية</p>
            <p className="opacity-80">مرجعك الشامل للتعافي والوقاية من الأمراض المزمنة</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 -mt-4">
        
        {/* Overall Health Score */}
        <div className="mb-8 border-2 border-green-200 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl text-green-700 flex items-center justify-center gap-3 mb-4">
                <span className="text-5xl">🏥</span>
                تحليل حالتك الصحية الشامل
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                مبني على تجربة كامل المنجليفي الناجحة في الشفاء من السكري
              </p>
              
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-400 text-white mb-4">
                <span className="text-3xl font-bold">{analysis?.overall_score || 95}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                الدرجة الصحية العامة: {analysis?.overall_score || 95}/100
              </h3>
              <div className="inline-block bg-green-100 text-green-700 text-lg py-2 px-4 rounded-lg font-semibold">
                {analysis?.diabetes_risk.level === 'recovered' ? 'تم الشفاء!' : 'حالة جيدة'}
              </div>
            </div>

            {/* Health Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* BMI Card */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-700">مؤشر كتلة الجسم</h4>
                  <span className="text-3xl">⚖️</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{calculateBMI().toFixed(1)}</div>
                <div className="text-sm text-gray-600">طبيعي (18.5-24.9)</div>
              </div>

              {/* Blood Sugar Card */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-700">السكر الصائم</h4>
                  <span className="text-3xl">🩸</span>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{healthData.glucose.fasting}</div>
                <div className="text-sm text-gray-600">mg/dl - طبيعي</div>
              </div>

              {/* Blood Pressure Card */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-700">ضغط الدم</h4>
                  <span className="text-3xl">💓</span>
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {healthData.bloodPressure.systolic}/{healthData.bloodPressure.diastolic}
                </div>
                <div className="text-sm text-gray-600">مثالي</div>
              </div>

              {/* HbA1c Card */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-700">HbA1c</h4>
                  <span className="text-3xl">📊</span>
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">{healthData.glucose.hba1c}%</div>
                <div className="text-sm text-gray-600">ممتاز (&lt;5.7%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Kamal's Success Story */}
        <div className="mb-8 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-lg shadow-lg">
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-amber-800 mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">🌟</span>
                قصة نجاح كامل المنجليفي
              </h2>
              <p className="text-lg text-amber-700">
                من السكري المرتفع إلى الشفاء التام - رحلة ملهمة للجميع
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-white/60 p-6 rounded-lg">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-2xl font-bold text-red-600 mb-2">450 mg/dl</div>
                <div className="text-sm text-gray-600">السكر قبل العلاج</div>
              </div>
              <div className="text-center bg-white/60 p-6 rounded-lg">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">6 أشهر</div>
                <div className="text-sm text-gray-600">فترة العلاج</div>
              </div>
              <div className="text-center bg-white/60 p-6 rounded-lg">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-2xl font-bold text-green-600 mb-2">86 mg/dl</div>
                <div className="text-sm text-gray-600">السكر بعد الشفاء</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-amber-800 mb-4 italic">
                &quot;{kamalSuccessStory.testimonial}&quot;
              </p>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-bold">
                - كامل المنجليفي، أخصائي التغذية العلاجية
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Plan */}
        {nutritionPlan && (
          <div className="mb-8 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-3">
                <span className="text-4xl">🥗</span>
                خطة التغذية العلاجية المقترحة
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Foods to Include */}
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    الأطعمة المفيدة
                  </h3>
                  <div className="space-y-3">
                    {nutritionPlan.foods_to_include.map((food: { name: string; benefit: string }, index: number) => (
                      <div key={index} className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                        <div className="font-semibold text-green-800">{food.name}</div>
                        <div className="text-sm text-green-600 mt-1">{food.benefit}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Foods to Avoid */}
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">❌</span>
                    الأطعمة التي يجب تجنبها
                  </h3>
                  <div className="space-y-3">
                    {nutritionPlan.foods_to_avoid.map((food: { name: string; reason: string }, index: number) => (
                      <div key={index} className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                        <div className="font-semibold text-red-800">{food.name}</div>
                        <div className="text-sm text-red-600 mt-1">{food.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Meal Timing */}
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  توقيت الوجبات المثالي
                </h3>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  {nutritionPlan.meal_timing.map((meal: { meal: string; time: string; recommendation: string }, index: number) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-blue-700 mb-2">{meal.meal}</div>
                      <div className="text-sm text-blue-600">{meal.time}</div>
                      <div className="text-xs text-gray-600 mt-2">{meal.recommendation}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kamal's Secrets */}
              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔑</span>
                  أسرار كامل المنجليفي
                </h3>
                <div className="space-y-2">
                  {nutritionPlan.kamal_secrets.map((secret: string, index: number) => (
                    <div key={index} className="bg-white/60 p-3 rounded border-l-4 border-purple-400">
                      <div className="text-purple-800 text-sm">{secret}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Health Tips */}
        <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-lg shadow-lg">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">💡</span>
              نصائح كامل المنجليفي الذهبية
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🚶‍♂️",
                  title: "المشي اليومي",
                  tip: "30 دقيقة يومياً بعد الوجبات تساعد في تنظيم السكر"
                },
                {
                  icon: "💧",
                  title: "شرب الماء",
                  tip: "8-10 أكواب يومياً لتحسين وظائف الجسم"
                },
                {
                  icon: "😴",
                  title: "النوم الكافي",
                  tip: "7-8 ساعات نوم عميق لإعادة توازن الهرمونات"
                },
                {
                  icon: "🧘‍♂️",
                  title: "إدارة التوتر",
                  tip: "ممارسة التأمل والاسترخاء يقلل من مستويات الكورتيزول"
                },
                {
                  icon: "📊",
                  title: "المتابعة المنتظمة",
                  tip: "فحص السكر والضغط أسبوعياً لمراقبة التحسن"
                },
                {
                  icon: "🍽️",
                  title: "الأكل الواعي",
                  tip: "تناول الطعام ببطء والتركيز على الوجبة"
                }
              ].map((tip, index) => (
                <div key={index} className="bg-white/60 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">{tip.icon}</div>
                  <h3 className="font-bold text-indigo-700 mb-2">{tip.title}</h3>
                  <p className="text-sm text-indigo-600">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analysis Insights */}
        {analysis?.kamal_insights && (
          <div className="mb-8 bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-lg shadow-lg">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center flex items-center justify-center gap-3">
                <span className="text-4xl">🎯</span>
                رؤى كامل الشخصية لحالتك
              </h2>
              
              <div className="space-y-4">
                {analysis.kamal_insights.map((insight: string, index: number) => (
                  <div key={index} className="bg-white/60 p-4 rounded-lg border-l-4 border-teal-400 flex items-start gap-3">
                    <span className="text-2xl mt-1">💬</span>
                    <div className="text-teal-800">{insight}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">📞</span>
              تواصل مع كامل المنجليفي
            </h2>
            <p className="text-xl opacity-90 mb-6">
              احصل على استشارة شخصية مجانية وابدأ رحلة الشفاء اليوم
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-bold">واتساب</div>
                <div className="opacity-90">+966 XXX XXX XXX</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-bold">البريد الإلكتروني</div>
                <div className="opacity-90">kamal@nutrition.com</div>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                احجز استشارة مجانية الآن
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}