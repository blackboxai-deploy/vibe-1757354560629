// نظام التخطيط الغذائي العلاجي مبني على منهج كامل المنجليفي

export interface NutritionPlan {
  plan_type: string;
  calories_range: string;
  macros: {
    carbs: string;
    protein: string;
    fat: string;
  };
  foods_to_include: Array<{
    name: string;
    benefit: string;
    servings: string;
  }>;
  foods_to_avoid: Array<{
    name: string;
    reason: string;
  }>;
  meal_timing: Array<{
    meal: string;
    time: string;
    recommendation: string;
  }>;
  supplements: Array<{
    name: string;
    dosage: string;
    benefit: string;
  }>;
  hydration: {
    water_goal: string;
    timing: string[];
  };
  kamal_secrets: string[];
}

class NutritionPlanner {
  
  // خطة للأصحاء - الحفاظ على الصحة
  private getHealthyPlan(): NutritionPlan {
    return {
      plan_type: 'خطة الحفاظ على الصحة',
      calories_range: '1800-2200 سعرة حرارية',
      macros: {
        carbs: '40-45% (كربوهيدرات معقدة)',
        protein: '25-30%',
        fat: '25-30% (دهون صحية)'
      },
      foods_to_include: [
        {
          name: 'الخضروات الورقية',
          benefit: 'غنية بالمغنيسيوم والألياف لتنظيم السكر',
          servings: '5-7 حصص يومياً'
        },
        {
          name: 'البروتين الخالي من الدهون',
          benefit: 'يحافظ على استقرار السكر ويبني العضلات',
          servings: '1-2 حصة في كل وجبة'
        },
        {
          name: 'المكسرات النيئة',
          benefit: 'تحتوي على دهون صحية ومغنيسيوم',
          servings: 'حفنة صغيرة يومياً'
        },
        {
          name: 'الأفوكادو',
          benefit: 'دهون أحادية غير مشبعة تحسن حساسية الأنسولين',
          servings: 'نصف حبة يومياً'
        },
        {
          name: 'الفواكه قليلة السكر',
          benefit: 'فيتامينات ومضادات أكسدة مع ألياف',
          servings: '2-3 حبات يومياً'
        }
      ],
      foods_to_avoid: [
        {
          name: 'السكريات المضافة',
          reason: 'ترفع السكر بسرعة وتسبب التهابات'
        },
        {
          name: 'الحبوب المكررة',
          reason: 'تؤدي لارتفاع مفاجئ في السكر'
        },
        {
          name: 'المشروبات الغازية',
          reason: 'سكر مضاف بكميات عالية'
        }
      ],
      meal_timing: [
        {
          meal: 'الإفطار',
          time: '7:00-8:00 ص',
          recommendation: 'بروتين + خضروات + دهون صحية'
        },
        {
          meal: 'الغداء',
          time: '12:00-1:00 ظ',
          recommendation: 'سلطة كبيرة + بروتين + خضروات مطبوخة'
        },
        {
          meal: 'وجبة خفيفة',
          time: '4:00-5:00 م',
          recommendation: 'مكسرات أو خضروات مع الحمص'
        },
        {
          meal: 'العشاء',
          time: '7:00-8:00 م',
          recommendation: 'خفيف: خضروات + بروتين قليل'
        }
      ],
      supplements: [
        {
          name: 'فيتامين D3',
          dosage: '2000 وحدة يومياً',
          benefit: 'يحسن حساسية الأنسولين وصحة العظام'
        },
        {
          name: 'أوميغا 3',
          dosage: '1000 ملغ يومياً',
          benefit: 'يقلل الالتهابات ويحسن صحة القلب'
        }
      ],
      hydration: {
        water_goal: '2.5-3 لتر يومياً',
        timing: [
          'كوب عند الاستيقاظ',
          'كوب قبل كل وجبة بـ 30 دقيقة',
          'كوب كل ساعتين'
        ]
      },
      kamal_secrets: [
        'ابدأ وجبتك دائماً بالسلطة - هذا يبطئ امتصاص السكر',
        'امضغ الطعام 20-30 مرة قبل البلع',
        'توقف عن الأكل عند الشبع بنسبة 80%',
        'اجعل نصف طبقك خضروات في كل وجبة'
      ]
    };
  }

