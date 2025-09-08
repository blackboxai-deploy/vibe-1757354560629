// نظام تحليل الحالة الصحية الذكي مبني على خبرة كامل المنجليفي

import { HealthData } from './health-data';

export interface HealthAnalysis {
  overall_score: number;
  bmi: {
    value: number;
    category: string;
    risk_level: 'low' | 'moderate' | 'high';
    recommendations: string[];
  };
  diabetes_risk: {
    level: 'healthy' | 'prediabetes' | 'diabetes' | 'recovered';
    score: number;
    fasting_glucose_status: string;
    hba1c_status: string;
    recommendations: string[];
  };
  cardiovascular_risk: {
    level: 'low' | 'moderate' | 'high';
    blood_pressure_category: string;
    risk_factors: string[];
    recommendations: string[];
  };
  lifestyle_score: {
    exercise: number;
    sleep: number;
    stress: number;
    overall: number;
    improvements: string[];
  };
  priority_actions: string[];
  kamal_insights: string[];
}

class HealthAnalyzer {
  
  // حساب مؤشر كتلة الجسم وتصنيفه
  private calculateBMI(height: number, weight: number) {
    const bmi = weight / ((height / 100) ** 2);
    let category = '';
    let riskLevel: 'low' | 'moderate' | 'high' = 'low';
    let recommendations: string[] = [];

    if (bmi < 18.5) {
      category = 'نحيف';
      riskLevel = 'moderate';
      recommendations = [
        'زيادة السعرات الحرارية الصحية',
        'تناول وجبات صغيرة ومتكررة',
        'ممارسة تمارين المقاومة لبناء العضلات',
        'استشارة أخصائي تغذية'
      ];
    } else if (bmi < 25) {
      category = 'طبيعي';
      riskLevel = 'low';
      recommendations = [
        'الحفاظ على النظام الغذائي الحالي',
        'ممارسة الرياضة بانتظام',
        'المتابعة الدورية للوزن'
      ];
    } else if (bmi < 30) {
      category = 'زيادة وزن';
      riskLevel = 'moderate';
      recommendations = [
        'تقليل السعرات الحرارية بـ 300-500 يومياً',
        'زيادة النشاط البدني',
        'الصيام المتقطع حسب توجيهات كامل',
        'تناول الخضروات قبل الوجبات الرئيسية'
      ];
    } else {
      category = 'سمنة';
      riskLevel = 'high';
      recommendations = [
        'برنامج غذائي منظم مع أخصائي',
        'نظام غذائي منخفض الكربوهيدرات',
        'ممارسة المشي يومياً 45 دقيقة',
        'متابعة طبية دورية',
        'تطبيق نصائح كامل للشفاء من السكري'
      ];
    }

    return {
      value: Math.round(bmi * 10) / 10,
      category,
      risk_level: riskLevel,
      recommendations
    };
  }

