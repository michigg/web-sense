import { Task } from '@/modules/tasks/models/task'
import { SensorTaskStep, SurveyTaskStep } from '@/modules/tasks/models/taskStep'
import { Question } from '@/modules/inputs/models/sensors/survey/question'
import { QuestionType } from '@/modules/inputs/models/sensors/survey/questionType'
import { InputType } from '@/modules/inputs/models/inputType'

const questions = new Map<string, Question>()
questions.set('question-1', new Question(
  'question-1',
  QuestionType.TEXT,
  'Lärmquelle',
  'Was hat deiner Meinung nach den Lärm verursacht?'
))
questions.set('question-2', new Question(
  'question-2',
  QuestionType.TEXT,
  'Lärmeigenschaft',
  'Wie würdest du den Lärm beschreiben? (Bsp.: Impulsartig, gleichmäßig langanhaltend)'
))
questions.set('question-3', new Question(
  'question-3',
  QuestionType.SINGLE_CHOICE,
  'Lärmfrequenz',
  'Wie häufig tritt deiner Meinung nach der Lärm auf?',
  [
    {
      value: 'oneTimePerWeek',
      text: 'Einmal in der Woche'
    },
    {
      value: 'manyTimesPerWeek',
      text: 'Mehrmals in der Woche'
    },
    {
      value: 'daily',
      text: 'Täglich'
    },
    {
      value: 'manyTimesPerDay',
      text: 'Mehrmals am Tag'
    },
    {
      value: 'noSpecification',
      text: 'Weiß ich nicht'
    }
  ]
))
questions.set('question-4', new Question(
  'question-4',
  QuestionType.SINGLE_CHOICE,
  'Belästigungsgrad',
  'Wie sehr empfindest du den Umgebungslärm als störend?',
  [
    {
      value: 'veryAnnoying',
      text: 'Äußerst störend'
    },
    {
      value: 'stronglyAnnoying',
      text: 'Stark störend'
    },
    {
      value: 'mediumAnnoying',
      text: 'Mittelmäßig störend'
    },
    {
      value: 'smallAnnoying',
      text: 'Etwas störend'
    },
    {
      value: 'notAnnoying',
      text: 'Überhaupt nicht störend'
    },
    {
      value: 'noSpecification',
      text: 'Weiß ich nicht'
    }
  ]
))