  // خطة لمقاومة الأنسولين
  private getPrediabetesPlan(): NutritionPlan {
    return {
      plan_type: 'خطة عكس مقاومة الأنسولين',
      calories_range: '1500-1800 سعرة حرارية',
      macros: {
        carbs: '25-30% (منخفضة)',
        protein: '35-40%',
        fat: '35-40%'
      },
      foods_to_include: [
        {
          name: 'الجرجير والسبانخ',
          benefit: 'قليل الكربوهيدرات وغني بالمغنيسيوم',
          servings: 'بلا حدود في كل وجبة'
        },
        {
          name: 'السمك الدهني',
          benefit: 'أوميغا 3 يحسن حساسية الأنسولين',
          servings: '3-4 مرات أسبوعياً'
        },
        {
          name: 'البيض الكامل',
          benefit: 'بروتين عالي الجودة مع صفار مغذي',
          servings: '2-3 بيضات يومياً'
        },
        {
          name: 'زيت الزيتون البكر',
          benefit: 'دهون أحادية تحسن الالتهابات',
          servings: '2-3 ملاعق يومياً'
        },
        {
          name: 'الخضروات الصليبية',
          benefit: 'ألياف عالية وكربوهيدرات قليلة',
          servings: 'بحرية في كل وجبة'
        }
      ],
      foods_to_avoid: [
        {
          name: 'الخبز والمعكرونة',
          reason: 'كربوهيدرات مكررة ترفع السكر بسرعة'
        },
        {
          name: 'الفواكه عالية السكر',
          reason: 'فركتوز عالي يزيد مقاومة الأنسولين'
        },
        {
          name: 'العصائر حتى الطبيعية',
          reason: 'سكر مركز بدون ألياف'
        },
        {
          name: 'الأرز والبطاطا',
          reason: 'نشويات ترفع السكر بسرعة'
        }
      ],
      meal_timing: [
        {
          meal: 'الإفطار',
          time: '8:00-9:00 ص',
          recommendation: 'بيض + خضروات + زيت زيتون'
        },
        {
          meal: 'الغداء',
          time: '1:00-2:00 ظ',
          recommendation: 'سلطة كبيرة + لحم أو سمك + خضروات'
        },
        {
          meal: 'العشاء',
          time: '6:00-7:00 م',
          recommendation: 'خضروات + بروتين خفيف (آخر وجبة)'
        }
      ],
      supplements: [
        {
          name: 'الكروم',
          dosage: '200 مايكروغرام',
          benefit: 'يحسن حساسية الأنسولين'
        },
        {
          name: 'المغنيسيوم',
          dosage: '400 ملغ يومياً',
          benefit: 'ضروري لاستقلاب الجلوكوز'
        },
        {
          name: 'خل التفاح',
          dosage: 'ملعقة كبيرة قبل الوجبات',
          benefit: 'يبطئ امتصاص السكر'
        }
      ],
      hydration: {
        water_goal: '3-3.5 لتر يومياً',
        timing: [
          'كوبين عند الاستيقاظ',
          'كوب قبل كل وجبة بـ 30 دقيقة',
          'تجنب الشرب مع الوجبات'
        ]
      },
      kamal_secrets: [
        'الصيام المتقطع 16:8 أساسي لعكس مقاومة الأنسولين',
        'امش 15 دقيقة بعد كل وجبة - هذا سر مهم!',
        'تناول خل التفاح مع الماء قبل الوجبات بـ 15 دقيقة',
        'النوم 7-8 ساعات ضروري - قلة النوم تزيد مقاومة الأنسولين'
      ]
    };
  }

