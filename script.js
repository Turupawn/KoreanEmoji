var locations = [
  "공원에",
  "학교에",
  "집에",
  "쇼핑 센터에"
]

var times = {
  "past": [
    "어제에",
    "작년"
  ],
  "present": [
    "오늘에",
    "내일",
    "매일"
  ],
  "future": [
    "내일",
    "내년"
  ]
}

var subjects = [
  "친구가",
  "누나가",
  "동생이",
  "오빠가",
  "학생가",
  "선생님이"
]

var objects = [
  "차를",
  "연필을",
  "가방을"
]

var conjugated_verbs = {
  "가다": {
    "past": "갔어요",
    "present": "가요",
    "future": "갈 거예요",
    "present continuous": "가고 있어요"
  },
  "사다": {
    "past": "샀어요",
    "present": "사요",
    "future": "살 거예요",
    "present continuous": "사고 있어요"
  },
  "만나다": {
    "past": "만났어요",
    "present": "만나요",
    "future": "만날 거예요",
    "present continuous": "만나고 있어요"
  },
  "일하다": {
    "past": "일했어요",
    "present": "일해요",
    "future": "일할 거예요",
    "present continuous": "일하고 있어요"
  },
  "공부다": {
    "past": "공부했어요",
    "present": "일해요",
    "future": "공부할 거예요",
    "present continuous": "공부하고 있어요"
  }
}

var verbs = [
  "가다",
  "사다",
  "만나다",
  "일하다",
  "공부다"
]

var tenses = [
  "past",
  "present",
  "future",
  "present continuous"
]

function getRandom(array)
{
  return array[Math.floor(Math.random()*array.length)]
}

function getRandomBoolean()
{
  return Math.random() >= 0.5
}

function generatePhrase()
{
  var verb = getRandom(verbs)
  var tense = getRandom(tenses)

  var result = ""

  if(getRandomBoolean())
  {
    result += getRandom(subjects) + " "
  }

  if(verb == "사다")
  {
    result += getRandom(objects) + " "
  }

  if(getRandomBoolean())
  {
    result += getRandom(locations) + " "
  }else
  {
    if(tense != "present continuous")
    {
      result += getRandom(times[tense]) + " "
    }
  }

  result += conjugated_verbs[verb][tense] + " "

  document.getElementById("result").innerHTML = result
}

generateFoodPhrase()