// const test = 'Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o. Sesame snaps lemon drops marzipan jujubes sweet pudding lollipop. Lollipop donut I love I love I love tart liquorice I love cake. Chocolate lemon drops topping jujubes dessert biscuit carrot cake cheesecake. Chupa chups lollipop gummies jelly beans macaroon muffin cookie cookie. Cookie I love candy pudding carrot cake I love sweet roll caramels toffee. Cake pie macaroon sesame snaps jujubes pudding caramels. Ice cream candy ice cream donut wafer tart caramels halvah sesame snaps.'
export const dummyTasks = [
  new Task(
    1,
    'Lärm in der Stadt',
    'Mit der Teilnahme bei "Lärm in der Stadt" kannst du die lautesten und leisesten Orte in deiner Stadt entdecken. Benutze einfach dein Smartphone und nehme mit Hilfe des Mikrofons den Lärm in deiner Umgebung auf. Abschließend kannst du uns noch mit deinem persönlichen Lärmempfinden weiterhelfen.',
    {
      [InputType.GEOLOCATION]: 'Die Position wird benötigt, damit wir wissen, wo der Lärm auftrat.',
      [InputType.MIC]: 'Das Mikrofon wird zur Aufnahme des Umgebungslärms genutzt. Es wird dabei keine Sprachaufnahme angefertigt.',
      [InputType.SURVEY]: 'Die Umfrage nutzen wir, um uns einen besseren Eindruck von der Lärmbeschaffenheit zu machen.'
    },
    [
      new SensorTaskStep(
        'noise-step-2',
        'Umgebungslärm aufnehmen',
        'In diesem Schritt misst du den Umgebungslärm mit deinem Mikrofon im Smartphone. Bevor es los geht bitten wir dich die nachfolgenden Schritte zu beachten.',
        [
          {
            title: 'Vorraussetzung',
            description: 'Da wir uns für den Lärm in der Stadt interessieren, bitten wir dich, Aufnahmen nur außerhalb von geschlossenen Einrichtungen wie Wohnungen oder öffentlichen Gebäuden zu machen.'
          },
          {
            title: 'Halte dein Smartphone richtig',
            image: {
              src: '/img/noise/noise-smartphone-position.jpg',
              alt: 'placeholder'
            },
            description: 'Damit die Aufnahmen so präzise wie möglich werden, halte dein Smarphone vor dir in Brusthöhe und halte es von dir Weg.'
          },
          {
            title: 'Ein Moment der Stille',
            description: 'Die Aufnahme dauert etwa 10 Sekunden. Wichtig ist, dass du dich während der Aufnahme ruhig verhälst. Wir wollen ja nur den Umgebungslärm messen. ;)'
          }
        ],
        'ActivityNoiseMeasurement',
        [InputType.GEOLOCATION, InputType.MIC],
        'ActivityNoiseQuantitativeMeasurement'
      ),
      new SurveyTaskStep(
        'noise-step-3',
        'Subjektive Wahrnehmung',
        'Mit dieser Umfrage kannst du uns helfen die Lärmquelle besser einzuschätzen.',
        [],
        questions,
        'ActivityNoiseQualitativeMeasurement'
      )
    ]
  ),
  new Task(
    2,
    'Staualarm',
    'I love cake chocolate cake marshmallow sugar plum powder. Shortbread pie jelly-o bonbon icing. I love gingerbread topping donut fruitcake cupcake. Gummies gummi bears chocolate bar oat cake candy canes. Bear claw candy canes gummies carrot cake I love biscuit lollipop muffin. Toffee jelly beans halvah halvah topping muffin lollipop. Lemon drops cookie pastry brownie fruitcake dragée bonbon. Dragée pie marshmallow cheesecake pastry. Marshmallow candy canes powder jelly beans I love. Jelly beans pie I love macaroon marzipan danish tiramisu.',
    {
      [InputType.GEOLOCATION]: 'Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o',
      [InputType.DUMMY]: 'Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o'
    },
    [
      new SensorTaskStep(
        'smell-step-1',
        'Durchführung',
        'Drücken Sie auf Start. Füllen Sie anschließend das angezeigte Formular aus.',
        [],
        'ActivityNoiseMeasurement',
        [InputType.GEOLOCATION, InputType.DUMMY]
      )
    ]
  ),
  new Task(
    3,
    'Mülljäger',
    'Jelly beans caramels pastry toffee tiramisu croissant wafer. Powder jujubes icing jelly cake I love I love marzipan. Cupcake candy bonbon I love dessert. Bear claw tiramisu apple pie brownie bear claw I love. Cotton candy I love cookie muffin cheesecake sesame snaps donut. I love liquorice candy canes sugar plum apple pie. Carrot cake gummies fruitcake pudding tart bonbon liquorice. Dessert danish chocolate cake bear claw pastry carrot cake sesame snaps tiramisu gummies.',
    {
      [InputType.GEOLOCATION]: 'Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o',
      [InputType.SURVEY]: 'Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o',
      [InputType.DUMMY]: 'Cupcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o'
    },
    [
      new SensorTaskStep(
        'waste-step-1',
        'Durchführung',
        'upcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o.',
        [],
        'ActivityNoiseMeasurement',
        [InputType.GEOLOCATION, InputType.DUMMY]
      ),
      new SurveyTaskStep(
        'waste-step-2',
        'Durchführung',
        'upcake ipsum dolor sit amet tootsie roll tootsie roll jelly-o.',
        [],
        questions
      )
    ]
  )
]
