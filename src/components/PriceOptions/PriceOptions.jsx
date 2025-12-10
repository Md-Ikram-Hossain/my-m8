import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = 
    [
  {
    "id": 1,
    "name": "Basic Fitness Plan",
    "price": 29.99,
    "features": [
      "Access to gym floor",
      "Cardio equipment",
      "Locker & shower access",
      "Free fitness assessment"
    ]
  },
  {
    "id": 2,
    "name": "Standard Membership",
    "price": 49.99,
    "features": [
      "Everything in Basic Plan",
      "Access to all group classes",
      "Weight training area",
      "Unlimited guest passes (2/month)"
    ]
  },
  {
    "id": 3,
    "name": "Premium Plus Plan",
    "price": 69.99,
    "features": [
      "Everything in Standard Membership",
      "Personal trainer (1 session/month)",
      "Sauna & steam room access",
      "24/7 gym access"
    ]
  },
  {
    "id": 4,
    "name": "Elite Annual Package",
    "price": 499.99,
    "features": [
      "Full-year membership with discount",
      "Unlimited personal training sessions",
      "Priority class booking",
      "Nutrition coaching"
    ]
  },
  {
    "id": 5,
    "name": "Student Special Plan",
    "price": 24.99,
    "features": [
      "Gym floor access",
      "Free WiFi",
      "Discounted group classes",
      "Valid student ID required"
    ]
  }
]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price in the town</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                priceOptions.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;