  // خطة علاج السكري (خطة كامل للشفاء)
  private getDiabetesPlan(): NutritionPlan {
    return {
      plan_type: 'خطة الشفاء من السكري - منهج كامل المنجليفي',
      calories_range: '1200-1500 سعرة حرارية',
      macros: {
        carbs: '10-15% (كيتو معدل)',
        protein: '35-40%',
        fat: '45-55%'
      },
      foods_to_include: [
        {
          name: 'الخضروات الورقية الخضراء',
          benefit: 'صافي كربوهيدرات قليل، مغنيسيوم عالي',
          servings: 'أساس كل وجبة - بلا حدود'
        },
        {
          name: 'اللحوم العضوية',
          benefit: 'بروتين عالي الجودة، صفر كربوهيدرات',
          servings: 'حصة في كل وجبة'
        },
        {
          name: 'الدهون الصحية',
          benefit: 'تحسن حساسية الأنسولين وتشبع لفترة طويلة',
          servings: '60-70% من السعرات'
        },
        {
          name: 'البروكلي والقرنبيط',
          benefit: 'كربوهيدرات صافية قليلة، ألياف عالية',
          servings: 'يومياً مع الوجبات'
        },
        {
          name: 'الأسماك الدهنية',
          benefit: 'أوميغا 3 لتقليل الالتهابات',
          servings: '4-5 مرات أسبوعياً'
        }
      ],
      foods_to_avoid: [
        {
          name: 'جميع الحبوب والنشويات',
          reason: 'ترفع السكر بشكل خطير للمصابين بالسكري'
        },
        {
          name: 'جميع أنواع السكر',
          reason: 'حتى العسل والتمر - يرفعون السكر فوراً'
        },
        {
          name: 'الفواكه (إلا التوت بكميات قليلة)',
          reason: 'فركتوز يزيد مقاومة الأنسولين'
        },
        {
          name: 'البقوليات',
          reason: 'كربوهيدرات عالية حتى لو صحية'
        },
        {
          name: 'منتجات الألبان عالية اللاكتوز',
          reason: 'اللاكتوز سكر يرفع الجلوكوز'
        }
      ],
      meal_timing: [
        {
          meal: 'الإفطار',
          time: '10:00-11:00 ص (بعد صيام 16 ساعة)',
          recommendation: 'بيض + خضروات ورقية + أفوكادو + زيت زيتون'
        },
        {
          meal: 'الغداء',
          time: '2:00-3:00 ظ',
          recommendation: 'سلطة كبيرة + لحم أو سمك + زيت زيتون'
        },
        {
          meal: 'آخر وجبة',
          time: '6:00 م (تنتهي النافذة الغذائية)',
          recommendation: 'خضروات مطبوخة + بروتين + دهون'
        }
      ],
      supplements: [
        {
          name: 'الكروم بيكولينات',
          dosage: '400 مايكروغرام',
          benefit: 'يحسن استقلاب الجلوكوز بشكل كبير'
        },
        {
          name: 'المغنيسيوم جليسينات',
          dosage: '600 ملغ يومياً',
          benefit: 'أساسي لحساسية الأنسولين'
        },
        {
          name: 'فيتامين B المركب',
          dosage: 'حسب التعليمات',
          benefit: 'يدعم استقلاب الكربوهيدرات'
        },
        {
          name: 'خل التفاح العضوي',
          dosage: 'ملعقتين كبيرتين قبل الوجبات',
          benefit: 'يخفض السكر بعد الوجبات بـ 20-30%'
        }
      ],
      hydration: {
        water_goal: '4-5 لتر يومياً',
        timing: [
          '3 أكواب عند الاستيقاظ',
          'كوبين قبل كل وجبة بـ 30 دقيقة',
          'تجنب الشرب مع الوجبات تماماً',
          'كوب كل ساعة بين الوجبات'
        ]
      },
      kamal_secrets: [
        'هذه نفس الخطة التي استخدمتها للشفاء من السكري في 6 أشهر',
        'الصيام المتقطع 16:8 إجباري - لا تساوم على هذا',
        'راقب السكر 4 مرات يومياً في الشهر الأول',
        'امش 45 دقيقة يومياً - مقسمة على 3 مرات',
        'النوم قبل 10 مساءً ضروري لإصلاح الأنسولين',
        'تجنب الضغط النفسي - التوتر يرفع السكر',
        'اشرب ماء دافئ مع الليمون عند الاستيقاظ',
        'لا تأكل بعد المغرب إلا للضرورة القصوى'
      ]
    };
  }

