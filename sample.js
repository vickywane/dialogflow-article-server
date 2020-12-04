 const test = [
  {
    name: "Shredded Beef",
    category : "",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 4.0,
    availableUnits: 5,
    image_uri:
      "https://images.pexels.com/photos/5076309/pexels-photo-5076309.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Shredded Chicken",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 5.0,
    availableUnits: 1,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Beef Curry Sauce",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 6.0,
    availableUnits: 1,
    image_uri:
      "https://images.pexels.com/photos/4460190/pexels-photo-4460190.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Chicken Stir Fry",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 8.0,
    availableUnits: 3,
    image_uri:
      "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Sweet Sour Sauce",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 10.0,
    availableUnits: 0,
    image_uri:
      "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Fries",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 2.0,
    availableUnits: 7,
    image_uri:
      "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Mixed Veggies",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 3.0,
    availableUnits: 9,
    image_uri:
      "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Spring Onion",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 4.0,
    availableUnits: 10,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Toast",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 9.0,
    availableUnits: 11,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Eggs",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 12.0,
    availableUnits: 21,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Tuna",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    price: 32.0,
    availableUnits: 4,
  },
  {
    name: "Sandwich",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 12.0,
    availableUnits: 8,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Eggs Sausage Wrap",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 15.0,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    availableUnits: 7,
  },
  {
    name: "Club Sandwich",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 8.0,
    availableUnits: 9,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Pancakes",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 13.0,
    availableUnits: 2,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Cashew Nuts",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 5.0,
    availableUnits: 3,
    image_uri:
      "https://images.pexels.com/photos/4552419/pexels-photo-4552419.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Sweet Veggies",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 57.0,
    availableUnits: 9,
    image_uri:
      "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Chicken Salad",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 8.0,
    availableUnits: 12,
    image_uri:
      "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Crunchy Chicken",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 16.0,
    availableUnits: 14,
    image_uri:
      "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Apple Red Kidney Beans",
    description:
      "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
    price: 56.0,
    availableUnits: 12,
    image_uri:
      "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

export default test