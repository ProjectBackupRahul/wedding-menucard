const menu = [
    {
      id: 1,
      title: "Coffee",
      category: "Starter",
      img: "images/coffee.jpeg",
      desc: `Coffee is a popular beverage made by brewing roasted coffee beans, known for its rich flavor and energizing caffeine content. It can be served hot or cold in various styles, including espresso, latte, and cappuccino, and is enjoyed worldwide.
`
    },
    {
      id: 2,
      title: "Mineral Water",
      category: "Dinner",
      img: "images/mineral water.jpeg",
      desc: `Mineral water is naturally sourced water rich in minerals like calcium and magnesium, often bottled at the source. It can be still or carbonated and is valued for hydration and health benefits.
 `
    },
    {
      id: 3,
      title: "Ice-cream",
      category: "Deserts",
      img: "images/ice cream.jpeg",
      desc: `Ice cream is a sweet, frozen dessert made from cream, milk, sugar, and flavorings. It comes in various flavors and forms, such as scoops, cones, or bars, and is enjoyed worldwide as a refreshing treat.
`
    },
    {
      id: 4,
      title: "Momo",
      category: "Starter",
      img: "images/momo.jpeg",
      desc: `Momo is a popular South Asian dumpling made with a flour-based dough filled with vegetables, meat, or cheese. Steamed or fried, it is served with spicy chutneys and is a favorite street food, especially in Nepal, Tibet, and India.
 `
    },
    {
      id: 5,
      title: "Salt & Lemon",
      category: "Dinner",
      img: "images/salt & lemon.jpeg",
      desc: `Salt is a natural mineral, mainly sodium chloride, essential for health and widely used for seasoning and preservation.
& Lemons are a sour and juicy fruit that are high in vitamin C. They can be eaten fresh for juice, used in beverages and pickles, and lemon oil is used to flavor soft drinks and confectionery.
 `
    },
    {
      id: 6,
      title: "Jilipi",
      category: "Deserts",
      img: "images/jhilipi.jpeg",
      desc: `Jilipi, also known as jalebi, is a popular Indian sweet made by deep-frying fermented batter into spiral shapes and soaking them in sugar syrup. Crisp, juicy, and golden, it’s a festive treat enjoyed across South Asia.
`
    },
    {
      id: 7,
      title: "Fuchka",
      category: "Starter",
      img: "images/fuchka.jpeg",
      desc: `Fuchka is a popular Indian street food consisting of crisp, hollow puris filled with spicy tamarind water, tangy chutneys, mashed potatoes, chickpeas, or sprouts. It's a flavorful and refreshing snack loved for its burst of taste in every bite.
`
    },
    {
      id: 10,
      title: "Chicken satte",
      category: "Starter",
      img: "images/chicken satte.jpeg",
      desc: `Chicken sate is a flavorful Indian dish made by marinating chicken pieces in yogurt and spices, then grilling or roasting them until tender and smoky. Often served with mint chutney, it's a popular appetizer or snack.
`
    },
    {
      id: 8,
      title: "Salad",
      category: "Dinner",
      img: "images/salad.jpeg",
      desc: `Salad is a versatile dish of mixed vegetables, fruits, or other ingredients, valued for its freshness and nutrition.
  `
    },
    {
      id: 9,
      title: "Paan",
      category: "Deserts",
      img: "images/paan.jpeg",
      desc: `Paan is a traditional South Asian preparation made by wrapping areca nut, slaked lime, and various sweet or savory fillings in a betel leaf. Often chewed as a mouth freshener or digestive, it is a culturally significant treat.`
    },
    {
      id: 11,
      title: "Kachuri",
      category: "Dinner",
      img: "images/kachuri.jpeg",
      desc: `Kachuri is a popular Indian snack consisting of a deep-fried, flaky pastry filled with a spiced mixture, typically made of lentils, peas, or potatoes. It is enjoyed as a savory treat and is often served with chutneys or yogurt
.`
    },
    {
      id: 12,
      title: "Chana-Masala",
      category: "Dinner",
      img: "images/chana masala.jpeg",
      desc: `Chana-Masala is a popular North Indian dish made with chickpeas cooked in a spicy, tangy tomato-based gravy, flavored with a blend of aromatic spices. It is often served with rice, naan, or roti.

.`
    },
    {
      id: 13,
      title: "Sada Vat",
      category: "Dinner",
      img: "images/sada vat.jpeg",
      desc: `Sada Vat is a simple, mildly spiced Indian dish made with rice, lentils, and basic spices, often served alongside curries or vegetables.


.`
    },
    {
      id: 14,
      title: "Alu-vaja",
      category: "Dinner",
      img: "images/aluvaja.jpeg",
      desc: `Aloo Bhaja (or Alu Vaja) is a simple and crispy Bengali dish made by frying thinly sliced or diced potatoes, seasoned with spices. It is commonly served as a side dish with rice and dal.


.`
    },
    {
      id: 15,
      title: "Veg-Dal",
      category: "Dinner",
      img: "images/veg dal.jpeg",
      desc: `Veg dal is a nutritious Indian dish made with lentils, vegetables, and spices, served with rice or flatbreads.


.`
    },
    {
      id: 16,
      title: "Phulkopir Roast",
      category: "Dinner",
      img: "images/phulkopir roast.jpeg",
      desc: `Phulkopir Roast is a Bengali dish made with cauliflower, where the florets are marinated with a blend of spices and then roasted or fried until crispy and golden. It is typically served as a flavorful side dish.


.`
    },
    {
      id: 17,
      title: "Katla-curry",
      category: "Dinner",
      img: "images/fish curry.jpeg",
      desc: `katla-Curry is a flavorful dish made with fish cooked in a spiced gravy, typically made from tomatoes, onions, and a variety of aromatic spices. It is a popular dish in many cultures and is often served with rice or bread.


.`
    },
    {
      id: 18,
      title: "Mutton",
      category: "Dinner",
      img: "images/mutton.jpeg",
      desc: `Mutton is a flavorful dish made with tender goat meat cooked in a spiced gravy, often served with rice or flatbreads.


.`
    },
    {
      id: 19,
      title: "Chicken",
      category: "Dinner",
      img: "images/chicken.jpeg",
      desc: `Chicken is a popular dish made with chicken pieces cooked in a flavorful gravy, typically featuring a blend of spices like turmeric, cumin, coriander, and garam masala. It is often served with rice or bread.


.`
    },
    {
      id: 20,
      title: "Fruit-chutney",
      category: "Dinner",
      img: "images/fruit chutney.jpeg",
      desc: `Fruit Chutney is a sweet and tangy condiment made from fruits such as mango, apple, or tamarind, combined with spices, sugar, and vinegar. It is often served with savory dishes to add a burst of flavor.


.`
    },
    {
      id: 21,
      title: "Papor",
      category: "Dinner",
      img: "images/papor vaja.jpeg",
      desc: `Papad (or papor) is a crispy Indian snack made from lentil or rice flour, seasoned with spices, and either roasted or deep-fried.


.`
    },
    {
      id: 22,
      title: "Payes",
      category: "Dinner",
      img: "images/payes.jpeg",
      desc: `Payes (also known as Kheer) is a traditional Indian dessert made by simmering rice or vermicelli in milk, sugar, and flavored with cardamom, saffron, or nuts. It is a rich and creamy pudding often served during festivals or special occasions.


.`
    },
    {
      id: 23,
      title: "Misti-doi",
      category: "Dinner",
      img: "images/doi.jpeg",
      desc: `Misti Doi is a traditional Bengali sweetened yogurt dessert made by fermenting milk with sugar, often caramelized for a rich flavor. It is typically served chilled and is a popular treat in Bengal, especially during festivals.


.`
    },
    {
      id: 24,
      title: "Nolen-Gurer Rosogolla",
      category: "Dinner",
      img: "images/Nolen Gur Rosogolla.jpeg",
      desc: `Nolen Gurer Rosogolla is a Bengali variation of the classic Rosogolla, made with nolen gur (date palm jaggery), giving it a unique caramelized sweetness and rich flavor. These soft, spongy sweets are soaked in a syrup made from the jaggery, making them a beloved delicacy in Bengal.

.`
    },
  ];
  
  export default menu;
  