  // خطة المتعافين (مثل كامل)
  private getRecoveredPlan(): NutritionPlan {
    return {
      plan_type: 'خطة الحفاظ على الشفاء - نظام كامل المستمر',
      calories_range: '1800-2000 سعرة حرارية',
      macros: {
        carbs: '20-25% (محدودة ومعقدة)',
        protein: '30-35%',
        fat: '40-50%'
      },
      foods_to_include: [
        {
          name: 'الخضروات بجميع أنواعها',
          benefit: 'أساس كل وجبة لضمان عدم عودة السكري',
          servings: '70% من كل طبق'
        },
        {
          name: 'البروتينات المتنوعة',
          benefit: 'تحافظ على استقرار السكر طويل المدى',
          servings: 'في كل وجبة'
        },
        {
          name: 'المكسرات والبذور',
          benefit: 'وجبات خفيفة صحية تمنع الانتكاس',
          servings: 'حفنة يومياً'
        },
        {
          name: 'الدهون الصحية',
          benefit: 'تحافظ على حساسية الأنسولين المستعادة',
          servings: 'مع كل وجبة'
        }
      ],
      foods_to_avoid: [
        {
          name: 'السكريات (نهائياً)',
          reason: 'أي كمية قد تعيد تنشيط مقاومة الأنسولين'
        },
        {
          name: 'الحبوب المكررة',
          reason: 'خطر عالي لعودة السكري'
        },
        {
          name: 'الأطعمة المصنعة',
          reason: 'تحتوي على سكريات وإضافات مخفية'
        }
      ],
      meal_timing: [
        {
          meal: 'الإفطار',
          time: '8:00 ص',
          recommendation: 'نفس عادات الشفاء - لا تغيير'
        },
        {
          meal: 'الغداء',
          time: '1:00 ظ',
          recommendation: 'سلطة + بروتين + دهون صحية'
        },
        {
          meal: 'العشاء',
          time: '6:00 م',
          recommendation: 'خفيف ومبكر كما في فترة العلاج'
        }
      ],
      supplements: [
        {
          name: 'المغنيسيوم (مستمر)',
          dosage: '400 ملغ يومياً',
          benefit: 'الحفاظ على حساسية الأنسولين'
        },
        {
          name: 'أوميغا 3',
          dosage: '2000 ملغ يومياً',
          benefit: 'مضاد التهاب طبيعي'
        }
      ],
      hydration: {
        water_goal: '3-4 لتر يومياً',
        timing: [
          'نفس نظام فترة العلاج',
          'لا تغيير في عادات الشرب'
        ]
      },
      kamal_secrets: [
        'الحفاظ على الشفاء أصعب من تحقيقه - لا تتهاون',
        'أراقب سكري أسبوعياً للتأكد من عدم العودة',
        'ما زلت أمارس الصيام المتقطع كنمط حياة',
        'لم أتناول السكر أو الخبز منذ 3 سنوات',
        'الرياضة اليومية غير قابلة للنقاش',
        'أي انحراف عن النظام = خطر عودة السكري',
        'مساعدة الآخرين تذكرني بأهمية الالتزام'
      ]
    };
  }

  // الدالة الرئيسية لتوليد الخطة
  generatePlan(diabetesLevel: 'healthy' | 'prediabetes' | 'diabetes' | 'recovered'): NutritionPlan {
    switch (diabetesLevel) {
      case 'healthy':
        return this.getHealthyPlan();
      case 'prediabetes':
        return this.getPrediabetesPlan();
      case 'diabetes':
        return this.getDiabetesPlan();
      case 'recovered':
        return this.getRecoveredPlan();
      default:
        return this.getHealthyPlan();
    }
  }

  // خطة سريعة لـ 7 أيام
  generate7DayPlan(diabetesLevel: string): NutritionPlan & { weekly_schedule: Array<{ day: string; focus: string }> } {
    const basePlan = this.generatePlan(diabetesLevel as 'healthy' | 'prediabetes' | 'diabetes' | 'recovered');
    
    return {
      ...basePlan,
      weekly_schedule: [
        { day: 'السبت', focus: 'بداية قوية - التزام كامل' },
        { day: 'الأحد', focus: 'تعزيز العادات الجديدة' },
        { day: 'الاثنين', focus: 'التغلب على تحديات الأسبوع' },
        { day: 'الثلاثاء', focus: 'ثبات في الالتزام' },
        { day: 'الأربعاء', focus: 'منتصف الأسبوع - دفعة إضافية' },
        { day: 'الخميس', focus: 'الاستعداد لنهاية الأسبوع' },
        { day: 'الجمعة', focus: 'إنهاء الأسبوع بقوة' }
      ]
    };
  }
}

export const nutritionPlanner = new NutritionPlanner();