  // تحليل مخاطر السكري
  private analyzeDiabetesRisk(data: HealthData) {
    const { fasting, hba1c } = data.glucose;
    let level: 'healthy' | 'prediabetes' | 'diabetes' | 'recovered' = 'healthy';
    let score = 0;
    let fastingStatus = '';
    let hba1cStatus = '';
    let recommendations: string[] = [];

    // تحليل السكر الصائم
    if (fasting < 100) {
      fastingStatus = 'طبيعي';
      score += 25;
    } else if (fasting < 126) {
      fastingStatus = 'مقاومة الأنسولين';
      level = 'prediabetes';
      score += 15;
    } else {
      fastingStatus = 'سكري';
      level = 'diabetes';
      score += 5;
    }

    // تحليل HbA1c
    if (hba1c < 5.7) {
      hba1cStatus = 'ممتاز';
      score += 25;
    } else if (hba1c < 6.5) {
      hba1cStatus = 'مقاومة الأنسولين';
      if (level !== 'diabetes') level = 'prediabetes';
      score += 15;
    } else {
      hba1cStatus = 'سكري';
      level = 'diabetes';
      score += 5;
    }

    // حالة خاصة: إذا كان لديه تاريخ سكري لكن القراءات طبيعية (حالة الشفاء)
    if (data.chronicDiseases.includes('السكري النوع الثاني') && fasting < 100 && hba1c < 5.7) {
      level = 'recovered';
      score = 95; // نقاط عالية للشفاء
    }

    // التوصيات حسب المستوى
    switch (level) {
      case 'healthy':
        recommendations = [
          'الحفاظ على النظام الغذائي الصحي',
          'ممارسة الرياضة بانتظام',
          'فحص دوري سنوي'
        ];
        break;
      case 'prediabetes':
        recommendations = [
          'اتباع نظام غذائي منخفض الكربوهيدرات',
          'تطبيق الصيام المتقطع 16:8',
          'المشي 30 دقيقة يومياً',
          'فحص السكر كل 3 أشهر',
          'تجنب السكريات والحبوب المكررة'
        ];
        break;
      case 'diabetes':
        recommendations = [
          'اتباع خطة كامل للشفاء من السكري',
          'نظام غذائي صارم منخفض الكربوهيدرات',
          'مراقبة السكر يومياً',
          'ممارسة الرياضة تحت إشراف',
          'متابعة طبية شهرية',
          'تناول الخضروات الورقية بكثرة'
        ];
        break;
      case 'recovered':
        recommendations = [
          'الحفاظ على النظام الذي حقق الشفاء',
          'مراقبة دورية للسكر',
          'عدم العودة للعادات القديمة',
          'مشاركة التجربة مع الآخرين',
          'المتابعة مع أخصائي التغذية'
        ];
        break;
    }

    return {
      level,
      score,
      fasting_glucose_status: fastingStatus,
      hba1c_status: hba1cStatus,
      recommendations
    };
  }

  // تحليل مخاطر القلب والأوعية الدموية
  private analyzeCardiovascularRisk(data: HealthData) {
    const { systolic, diastolic } = data.bloodPressure;
    let level: 'low' | 'moderate' | 'high' = 'low';
    let category = '';
    const riskFactors: string[] = [];
    let recommendations: string[] = [];

    // تصنيف ضغط الدم
    if (systolic < 120 && diastolic < 80) {
      category = 'مثالي';
      level = 'low';
    } else if (systolic < 130 && diastolic < 85) {
      category = 'طبيعي';
      level = 'low';
    } else if (systolic < 140 && diastolic < 90) {
      category = 'مرتفع قليلاً';
      level = 'moderate';
      riskFactors.push('ضغط دم مرتفع قليلاً');
    } else {
      category = 'مرتفع';
      level = 'high';
      riskFactors.push('ضغط دم مرتفع');
    }

    // عوامل خطر إضافية
    const bmi = data.weight / ((data.height / 100) ** 2);
    if (bmi > 30) riskFactors.push('السمنة');
    if (data.exercise === 'sedentary') riskFactors.push('قلة النشاط البدني');
    if (data.stress > 3) riskFactors.push('التوتر العالي');
    if (data.chronicDiseases.includes('السكري النوع الثاني')) riskFactors.push('السكري');

    // تحديد مستوى الخطر الإجمالي
    if (riskFactors.length > 2) level = 'high';
    else if (riskFactors.length > 0) level = 'moderate';

    // التوصيات
    recommendations = [
      'تقليل الملح في الطعام',
      'زيادة تناول البوتاسيوم (الموز، البرتقال)',
      'ممارسة الرياضة بانتظام',
      'إدارة التوتر بالتأمل',
      'الإقلاع عن التدخين إن وجد',
      'النوم 7-8 ساعات يومياً'
    ];

    return {
      level,
      blood_pressure_category: category,
      risk_factors: riskFactors,
      recommendations
    };
  }

