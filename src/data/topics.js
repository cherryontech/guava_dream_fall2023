const topicsData = [
  {
    name: 'Imposter Syndrome',
    id: 'imposter-syndrome',
    subTopics: [
      {
        name: 'Recognization and Reward',
        inquiries: [
          {
            name: 'How do you feel about your contributions to the team?',
            id: 'imposter-syndrome-t5-question-1',
          },
          {
            name: 'How do you react to positive feedback or recognition?',
            id: 'imposter-syndrome-t5-question-2',
          },
          {
            name: 'How often do you feel you deserve recognition?',
            id: 'imposter-syndrome-t5-question-3',
          },
        ],
      },
      {
        name: 'Asking for Help',
        inquiries: [
          {
            name: 'How comfortable are you seeking help or guidance?',
            id: 'imposter-syndrome-t6-question-1',
          },
          {
            name: 'Do you feel as if you should be able to perform without help?',
            id: 'imposter-syndrome-t6-question-2',
          },
          {
            name: 'Do you fear asking for help will reflect poorly on your performance?',
            id: 'imposter-syndrome-t6-question-3',
          },
        ],
      },
      {
        name: 'Pressure and Effort',
        inquiries: [
          {
            name: 'In what situations do you feel the most pressure to prove yourself?',
            id: 'imposter-syndrome-t7-question-1',
          },
          {
            name: 'Do you feel you are competing with coworkers? ',
            id: 'imposter-syndrome-t7-question-2',
          },
          {
            name: 'Do you feel extra pressure to put more effort in than your coworkers? ',
            id: 'imposter-syndrome-t7-question-3',
          },
        ],
      },
      {
        name: 'Awareness',
        inquiries: [
          {
            name: 'How aware are you of feelings of Imposter Syndrome on a daily basis?',
            id: 'imposter-syndrome-t8-question-1',
          },
          {
            name: 'How self-aware do you feel in general?',
            id: 'imposter-syndrome-t8-question-2',
          },
          {
            name: 'Do you feel aware of the impact Imposter Syndrome has on your life and work?',
            id: 'imposter-syndrome-t8-question-3',
          },
        ],
      },
    ],
  },
  {
    name: 'Sexism',
    id: 'sexism',
    subTopics: [
      {
        name: 'Parental Leave',
        inquiries: [
          {
            name: 'Do you feel parental leave time is sufficient?',
            id: 'sexism-t9-question-1',
          },
          {
            name: 'Do you believe parents should have equal leave time, regardless of gender? ',
            id: 'sexism-t9-question-2',
          },
          {
            name: 'Do you believe taking parental leave will impact your career trajectory?',
            id: 'sexism-t9-question-3',
          },
        ],

      },
      {
        name: 'Women in the Workplace',
        inquiries: [
          {
            name: 'In team meetings does a quieter team member, who is female, able to present a dissenting opinion?',
            id: 'sexism-t10-question-1',
          },
          {
            name: 'Are most work conversations dominated by male-presenting people?',
            id: 'sexism-t10-question-2',
          },
          {
            name: 'How confident do women feel to speak up in the workplace?',
            id: 'sexism-t10-question-3',
          },
        ],

      },
      {
        name: 'Bias',
        inquiries: [
          {
            name: 'When assigning tasks for a project, what is most likely, least likely, and neutral in terms of considering team members strengths?',
            id: 'sexism-t11-question-1',
          },
          {
            name: 'When assessing leadership qualities for a promotion, what is most likely, least likely, and neutral in terms of gender biases?',
            id: 'sexism-t11-question-2',
          },
          {
            name: 'When assessing leadership qualities for a promotion, what is most likely, least likely, and neutral in terms of ageism? ',
            id: 'sexism-t11-question-3',
          },
        ],

      },
      {
        name: 'Inclusivity',
        inquiries: [
          {
            name: 'Regarding communication in the workplace, what is most likely, least likely, and neutral in terms of fostering inclusivity?',
            id: 'sexism-t12-question-1',
          },
          {
            name: 'In general, does your workplace feel inclusive?',
            id: 'sexism-t12-question-2',
          },
          {
            name: 'Do you feel included, but feel as if certain coworkers are not included?',
            id: 'sexism-t12-question-3',
          },
        ],

      },
    ],
  },
  {
    name: 'Psychological Safety',
    id: 'psychological-safety',
    subTopics: [
      {
        name: 'Anxiety',
        inquiries: [
          {
            name: 'How anxious do you feel at work, compared to at home?',
            id: 'psychological-safety-t13-question-1',
          },
          {
            name: 'What things that your company does makes you feel calm at work?',
            id: 'psychological-safety-t13-question-2',
          },
          {
            name: 'What things that your coworkers do, makes you feel calm at work?',
            id: 'psychological-safety-t13-question-3',
          },
        ],

      },
      {
        name: 'Loneliness',
        inquiries: [
          {
            name: 'Do you experience loneliness at work?',
            id: 'psychological-safety-t14-question-1',
          },
          {
            name: 'How many coworkers do you feel connected to at work?',
            id: 'psychological-safety-t14-question-2',
          },
          {
            name: 'Do you feel as if coworkers as close friends or mere aquiantances? ',
            id: 'psychological-safety-t14-question-3',
          },
        ],

      },
      {
        name: 'Trauma',
        inquiries: [
          {
            name: 'Do you feel safe and able to perform while at work?',
            id: 'psychological-safety-t15-question-1',
          },
          {
            name: 'Does your workplace feel toxic?',
            id: 'psychological-safety-t15-question-2',
          },
          {
            name: 'Do you feel as if your company is aware of the impact trauma has on its employees?',
            id: 'psychological-safety-t15-question-3',
          },
        ],

      },
      {
        name: 'Impact on Performance',
        inquiries: [
          {
            name: 'Do you feel safe enough in the workplace to do your best work?',
            id: 'psychological-safety-t16-question-1',
          },
          {
            name: 'How often do you feel distracted from your work because you don not feel safe in the wokrplace?',
            id: 'psychological-safety-t16-question-2',
          },
          {
            name: 'How much of an impact does your feeling of safety have on your ability to be promoted?',
            id: 'psychological-safety-t16-question-3',
          },
        ],

      },
    ],
  },
  {
    name: 'Connectivity',
    id: 'connectivity',
    subTopics: [
      {
        name: 'Open Communication',
        inquiries: [
          {
            name: 'On a scale of 1 to 5, how comfortable do you feel expressing your opinions and ideas during team meetings?',
            id: 'connectivity-t17-question-1',
          },
          {
            name: 'How often do you feel that your team encourages open and honest communication?',
            id: 'connectivity-t17-question-2',
          },
          {
            name: 'Do you feel as if your opinion is valued equally, compared to your coworkers and vice versa?',
            id: 'connectivity-t17-question-3',
          },
        ],

      },
      {
        name: 'Fear of Retribution',
        inquiries: [
          {
            name: 'If you make a mistake at work, how likely do you think it is that you would face negative consequences or retribution?',
            id: 'connectivity-t18-question-1',
          },
          {
            name: 'How comfortable do you feel taking risks or proposing new ideas without fearing negative consequences?',
            id: 'connectivity-t18-question-2',
          },
          {
            name: 'If you share a dissenting opinion in a team discussion, how likely do you think it is that your colleagues will hold it against you?',
            id: 'connectivity-t18-question-3',
          },
        ],

      },
      {
        name: 'Speaking Up and Managerial Support',
        inquiries: [
          {
            name: 'Do you feel comfortable approaching your immediate supervisor or manager with concerns or challenges?',
            id: 'connectivity-t19-question-1',
          },
          {
            name: 'To what extent do you believe your team members value and respect diverse opinions and perspectives?',
            id: 'connectivity-t19-question-2',
          },
          {
            name: 'How often do you feel encouraged to share your thoughts and ideas, even if they differ from the majority?',
            id: 'connectivity-t19-question-3',
          },
        ],

      },
      {
        name: 'Social Adhesion',
        inquiries: [
          {
            name: 'Do you feel encouraged to participate with your team, or compete against them?',
            id: 'connectivity-t20-question-1',
          },
          {
            name: 'Do the personalities present in your workplace mesh well or are conflicts frequent?',
            id: 'connectivity-t20-question-2',
          },
          {
            name: 'Do you feel as if conflict is dealt with well within your team?',
            id: 'connectivity-t20-question-3',
          },
        ],

      },
    ],
  },
  {
    name: 'Belonging',
    id: 'belonging',
    subTopics: [
      {
        name: 'Team Connection',
        inquiries: [
          {
            name: 'On a scale of 1 to 5, how strongly do you feel connected to your immediate team members?',
            id: 'belonging-t21-question-1',
          },
          {
            name: 'Do you feel that your opinions and perspectives are considered when team decisions are made?',
            id: 'belonging-t21-question-2',
          },
          {
            name: 'Do you feel that all team members are valued equally?',
            id: 'belonging-t21-question-3',
          },
        ],

      },
      {
        name: 'Inclusion',
        inquiries: [
          {
            name: 'Does the workplace culture make you feel included and respected, regardless of your background?',
            id: 'belonging-t22-question-1',
          },
          {
            name: 'Do you feel that your manager actively supports your sense of belonging and inclusion within the team?',
            id: 'belonging-t22-question-2',
          },
          {
            name: 'Have you participated in any workplace events or initiatives that promote a sense of community and belonging?',
            id: 'belonging-t22-question-3',
          },
        ],

      },
      {
        name: 'Collaboration',
        inquiries: [
          {
            name: 'How collaborative do you find the work environment, where team members actively support each other?',
            id: 'belonging-t23-question-1',
          },
          {
            name: 'How often do you feel recognized and appreciated for your contributions within your team?',
            id: 'belonging-t23-question-2',
          },
          {
            name: 'Do you feel that collaboration is encouraged over competition?',
            id: 'belonging-t23-question-3',
          },
        ],

      },
      {
        name: 'DEI',
        inquiries: [
          {
            name: 'Are there workplace programs or initiatives that you believe contribute positively to diversity and inclusion?',
            id: 'belonging-t24-question-1',
          },
          {
            name: 'Do you feel as if the initiative present are having the intended impact?',
            id: 'belonging-t24-question-2',
          },
          {
            name: 'Do you feel that initiatives are kept up to date?',
            id: 'belonging-t24-question-3',
          },
        ],

      },
    ],
  },
  {
    name: 'Microaggressions',
    id: 'microaggressions',
    subTopics: [
      {
        name: 'Language',
        inquiries: [
          {
            name: 'How often do you consciously use inclusive language to ensure that your communication is free from potential microaggressions?',
            id: 'microaggressions-t25-question-1',
          },
          {
            name: 'A new team member has shared their preferred pronouns, but some colleagues consistently use incorrect pronouns when referring to them. What is the least likely, most likely, and neutral response to this situation?',
            id: 'microaggressions-t25-question-2',
          },
          {
            name: 'How equipped do you feel to report microaggressions regarding language use?',
            id: 'microaggressions-t25-question-3',
          },
        ],

      },
      {
        name: 'Impact Awareness',
        inquiries: [
          {
            name: 'To what extent do you think microaggressions can impact the well-being and productivity of individuals in the workplace?',
            id: 'microaggressions-t26-question-1',
          },
          {
            name: 'How aware of microaggressions do you think your coworkers are?',
            id: 'microaggressions-t26-question-2',
          },
          {
            name: 'How equipped do you feel your leadership team is to deal with microaggressions?',
            id: 'microaggressions-t26-question-3',
          },
        ],

      },
      {
        name: 'Team Collaboration and Inclusion',
        inquiries: [
          {
            name: 'During a casual conversation in the breakroom, a colleague makes a joke that unintentionally perpetuates a stereotype about a certain gender. What is the least likely, most likely, and neutral response to this situation in your workplace?',
            id: 'microaggressions-t27-question-1',
          },
          {
            name: 'During a collaborative project, a team member consistently dismisses input from a colleague with a disability. What is the least likely, most likely, and neutral response from the team?',
            id: 'microaggressions-t27-question-2',
          },
          {
            name: 'During a brainstorming session, a team member consistently interrupts and talks over a colleague who is an introvert. What is the least likely, most likely, and neutral response from the team?',
            id: 'microaggressions-t27-question-3',
          },
        ],

      },
      {
        name: 'Exlusion',
        inquiries: [
          {
            name: 'How often do you feel excluded from work events?',
            id: 'microaggressions-question-1',
          },
          {
            name: 'Do you feel as if events cater toward certain social groups over others?',
            id: 'microaggressions-question-2',
          },
          {
            name: 'How impactful is feeling left out on your work?',
            id: 'microaggressions-question-3',
          },
        ],
      },
    ],
  },
];

export default topicsData;
