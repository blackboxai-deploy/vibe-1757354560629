// بيانات قصة نجاح كامل المنجليفي وحالات طبية مختلفة

export interface HealthData {
  age: number;
  gender: 'male' | 'female';
  height: number; // بالسنتيمتر
  weight: number; // بالكيلوغرام
  chronicDiseases: string[];
  medications: string[];
  allergies: string[];
  familyHistory: string[];
  glucose: {
    fasting: number; // mg/dl
    hba1c: number; // %
  };
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  exercise: 'sedentary' | 'light' | 'moderate' | 'vigorous';
  sleep: {
    hours: number;
    quality: 'poor' | 'fair' | 'good' | 'excellent';
  };
  stress: number; // 1-5 scale
}

export interface SuccessStory {
  name: string;
  age: number;
  profession: string;
  beforeTreatment: {
    weight: number;
    glucose: number;
    hba1c: number;
    bloodPressure: { systolic: number; diastolic: number };
    symptoms: string[];
    medications: string[];
  };
  treatmentDuration: string;
  afterTreatment: {
    weight: number;
    glucose: number;
    hba1c: number;
    bloodPressure: { systolic: number; diastolic: number };
    symptoms: string[];
    medications: string[];
  };
  keyChanges: string[];
  advice: string[];
  testimonial: string;
}

// قصة نجاح كامل المنجليفي الحقيقية
export const kamalSuccessStory: SuccessStory = {
  name: 'كامل المنجليفي',
  age: 53,
  profession: 'أخصائي التغذية العلاجية',
  beforeTreatment: {
    weight: 95,
    glucose: 450,
    hba1c: 12.5,
    bloodPressure: { systolic: 160, diastolic: 100 },
    symptoms: [
      'العطش المستمر',
      'التبول المفرط',
      'التعب الشديد',
      'تشوش الرؤية',
      'بطء شفاء الجروح',
      'فقدان الوزن غير المبرر'
    ],
    medications: [
      'ميتفورمين 1000mg',
      'أنسولين طويل المفعول',
      'أنسولين سريع المفعول',
      'أدوية ضغط الدم'
    ]
  },
  treatmentDuration: '6 أشهر',
  afterTreatment: {
    weight: 75,
    glucose: 86,
    hba1c: 5.4,
    bloodPressure: { systolic: 120, diastolic: 75 },
    symptoms: [],
    medications: []
  },
  keyChanges: [
    'اتباع نظام غذائي منخفض الكربوهيدرات',
    'الصيام المتقطع 16:8',
    'المشي يومياً 45 دقيقة',
    'شرب 3 لتر ماء يومياً',
    'تناول الخضروات الورقية بكثرة',
    'تجنب السكريات والحبوب المكررة',
    'النوم 7-8 ساعات يومياً',
    'إدارة التوتر بالتأمل'
  ],
  advice: [
    'الصبر والثبات هما مفتاح النجاح',
    'التغيير التدريجي أفضل من التغيير المفاجئ',
    'متابعة السكر يومياً في البداية',
    'لا تيأس من النتائج البطيئة',
    'اطلب الدعم من العائلة والأصدقاء',
    'تواصل مع أخصائي تغذية مختص'
  ],
  testimonial: 'بفضل الله ثم التزامي بنظام غذائي صحيح وممارسة الرياضة، تمكنت من التخلص نهائياً من السكري والأدوية. اليوم أساعد المئات في تحقيق نفس النجاح.'
};

// بيانات صحية تعكس حالة كامل بعد الشفاء
export const kamalCurrentHealth: HealthData = {
  age: 53,
  gender: 'male',
  height: 175,
  weight: 75,
  chronicDiseases: [],
  medications: [],
  allergies: [],
  familyHistory: ['السكري النوع الثاني', 'أمراض القلب'],
  glucose: {
    fasting: 86,
    hba1c: 5.4
  },
  bloodPressure: {
    systolic: 120,
    diastolic: 75
  },
  exercise: 'moderate',
  sleep: {
    hours: 7.5,
    quality: 'good'
  },
  stress: 2
};

