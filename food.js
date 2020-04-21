var foods = [
  {
    korean:
    {
      subject: "피자가",
      object: "피자를"
    },
    emoji: "pizza"
  },
  {
    korean:
    {
      subject: "사과가",
      object: "사과를"
    },
    emoji: "apple"
  },
  {
    korean:
    {
      subject: "딸기가",
      object: "딸기를"
    },
    emoji: "strawberry"
  },
  {
    korean:
    {
      subject: "바나나가",
      object: "바나나를"
    },
    emoji: "banana"
  },
  {
    korean:
    {
      subject: "샌드위치가",
      object: "샌드위치를"
    },
    emoji: "sandwich"
  },
  {
    korean:
    {
      subject: "레몬이",
      object: "레몬을"
    },
    emoji: "lemon"
  },
  {
    korean:
    {
      subject: "옥수수의이",
      object: "옥수수의을"
    },
    emoji: "corn"
  }
]

var food_verbs = [
  {
    korean: "먹어요",
    emoji: "yum"
  },
  {
    korean: "좋아요",
    emoji: "heart_eyes"
  }
]

var food_descriptors = [
  {
    korean: "비싸요",
    emoji: "money_with_wings"
  },
  {
    korean: "추워요",
    emoji: "cold_face"
  }
]

function generateFoodPhrase()
{
  var food = getRandom(foods)
  
  var result = ""
  
  if(getRandomBoolean())
  {
    var verb = getRandom(food_verbs)
    result += food["korean"]["object"] + ' :' + food["emoji"] + ':' + verb["korean"] + ' :' + verb["emoji"] + ':'
  }
  else
  {
    var adjective = getRandom(food_descriptors)
    result += food["korean"]["subject"] + ' :' + food["emoji"] + ':' + adjective["korean"] + ' :' + adjective["emoji"] + ':'
  }

  document.getElementById("result").innerHTML = joypixels.toImage(result)
}