  // تقييم نمط الحياة
  private evaluateLifestyle(data: HealthData) {
    let exerciseScore = 0;
    let sleepScore = 0;
    let stressScore = 0;
    const improvements: string[] = [];

    // تقييم النشاط البدني
    switch (data.exercise) {
      case 'sedentary':
        exerciseScore = 20;
        improvements.push('زيادة النشاط البدني');
        break;
      case 'light':
        exerciseScore = 50;
        improvements.push('زيادة كثافة التمارين');
        break;
      case 'moderate':
        exerciseScore = 80;
        break;
      case 'vigorous':
        exerciseScore = 100;
        break;
    }

    // تقييم النوم
    const sleepHours = data.sleep.hours;
    const sleepQuality = data.sleep.quality;
    
    if (sleepHours >= 7 && sleepHours <= 9) sleepScore += 50;
    else improvements.push('تحسين عدد ساعات النوم');

    switch (sleepQuality) {
      case 'poor':
        sleepScore += 10;
        improvements.push('تحسين جودة النوم');
        break;
      case 'fair':
        sleepScore += 30;
        improvements.push('تحسين جودة النوم');
        break;
      case 'good':
        sleepScore += 40;
        break;
      case 'excellent':
        sleepScore += 50;
        break;
    }

    // تقييم التوتر (مقياس عكسي)
    stressScore = (6 - data.stress) * 20;
    if (data.stress > 3) improvements.push('إدارة التوتر');

    const overall = Math.round((exerciseScore + sleepScore + stressScore) / 3);

    return {
      exercise: exerciseScore,
      sleep: sleepScore,
      stress: stressScore,
      overall,
      improvements
    };
  }

  // تحليل شامل للحالة الصحية
  analyzeHealth(data: HealthData): HealthAnalysis {
    const bmi = this.calculateBMI(data.height, data.weight);
    const diabetesRisk = this.analyzeDiabetesRisk(data);
    const cardiovascularRisk = this.analyzeCardiovascularRisk(data);
    const lifestyleScore = this.evaluateLifestyle(data);

    // حساب النتيجة الإجمالية
    const overallScore = Math.round((
      (bmi.risk_level === 'low' ? 25 : bmi.risk_level === 'moderate' ? 15 : 10) +
      diabetesRisk.score +
      (cardiovascularRisk.level === 'low' ? 25 : cardiovascularRisk.level === 'moderate' ? 15 : 10) +
      (lifestyleScore.overall * 0.25)
    ));

    // الإجراءات ذات الأولوية
    const priorityActions: string[] = [];
    if (diabetesRisk.level === 'diabetes') priorityActions.push('السيطرة على السكري أولوية قصوى');
    if (cardiovascularRisk.level === 'high') priorityActions.push('خفض ضغط الدم فوراً');
    if (bmi.risk_level === 'high') priorityActions.push('إنقاص الوزن تدريجياً');
    if (lifestyleScore.overall < 50) priorityActions.push('تحسين نمط الحياة');

    // رؤى كامل المنجليفي
    const kamalInsights: string[] = [
      'التغيير التدريجي أفضل من التغيير المفاجئ - هذا ما تعلمته من تجربتي',
      'راقب السكر يومياً في البداية، ثم أسبوعياً عند التحسن',
      'الخضروات الورقية أساسية في كل وجبة - خاصة الجرجير والسبانخ',
      'اشرب كوب ماء دافئ مع الليمون عند الاستيقاظ',
      'المشي بعد الأكل بـ 15 دقيقة يخفض السكر بشكل ملحوظ'
    ];

    // إضافة رؤى خاصة حسب الحالة
    if (diabetesRisk.level === 'recovered') {
      kamalInsights.push('مبروك الشفاء! حافظ على نفس النظام الذي أوصلك لهنا');
    }

    return {
      overall_score: overallScore,
      bmi,
      diabetes_risk: diabetesRisk,
      cardiovascular_risk: cardiovascularRisk,
      lifestyle_score: lifestyleScore,
      priority_actions: priorityActions,
      kamal_insights: kamalInsights
    };
  }
}

export const healthAnalyzer = new HealthAnalyzer();