// حالات طبية مختلفة لأغراض التوضيح
export const sampleHealthProfiles = {
  // حالة سكري مبكر
  prediabetes: {
    age: 45,
    gender: 'male' as const,
    height: 170,
    weight: 80,
    chronicDiseases: [],
    medications: [],
    allergies: [],
    familyHistory: ['السكري'],
    glucose: {
      fasting: 110,
      hba1c: 6.0
    },
    bloodPressure: {
      systolic: 130,
      diastolic: 85
    },
    exercise: 'light' as const,
    sleep: {
      hours: 6,
      quality: 'fair' as const
    },
    stress: 3
  },

  // حالة سكري نشط
  diabetes: {
    age: 50,
    gender: 'female' as const,
    height: 165,
    weight: 85,
    chronicDiseases: ['السكري النوع الثاني'],
    medications: ['ميتفورمين'],
    allergies: [],
    familyHistory: ['السكري', 'ضغط الدم'],
    glucose: {
      fasting: 180,
      hba1c: 8.5
    },
    bloodPressure: {
      systolic: 145,
      diastolic: 95
    },
    exercise: 'sedentary' as const,
    sleep: {
      hours: 5.5,
      quality: 'poor' as const
    },
    stress: 4
  },

  // حالة صحية جيدة
  healthy: {
    age: 35,
    gender: 'female' as const,
    height: 160,
    weight: 55,
    chronicDiseases: [],
    medications: [],
    allergies: [],
    familyHistory: [],
    glucose: {
      fasting: 85,
      hba1c: 5.2
    },
    bloodPressure: {
      systolic: 110,
      diastolic: 70
    },
    exercise: 'vigorous' as const,
    sleep: {
      hours: 8,
      quality: 'excellent' as const
    },
    stress: 1
  }
};

// نصائح كامل المنجليفي المتخصصة
export const kamalTips = [
  {
    category: 'التغذية',
    icon: '🥗',
    tips: [
      'ابدأ وجبتك بالسلطة الخضراء لتبطئ امتصاص السكر',
      'اشرب كوب ماء قبل كل وجبة بـ 30 دقيقة',
      'تناول البروتين مع كل وجبة لتحافظ على استقرار السكر',
      'امضغ الطعام ببطء واستمتع بكل قضمة',
      'تجنب الأكل بعد المغرب إلا للضرورة'
    ]
  },
  {
    category: 'الحركة',
    icon: '🚶‍♂️',
    tips: [
      'امش 10 دقائق بعد كل وجبة رئيسية',
      'اصعد الدرج بدلاً من المصعد كلما أمكن',
      'اركن سيارتك بعيداً لتمشي أكثر',
      'قف وتحرك كل 30 دقيقة إذا كنت تعمل مكتبياً',
      'مارس تمارين المقاومة 3 مرات أسبوعياً'
    ]
  },
  {
    category: 'النوم',
    icon: '😴',
    tips: [
      'نم واستيقظ في نفس الوقت يومياً',
      'تجنب الشاشات قبل النوم بساعة',
      'اجعل غرفة نومك باردة ومظلمة وهادئة',
      'لا تتناول الكافيين بعد العصر',
      'اقرأ كتاباً أو مارس التأمل قبل النوم'
    ]
  },
  {
    category: 'التوتر',
    icon: '🧘‍♂️',
    tips: [
      'مارس التنفس العميق عند الشعور بالتوتر',
      'اكتب 3 أشياء تشعر بالامتنان لها يومياً',
      'تواصل مع الأصدقاء والعائلة بانتظام',
      'مارس هواية تحبها لمدة 30 دقيقة يومياً',
      'تعلم أن تقول "لا" للمهام الإضافية غير المهمة'
    ]
  }
];

const healthDataExport = {
  kamalSuccessStory,
  kamalCurrentHealth,
  sampleHealthProfiles,
  kamalTips
};

export default healthDataExport;